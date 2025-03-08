import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1E0B4B] text-white py-6 sm:py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-sm font-semibold mb-3">Contact Us</h3>
            <address className="text-xs sm:text-sm text-white/70 not-italic">
              <p className="mb-1 font-semibold text-white">Venture Management (VM) Ltd</p>
              <p className="mb-1 font-semibold">Labuan Office</p>
              <p className="mb-1">Unit 3A-2, Level 3A,</p>
              <p className="mb-1">Labuan Times Square, Jalan Merdeka</p>
              <p className="mb-1">87000 W.P Labuan, Malaysia.</p>
            </address>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 border-t border-white/10 pt-4">
          <div className="text-xs sm:text-sm text-white/70 text-center sm:text-left">
            © {currentYear} Venture Management (VM) Ltd. All rights reserved.
          </div>
          
          <nav aria-label="Footer Navigation">
            <ul className="flex space-x-4 sm:space-x-6 list-none p-0 m-0">
              <li>
                <Link to="/privacy-policy" className="text-xs sm:text-sm text-white/70 hover:text-white focus:outline-none focus:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-xs sm:text-sm text-white/70 hover:text-white focus:outline-none focus:underline">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 