import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';

import EmailSignup from './EmailSignup';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </main>
      <EmailSignup />
      <Footer />
      <div className="fixed bottom-2 left-2 w-[calc(100%-1rem)] max-w-[468px] h-[150px] z-[9999] overflow-hidden rounded-lg shadow-lg">
        <img 
          src="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Banner.jpg" 
          alt="Young Globetrotters Banner" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
