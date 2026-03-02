import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import rateLimit from 'express-rate-limit';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import db, { initDb } from './src/lib/db.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-change-me';

const s3 = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'mock',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'mock',
  },
});

// Initialize Database
initDb();

// Middleware
app.use(cookieParser());
app.use(express.json({
  verify: (req: any, res, buf) => {
    req.rawBody = buf;
  }
}));

// Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use('/api/', apiLimiter);

// Auth Middleware
const authenticateToken = (req: any, res: any, next: any) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.status(403).json({ error: 'Forbidden' });
    req.user = user;
    next();
  });
};

// --- API ROUTES ---

// Auth Routes
app.post('/api/auth/register', async (req, res) => {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const id = uuidv4();

  try {
    db.prepare('INSERT INTO users (id, email, password, name) VALUES (?, ?, ?, ?)').run(id, email, hashedPassword, name);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: 'Email already exists' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user: any = db.prepare('SELECT * FROM users WHERE email = ?').get(email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
  res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'none' });
  res.json({ user: { id: user.id, email: user.email, name: user.name, role: user.role } });
});

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ success: true });
});

app.get('/api/auth/me', authenticateToken, (req: any, res) => {
  const user: any = db.prepare('SELECT id, email, name, role FROM users WHERE id = ?').get(req.user.id);
  res.json({ user });
});

// Secure Downloads
app.get('/api/downloads/:orderItemId', authenticateToken, async (req: any, res) => {
  const { orderItemId } = req.params;

  // 1. Verify ownership and status
  const item: any = db.prepare(`
    SELECT oi.*, o.status, o.user_id, p.file_key, d.download_count 
    FROM order_items oi
    JOIN orders o ON oi.order_id = o.id
    JOIN products p ON oi.product_id = p.id
    JOIN downloads d ON oi.order_item_id = d.order_item_id
    WHERE oi.id = ? AND o.user_id = ?
  `).get(orderItemId, req.user.id);

  if (!item || item.status !== 'paid') {
    return res.status(403).json({ error: 'Access denied' });
  }

  // 2. Check download limit (max 3)
  if (item.download_count >= 3) {
    return res.status(403).json({ error: 'Download limit exceeded' });
  }

  // 3. Generate Signed URL (AWS S3)
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: item.file_key,
  });

  try {
    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 * 48 }); // 48 hours

    // 4. Update download count
    db.prepare('UPDATE downloads SET download_count = download_count + 1, last_download_at = CURRENT_TIMESTAMP WHERE order_item_id = ?')
      .run(orderItemId);

    // 5. Audit Log
    db.prepare('INSERT INTO audit_logs (id, user_id, action, ip_address, details) VALUES (?, ?, ?, ?, ?)')
      .run(uuidv4(), req.user.id, 'DOWNLOAD', req.ip, `Downloaded item ${orderItemId}`);

    res.json({ url: signedUrl });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate download link' });
  }
});

// Activities
app.get('/api/activities', (req, res) => {
  const { type, city, character, difficulty, age_group, category } = req.query;
  let query = 'SELECT * FROM activities WHERE 1=1';
  const params: any[] = [];

  if (type) { query += ' AND type = ?'; params.push(type); }
  if (city) { query += ' AND city = ?'; params.push(city); }
  if (character) { query += ' AND character_id = ?'; params.push(character); }
  if (difficulty) { query += ' AND difficulty = ?'; params.push(difficulty); }
  if (age_group) { query += ' AND age_group = ?'; params.push(age_group); }
  if (category) { query += ' AND category = ?'; params.push(category); }

  const activities = db.prepare(query).all(...params);
  res.json(activities);
});

app.get('/api/activities/:id/download', authenticateToken, async (req: any, res) => {
  const activity: any = db.prepare('SELECT * FROM activities WHERE id = ?').get(req.params.id);
  if (!activity) return res.status(404).json({ error: 'Activity not found' });

  // Check access for premium content
  if (activity.category === 'premium') {
    const hasPaidOrder = db.prepare(`
      SELECT 1 FROM orders o
      JOIN order_items oi ON o.id = oi.order_id
      JOIN products p ON oi.product_id = p.id
      WHERE o.user_id = ? AND o.status = 'paid' AND p.city = ?
    `).get(req.user.id, activity.city);

    if (!hasPaidOrder && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'This content is reserved for ebook buyers of this city.' });
    }
  }

  try {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: activity.file_key,
    });
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
    
    // Log download
    db.prepare('INSERT INTO audit_logs (id, user_id, action, details) VALUES (?, ?, ?, ?)')
      .run(uuidv4(), req.user.id, 'activity_download', `Downloaded activity: ${activity.title}`);

    res.json({ url });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate download link' });
  }
});

// Quizzes
app.get('/api/quizzes', (req, res) => {
  const { city, is_free } = req.query;
  let query = 'SELECT * FROM quizzes WHERE 1=1';
  const params: any[] = [];

  if (city) { query += ' AND city = ?'; params.push(city); }
  if (is_free !== undefined) { query += ' AND is_free = ?'; params.push(is_free === 'true' ? 1 : 0); }

  const quizzes = db.prepare(query).all(...params);
  res.json(quizzes);
});

app.get('/api/quizzes/:id', (req, res) => {
  const quiz: any = db.prepare('SELECT * FROM quizzes WHERE id = ?').get(req.params.id);
  if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
  
  const questions = db.prepare('SELECT * FROM quiz_questions WHERE quiz_id = ?').all(req.params.id);
  res.json({ ...quiz, questions: questions.map((q: any) => ({ ...q, options: JSON.parse(q.options) })) });
});

// Admin Activity Management
app.post('/api/admin/activities', authenticateToken, (req: any, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  const { title, type, category, city, character_id, difficulty, age_group, file_key, image_url, description } = req.body;
  const id = uuidv4();
  db.prepare(`
    INSERT INTO activities (id, title, type, category, city, character_id, difficulty, age_group, file_key, image_url, description)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(id, title, type, category, city, character_id, difficulty, age_group, file_key, image_url, description);
  res.json({ id });
});

// Admin Quiz Management
app.post('/api/admin/quizzes', authenticateToken, (req: any, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  const { title, city, difficulty, questions } = req.body;
  const quizId = uuidv4();
  
  const insertQuiz = db.transaction(() => {
    db.prepare('INSERT INTO quizzes (id, title, city, difficulty) VALUES (?, ?, ?, ?)').run(quizId, title, city, difficulty);
    const insertQuestion = db.prepare('INSERT INTO quiz_questions (id, quiz_id, question, options, correct_answer) VALUES (?, ?, ?, ?, ?)');
    for (const q of questions) {
      insertQuestion.run(uuidv4(), quizId, q.question, JSON.stringify(q.options), q.correct_answer);
    }
  });
  
  insertQuiz();
  res.json({ id: quizId });
});

// Progress Tracking
app.get('/api/progress', authenticateToken, (req: any, res) => {
  const progress = db.prepare('SELECT * FROM user_progress WHERE user_id = ?').all(req.user.id);
  const badges = db.prepare('SELECT * FROM user_badges WHERE user_id = ?').all(req.user.id);
  res.json({ progress, badges });
});

app.post('/api/progress/free-quiz-complete', authenticateToken, (req: any, res) => {
  const { city, score } = req.body;
  const existing: any = db.prepare('SELECT * FROM user_progress WHERE user_id = ? AND city = ?').get(req.user.id, city);
  
  if (existing) {
    db.prepare('UPDATE user_progress SET free_quiz_completed = 1, free_score = MAX(free_score, ?) WHERE user_id = ? AND city = ?')
      .run(score, req.user.id, city);
  } else {
    db.prepare('INSERT INTO user_progress (user_id, city, free_quiz_completed, free_score) VALUES (?, ?, 1, ?)')
      .run(req.user.id, city, score);
  }

  // Award basic badge if not already earned
  const badgeExists = db.prepare('SELECT 1 FROM user_badges WHERE user_id = ? AND city = ? AND badge_type = "basic_explorer"').get(req.user.id, city);
  if (!badgeExists) {
    db.prepare('INSERT INTO user_badges (id, user_id, badge_type, city) VALUES (?, ?, ?, ?)').run(uuidv4(), req.user.id, 'basic_explorer', city);
  }

  res.json({ success: true });
});

app.post('/api/progress/quiz-complete', authenticateToken, (req: any, res) => {
  const { city, score } = req.body;
  const existing: any = db.prepare('SELECT * FROM user_progress WHERE user_id = ? AND city = ?').get(req.user.id, city);
  
  if (existing) {
    db.prepare('UPDATE user_progress SET quiz_completed = 1, premium_score = MAX(premium_score, ?) WHERE user_id = ? AND city = ?')
      .run(score, req.user.id, city);
  } else {
    db.prepare('INSERT INTO user_progress (user_id, city, quiz_completed, premium_score) VALUES (?, ?, 1, ?)')
      .run(req.user.id, city, score);
  }

  // Check for completion and award badge
  const updated: any = db.prepare('SELECT * FROM user_progress WHERE user_id = ? AND city = ?').get(req.user.id, city);
  if (updated.ebook_purchased && updated.quiz_completed && updated.activity_downloaded && !updated.completed_at) {
    db.prepare('UPDATE user_progress SET completed_at = CURRENT_TIMESTAMP WHERE user_id = ? AND city = ?').run(req.user.id, city);
    db.prepare('INSERT INTO user_badges (id, user_id, badge_type, city) VALUES (?, ?, ?, ?)').run(uuidv4(), req.user.id, 'city_explorer', city);
  }

  res.json({ success: true });
});

// Update activity download in progress
app.post('/api/progress/activity-download', authenticateToken, (req: any, res) => {
  const { city } = req.body;
  const existing: any = db.prepare('SELECT * FROM user_progress WHERE user_id = ? AND city = ?').get(req.user.id, city);
  
  if (existing) {
    db.prepare('UPDATE user_progress SET activity_downloaded = 1 WHERE user_id = ? AND city = ?').run(req.user.id, city);
  } else {
    db.prepare('INSERT INTO user_progress (user_id, city, activity_downloaded) VALUES (?, ?, 1)').run(req.user.id, city);
  }

  // Check for completion
  const updated: any = db.prepare('SELECT * FROM user_progress WHERE user_id = ? AND city = ?').get(req.user.id, city);
  if (updated.ebook_purchased && updated.quiz_completed && updated.activity_downloaded && !updated.completed_at) {
    db.prepare('UPDATE user_progress SET completed_at = CURRENT_TIMESTAMP WHERE user_id = ? AND city = ?').run(req.user.id, city);
    db.prepare('INSERT INTO user_badges (id, user_id, badge_type, city) VALUES (?, ?, ?, ?)').run(uuidv4(), req.user.id, 'city_explorer', city);
  }

  res.json({ success: true });
});

// Admin Routes (Simplified)
app.get('/api/admin/stats', authenticateToken, (req: any, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  
  const recentLogs = db.prepare('SELECT * FROM audit_logs ORDER BY created_at DESC LIMIT 10').all();
  res.json({ recentLogs });
});

// --- VITE MIDDLEWARE ---
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
