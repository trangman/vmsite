import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E0B4B] mb-8 sm:mb-12">Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-[#00B2C8] mt-8 mb-4">1. Introduction</h2>
            <p>
              The information provided by Venture Management (VM) Ltd ("we," "us," or "our") on our website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-[#00B2C8] mt-8 mb-4">2. No Investment Advice</h2>
            <p>
              The information contained on this website is not intended as, and shall not be understood or construed as, financial or investment advice. The information provided does not constitute a solicitation of an offer to buy or an offer to sell financial securities. We are not a registered investment advisor or broker-dealer and do not purport to recommend or suggest any specific investments.
            </p>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-[#00B2C8] mt-8 mb-4">3. Investment Risks</h2>
            <p>
              Investing in securities involves risk, including the potential loss of principal. You should not invest money that you cannot afford to lose. Before making any investment decision, we recommend consulting with a qualified investment advisor, broker, or legal professional.
            </p>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-[#00B2C8] mt-8 mb-4">4. No Liability</h2>
            <p>
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
            </p>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-[#00B2C8] mt-8 mb-4">5. External Links</h2>
            <p>
              Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-[#00B2C8] mt-8 mb-4">6. Changes to Disclaimer</h2>
            <p>
              We reserve the right to make changes and updates to this disclaimer at any time without prior notice. We encourage you to periodically review this page for the latest information on our disclaimers.
            </p>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-[#00B2C8] mt-8 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this disclaimer, please contact us at info@venturemanagement.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Disclaimer; 