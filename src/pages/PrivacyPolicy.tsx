import React from 'react';
import Hero from '../components/Hero';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Hero 
        title="Privacy Policy" 
        subtitle="How we protect your data at The Young Globetrotters."
        bgColor="bg-slate-900"
      />
      <div className="max-w-4xl mx-auto px-4 py-20 prose prose-slate">
        <h2>1. Introduction</h2>
        <p>Welcome to The Young Globetrotters. We are committed to protecting your personal data and your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
        
        <h2>2. Data Collection</h2>
        <p>We collect information that you provide directly to us, such as when you fill out a contact form or sign up for our newsletter. This may include your [Name], [Email], and any other information you choose to provide.</p>
        
        <h2>3. Use of Data</h2>
        <p>We use your data to provide our services, respond to your inquiries, and send you updates about our series. We do not sell your personal data to third parties.</p>
        
        <h2>4. Third-Party Services</h2>
        <p>We use third-party services to enhance our website's functionality:</p>
        <ul>
          <li><strong>Gumroad:</strong> We use Gumroad as our third-party payment processor for digital products. Your payment information is processed securely by Gumroad.</li>
          <li><strong>Google Analytics:</strong> We use Google Analytics to understand how visitors interact with our site.</li>
        </ul>
        
        <h2>5. Children's Privacy</h2>
        <p>Our website is designed for families and educators. We do not knowingly collect personal data from children under the age of 13 without parental consent. If we become aware that a child under 13 has provided us with personal data, we will take steps to delete such information.</p>
        
        <h2>6. Your Rights</h2>
        <p>Under the GDPR, you have the right to access, rectify, or erase your personal data. You also have the right to object to or restrict the processing of your data. To exercise these rights, please contact us at [Email].</p>
        
        <h2>7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>[Name]<br />[Address]<br />[Email]</p>
      </div>
    </div>
  );
}
