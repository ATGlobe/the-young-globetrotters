import React from 'react';
import { motion } from 'motion/react';
import { Send, ShieldCheck } from 'lucide-react';

export default function EmailSignup() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Placeholder for future integration (Mailchimp, ConvertKit, etc.)
    console.log('Newsletter Signup:', email);
    
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-[64px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-100">
          <div className="absolute inset-0 bg-world-pattern opacity-10 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Join the Young Explorers Club
              </h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                Get free travel printables, early access to new volumes, and exclusive discounts.
              </p>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/20 backdrop-blur-md rounded-2xl p-8 text-white font-bold"
                >
                  ✨ Welcome to the club! Check your inbox soon.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-grow px-6 py-5 rounded-2xl bg-white text-slate-900 font-medium outline-none focus:ring-4 focus:ring-blue-400/50 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl"
                  >
                    {status === 'loading' ? 'Joining...' : 'Join Free'}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}

              <div className="mt-8 flex items-center justify-center gap-2 text-blue-200 text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>We respect your privacy. No spam, ever.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
