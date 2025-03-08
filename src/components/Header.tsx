import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1E0B4B] z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" aria-label="Venture Management - Home">
              <img 
                src="/images/Logo White_1.png" 
                alt="Venture Management (VM) Ltd" 
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 