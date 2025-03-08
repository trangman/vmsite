import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Disclaimer from './Disclaimer';
import PrivacyPolicy from './PrivacyPolicy';

function Hero() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Create form data for submission
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', name);
      formData.append('email', email);
      
      // Submit the form data to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setName('');
        setEmail('');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was a problem submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#E5F8FB]">
      {/* Large Gradient Arrow - Responsive */}
      <div 
        className="absolute right-0 top-0 w-[60%] md:w-[55%] lg:w-[52%] h-full"
        style={{
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 30% 100%, 0 50%)',
          background: 'linear-gradient(135deg, #00B2C8 0%, #1E0B4B 100%)',
          opacity: '0.9'
        }}
      />
      
      {/* Bottom-right beach image - responsive sizing */}
      <div 
        className="hidden md:block"
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '40%',
          maxWidth: '500px',
          height: '70%',
          maxHeight: '90%',
          overflow: 'hidden',
          zIndex: 10,
          display: 'flex',
          alignItems: 'flex-end',
          filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))'
        }}
      >
        <img 
          src="/images/koh-nangyuan-viewpoint-thailand.webp" 
          alt="Koh Nangyuan Viewpoint Thailand" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom right',
            display: 'block',
            marginBottom: '-1px'
          }}
        />
      </div>
      
      {/* Top-right beach image - responsive */}
      <div 
        className="hidden md:block"
        style={{
          position: 'absolute',
          right: '20%',
          top: '160px',
          width: '25%',
          maxWidth: '345px',
          height: '25%',
          maxHeight: '288px',
          overflow: 'hidden',
          zIndex: 10,
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
        }}
      >
        <img 
          src="/images/amazing-tropical-landscape-with-thai-traditional-boats.webp" 
          alt="Amazing tropical landscape with Thai traditional boats" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      
      {/* Left content section - responsive */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 md:pt-40 lg:pt-52 pb-16 sm:pb-20">
        <div className="w-full md:max-w-xl lg:max-w-2xl" style={{ marginTop: '5vh', marginBottom: '5vh' }}>
          <h1 className="text-left mb-4 sm:mb-6 md:mb-8">
            <span className="block text-[#00B2C8] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-1 sm:mb-2">Venture</span>
            <span className="block text-[#00B2C8] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-1 sm:mb-2">Management</span>
          </h1>
          
          <p className="text-[#1E0B4B] text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 max-w-lg">
            Sign up to receive our exclusive investment memorandum with detailed information about our latest opportunities in Thailand's emerging markets and luxury developments.
          </p>
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 mb-6" role="alert" aria-live="polite">
              <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
              <p>Your information has been submitted successfully. We'll be in touch with you shortly.</p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              className="w-full"
              data-netlify="true"
              name="contact"
              method="POST"
              aria-label="Signup Form"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-md">
                <div className="form-group w-full">
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-none bg-white focus:outline-none focus:ring-2 focus:ring-[#00B2C8] text-base sm:text-lg shadow-lg"
                    required
                    aria-required="true"
                  />
                </div>
                
                <div className="form-group w-full">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-none bg-white focus:outline-none focus:ring-2 focus:ring-[#00B2C8] text-base sm:text-lg shadow-lg"
                    required
                    aria-required="true"
                  />
                </div>
                
                {error && (
                  <div className="text-red-600 text-sm mt-1 w-full" role="alert" aria-live="assertive">{error}</div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 bg-[#1E0B4B] text-white hover:bg-[#2d1171] transition-colors text-base sm:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E0B4B] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Sign Up'} {!isSubmitting && <ArrowRight className="h-5 w-5" aria-hidden="true" />}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Partners() {
  return (
    <div className="bg-white py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          <div className="flex items-center justify-center p-2">
            <img 
              src="/images/Venture Management Logo.png" 
              alt="Venture Management" 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-2">
            <img 
              src="/images/Siam Venture Capital Logo.png" 
              alt="Siam Venture Capital" 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-2">
            <img 
              src="/images/Siam Property Holding.png" 
              alt="Siam Property Holding" 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-2">
            <img 
              src="/images/Thailand Investor Network.png" 
              alt="Thailand Investor Network" 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;