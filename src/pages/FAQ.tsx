import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "What formats are the ebooks available in?",
    answer: "Our ebooks are available in PDF, EPUB, and MOBI formats. When you purchase a volume, you get access to all formats so you can read them on any device (Kindle, iPad, Android, PC, etc.)."
  },
  {
    question: "How do I receive my ebook after purchase?",
    answer: "Immediately after payment, you will be redirected to a secure download page. You will also receive an automatic email with a secure link to download your files. Please note that for security reasons, download links expire after 48 hours."
  },
  {
    question: "What is the 'Learning Activities' version?",
    answer: "The 'Learning Activities' version includes the full ebook plus a set of printable educational materials: coloring pages, word searches, geography quizzes, and a more detailed historical guide related to the city of the volume."
  },
  {
    question: "Is there a recommended age for the series?",
    answer: "The series is designed for children aged 6 to 12. Younger children will enjoy the illustrations and having the stories read to them, while older children can read independently and engage with the educational facts."
  },
  {
    question: "Can I buy the entire collection at once?",
    answer: "Yes! We offer a special 'Global Explorer' bundle that includes all 50 volumes at a significant discount. You can find this option in our Shop section."
  },
  {
    question: "What should I do if my download link has expired?",
    answer: "No problem! Just contact our support team with your order number, and we will generate a new secure link for you right away."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 p-2 rounded-xl transition-all ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-500">Everything you need to know about The Young Globetrotters.</p>
        </div>

        <div className="bg-white rounded-[48px] border border-slate-100 shadow-sm p-8 md:p-12">
          {FAQS.map((faq, i) => (
            <FAQItem 
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-16 text-center bg-blue-600 rounded-[40px] p-12 text-white shadow-xl shadow-blue-200">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-blue-100 mb-8">We're here to help you and your little explorers.</p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
