import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Leaf, CreditCard, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

const infoItems = [
  {
    icon: Truck,
    title: 'Spedizione Rapida',
    desc: 'Consegna in 3-5 giorni lavorativi in tutta Europa con corriere tracciato.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: RotateCcw,
    title: 'Reso Facile',
    desc: 'Hai 30 giorni di tempo per cambiare idea. Il reso è semplice e veloce.',
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    icon: ShieldCheck,
    title: 'Qualità Garantita',
    desc: 'Ogni prodotto è controllato singolarmente prima della spedizione.',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    desc: 'Utilizziamo inchiostri a base d\'acqua e imballaggi riciclabili.',
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    icon: CreditCard,
    title: 'Pagamenti Sicuri',
    desc: 'Accettiamo tutte le principali carte di credito e PayPal.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: HelpCircle,
    title: 'Supporto 24/7',
    desc: 'Il nostro team è sempre pronto ad aiutarti per ogni dubbio.',
    color: 'bg-orange-50 text-orange-600'
  }
];

export default function ShippingInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {infoItems.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
        >
          <div className={`w-16 h-16 rounded-3xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
            <item.icon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
          <p className="text-slate-500 font-medium leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
