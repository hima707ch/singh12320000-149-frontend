import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'Properties', route: '/propertylistingpage' },
    { name: 'Profile', route: '/userprofilepage' },
    { name: 'Contact', route: '/contactpage' },
  ];

  return (
    <header
      id="Header_1"
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div id="Header_2" className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={images[0]} alt="Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RealEstate</span>
            </Link>
          </div>

          <nav id="Header_3" className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                className={`text-lg font-medium transition-colors duration-200 hover:text-blue-600 ${location.pathname === link.route ? 'text-blue-600' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div id="Header_4" className="hidden md:flex items-center space-x-4">
            <Link
              to="/loginpage"
              className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              to="/registerpage"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Register
            </Link>
          </div>

          <button
            id="Header_5"
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div id="Header_6" className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.route}
                  className={`text-lg font-medium transition-colors duration-200 hover:text-blue-600 ${location.pathname === link.route ? 'text-blue-600' : 'text-gray-700'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/loginpage"
                className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/registerpage"
                className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;