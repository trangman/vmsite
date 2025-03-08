import React from 'react';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1E0B4B] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/">
              <img 
                src="/images/Logo Silver_1.png" 
                alt="Venture Management (VM) Ltd" 
                className="h-8 sm:h-10 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 