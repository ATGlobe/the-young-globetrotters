import React from 'react';

export default function Terms() {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-12 md:p-20 rounded-[48px] border border-slate-100 shadow-sm">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Terms of Use</h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Digital Products</h2>
              <p className="text-slate-600 leading-relaxed">
                All ebooks and educational materials sold on this website are digital products. Upon successful payment, you will receive a license to use these materials for personal, non-commercial use.
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-4">
                <li>You may not redistribute, sell, or share the digital files with others.</li>
                <li>Download links are valid for 48 hours from the time of purchase.</li>
                <li>Due to the nature of digital products, all sales are final and non-refundable once the download link has been accessed.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed">
                The content, characters, illustrations, and logos on this website are the property of The Young Globetrotters and are protected by international copyright laws. Any unauthorized use is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Disclaimer</h2>
              <p className="text-slate-600 leading-relaxed">
                The materials on The Young Globetrotters' website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Revisions and Errata</h2>
              <p className="text-slate-600 leading-relaxed">
                The materials appearing on The Young Globetrotters' website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section className="pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-400">
                Last updated: February 26, 2026.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
