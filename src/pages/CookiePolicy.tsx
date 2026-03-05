import React from 'react';
import Hero from '../components/Hero';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Hero 
        title="Cookie Policy" 
        subtitle="How we use cookies to improve your experience."
        bgColor="bg-slate-900"
      />
      <div className="max-w-4xl mx-auto px-4 py-20 prose prose-slate">
        <h2>1. What are Cookies?</h2>
        <p>Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.</p>
        
        <h2>2. Types of Cookies We Use</h2>
        <ul>
          <li><strong>Technical Cookies:</strong> These are essential for the website to function correctly.</li>
          <li><strong>Analytical Cookies:</strong> We use Google Analytics to collect information about how visitors use our site. This information is used to improve our services.</li>
          <li><strong>Third-Party Cookies:</strong> Our third-party partners, such as Gumroad, may set cookies on your device when you interact with their services on our site.</li>
        </ul>
        
        <h2>3. Managing Cookies</h2>
        <p>You can manage your cookie preferences at any time through our cookie banner. You can also disable cookies in your browser settings, but this may affect how our website functions.</p>
        
        <h2>4. Withdrawal of Consent</h2>
        <p>You have the right to withdraw your consent to our use of cookies at any time. To do so, please clear your browser's cookies or use our cookie management tool.</p>
        
        <h2>5. Link to Privacy Policy</h2>
        <p>For more information about how we protect your data, please read our <a href="/privacy-policy">Privacy Policy</a>.</p>
      </div>
    </div>
  );
}
