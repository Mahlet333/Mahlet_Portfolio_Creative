import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, User, Briefcase, BookOpen, Mail } from 'lucide-react';
import ReactDOM from 'react-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'HOME', icon: Code },
    { path: '/about', label: 'ABOUT', icon: User },
    { path: '/projects', label: 'PROJECTS', icon: Briefcase },
    { path: '/blog', label: 'BLOG', icon: BookOpen },
    { path: '/contact', label: 'CONTACT', icon: Mail },
  ];

  const mobileMenu = (
    <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-50 mobile-nav-overlay">
      <div className="flex flex-col items-center justify-center h-full space-y-6 mobile-nav-menu">
        {navItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            onClick={() => setIsOpen(false)}
            className={`flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-300 touch-button w-full max-w-xs justify-center ${
              location.pathname === path
                ? 'text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/30'
                : 'text-gray-300 hover:text-[#00D4FF] hover:bg-[#00D4FF]/5 border border-transparent'
            }`}
          >
            <Icon size={24} />
            <span className="text-lg font-medium">{label}</span>
          </Link>
        ))}
        {/* Close button for mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-6 p-3 rounded-lg text-gray-400 hover:text-white transition-colors touch-button"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      {/* Mobile Menu Overlay rendered as a portal */}
      {isOpen && typeof window !== 'undefined' && ReactDOM.createPortal(mobileMenu, document.body)}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-bold text-[#00D4FF] hover:text-[#9D4EDD] transition-colors touch-button flex items-center"
          >
            M.A.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 touch-button ${
                  location.pathname === path
                    ? 'text-[#00D4FF] bg-[#00D4FF]/10'
                    : 'text-gray-300 hover:text-[#00D4FF] hover:bg-[#00D4FF]/5'
                }`}
              >
                <Icon size={16} />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-lg text-gray-300 hover:text-[#00D4FF] transition-colors touch-button"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;