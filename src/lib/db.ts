import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import { VOLUMES } from '../constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database('ebooks.db');

export function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT,
      role TEXT DEFAULT 'user',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      city TEXT NOT NULL,
      price REAL NOT NULL,
      file_key TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      stripe_session_id TEXT UNIQUE,
      total_amount REAL NOT NULL,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS order_items (
      id TEXT PRIMARY KEY,
      order_id TEXT NOT NULL,
      product_id TEXT NOT NULL,
      price REAL NOT NULL,
      FOREIGN KEY (order_id) REFERENCES orders(id),
      FOREIGN KEY (product_id) REFERENCES products(id)
    );

    CREATE TABLE IF NOT EXISTS downloads (
      id TEXT PRIMARY KEY,
      order_item_id TEXT NOT NULL,
      download_count INTEGER DEFAULT 0,
      last_download_at DATETIME,
      FOREIGN KEY (order_item_id) REFERENCES order_items(id)
    );

    CREATE TABLE IF NOT EXISTS audit_logs (
      id TEXT PRIMARY KEY,
      user_id TEXT,
      action TEXT NOT NULL,
      ip_address TEXT,
      user_agent TEXT,
      details TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS activities (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      type TEXT NOT NULL, -- coloring, comics, game, pack
      category TEXT NOT NULL, -- free, premium
      city TEXT,
      character_id TEXT,
      difficulty TEXT, -- easy, medium, hard
      age_group TEXT, -- 6-8, 9-12
      file_key TEXT,
      image_url TEXT,
      description TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS quizzes (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      city TEXT,
      difficulty TEXT,
      is_free BOOLEAN DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS quiz_questions (
      id TEXT PRIMARY KEY,
      quiz_id TEXT NOT NULL,
      question TEXT NOT NULL,
      options TEXT NOT NULL, -- JSON string
      correct_answer INTEGER NOT NULL,
      FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
    );

    CREATE TABLE IF NOT EXISTS user_progress (
      user_id TEXT NOT NULL,
      city TEXT NOT NULL,
      ebook_purchased BOOLEAN DEFAULT 0,
      quiz_completed BOOLEAN DEFAULT 0,
      activity_downloaded BOOLEAN DEFAULT 0,
      free_quiz_completed BOOLEAN DEFAULT 0,
      free_score INTEGER DEFAULT 0,
      premium_score INTEGER DEFAULT 0,
      completed_at DATETIME,
      PRIMARY KEY (user_id, city),
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS user_badges (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      badge_type TEXT NOT NULL, -- basic_explorer, city_explorer, regional_master, world_traveler
      city TEXT,
      earned_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);

  // Seed products if empty
  const count = db.prepare('SELECT COUNT(*) as count FROM products').get() as any;
  if (count.count === 0) {
    const insert = db.prepare('INSERT INTO products (id, title, city, price, file_key) VALUES (?, ?, ?, ?, ?)');
    for (const v of VOLUMES) {
      insert.run(v.id.toString(), v.title, v.city, 0, `ebooks/vol-${v.id}.pdf`);
    }
    console.log('Products seeded');
  }

  // Seed some initial activities if empty
  db.prepare('DELETE FROM activities').run();
  const insertActivity = db.prepare(`
    INSERT INTO activities (id, title, type, category, city, character_id, difficulty, age_group, file_key, image_url, description)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  
  for (const v of VOLUMES) {
    insertActivity.run(
      `coloring-${v.city.toLowerCase()}`, 
      `${v.city} Coloring Page`, 
      'coloring', 
      'free', 
      v.city, 
      'axel', 
      'easy', 
      '6-12', 
      `activities/coloring/${v.city.toLowerCase()}.pdf`, 
      v.cover, 
      `Color Axel and Tino in ${v.city}!`
    );
  }
  console.log('50 Coloring pages seeded');

  // Seed quizzes if empty
  const quizCount = db.prepare('SELECT COUNT(*) as count FROM quizzes').get() as any;
  if (quizCount.count === 0) {
    console.log('Quizzes seeding skipped (Rome Explorer Quiz removed)');
  }

  // Cleanup: Remove Rome Explorer Quiz if it was previously seeded
  db.prepare('DELETE FROM quizzes WHERE title = ?').run('Rome Explorer Quiz');

  // Seed free quizzes if empty
  const freeQuizCount = db.prepare('SELECT COUNT(*) as count FROM quizzes WHERE is_free = 1').get() as any;
  if (freeQuizCount.count === 0) {
    for (const v of VOLUMES.slice(0, 5)) {
      const quizId = `free-quiz-${v.city.toLowerCase()}`;
      db.prepare('INSERT INTO quizzes (id, title, city, difficulty, is_free) VALUES (?, ?, ?, ?, ?)').run(quizId, `${v.city} Discovery Quiz`, v.city, 'easy', 1);
      
      const insertQuestion = db.prepare('INSERT INTO quiz_questions (id, quiz_id, question, options, correct_answer) VALUES (?, ?, ?, ?, ?)');
      insertQuestion.run(uuidv4(), quizId, `Where is ${v.city} located?`, JSON.stringify([v.country, 'Mars', 'The Moon', 'Under the sea']), 0);
      insertQuestion.run(uuidv4(), quizId, `Who is the main character in the ${v.city} adventure?`, JSON.stringify(['Axel', 'Tino', 'Both Axel & Tino', 'Foxy']), 2);
      insertQuestion.run(uuidv4(), quizId, `Is ${v.city} a real city?`, JSON.stringify(['Yes', 'No', 'Only in dreams', 'Maybe']), 0);
      insertQuestion.run(uuidv4(), quizId, `What color is the ${v.city} ebook cover?`, JSON.stringify(['Blue', 'Red', 'Green', 'Yellow']), 0);
      insertQuestion.run(uuidv4(), quizId, `Do you want to visit ${v.city}?`, JSON.stringify(['Yes!', 'Absolutely!', 'Of course!', 'All of the above']), 3);
    }
    console.log('Free quizzes seeded');
  }

  console.log('Database initialized successfully');
}

export default db;
