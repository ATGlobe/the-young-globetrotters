import React from 'react';
import Hero from '../components/Hero';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Hero 
        title="Terms & Conditions" 
        subtitle="The rules of our global adventure."
        bgColor="bg-slate-900"
      />
      <div className="max-w-4xl mx-auto px-4 py-20 prose prose-slate">
        <h2>1. Digital Products</h2>
        <p>Our digital ebooks are for personal use only. By purchasing a digital product from The Young Globetrotters, you agree not to redistribute, resell, or share the product with others.</p>
        
        <h2>2. Intellectual Property</h2>
        <p>All content on this website, including text, images, and digital products, is the property of The Young Globetrotters and is protected by intellectual property laws. You may not use our content for commercial purposes without our written consent.</p>
        
        <h2>3. Purchases via Gumroad</h2>
        <p>All purchases of digital products are processed securely by Gumroad. By making a purchase, you agree to Gumroad's terms and conditions.</p>
        
        <h2>4. Refund Policy</h2>
        <p>Due to the nature of digital products, we do not offer refunds. If you have any issues with your purchase, please contact us at [Email].</p>
        
        <h2>5. Limitation of Liability</h2>
        <p>The Young Globetrotters is not liable for any damages that may result from the use of our website or digital products. Our liability is limited to the amount paid for the product.</p>
        
        <h2>6. Governing Law</h2>
        <p>These Terms & Conditions are governed by the laws of Italy and the European Union.</p>
        
        <h2>7. Contact Us</h2>
        <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
        <p>[Name]<br />[Address]<br />[Email]</p>
      </div>
    </div>
  );
}
