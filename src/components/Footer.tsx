import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1E0B4B] text-white py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <div className="text-xs sm:text-sm text-white/70 text-center sm:text-left">
            © {currentYear} Venture Management (VM) Ltd. All rights reserved.
          </div>
          
          <div className="flex space-x-4 sm:space-x-6">
            <a href="/privacy-policy" className="text-xs sm:text-sm text-white/70 hover:text-white">Privacy Policy</a>
            <a href="/disclaimer" className="text-xs sm:text-sm text-white/70 hover:text-white">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 