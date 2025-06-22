import React from 'react';
import { Heart, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] border-t border-gray-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3 sm:mb-4">
              <span className="text-2xl sm:text-3xl font-bold text-[#00D4FF]">M.A.</span>
              <div className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse"></div>
            </div>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              Computer Science researcher, creative technologist, and athlete 
              building the future with AI, code, and compassion.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-xs sm:text-sm text-gray-500">
              <span>Built with</span>
              <Heart size={12} className="sm:w-3.5 sm:h-3.5 text-red-500" />
              <span>and</span>
              <Code size={12} className="sm:w-3.5 sm:h-3.5 text-[#00D4FF]" />
              <span>by Mahlet</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <div className="space-y-1 sm:space-y-2">
              {[
                { name: 'About', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-400 hover:text-[#00D4FF] transition-colors text-sm sm:text-base touch-button"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Get In Touch</h4>
            <div className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <p>Abu Dhabi, UAE</p>
              <p>ma7030@nyu.edu</p>
              <p>+971 547249227</p>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mt-3 sm:mt-4">
              <Zap size={14} className="sm:w-4 sm:h-4 text-[#FFD23F]" />
              <span className="text-xs sm:text-sm text-gray-400">
                Available for collaborations
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © 2024 Mahlet Atrsaw Andargei. All rights reserved.
          </div>
          
          {/* Animated Initials */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="relative">
              <div className="text-xl sm:text-2xl font-bold text-[#00D4FF] hover:text-[#9D4EDD] 
                            transition-colors cursor-pointer select-none touch-button">
                M
              </div>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="relative">
              <div className="text-xl sm:text-2xl font-bold text-[#9D4EDD] hover:text-[#FFD23F] 
                            transition-colors cursor-pointer select-none touch-button">
                A
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Easter Egg */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-xs text-gray-600 font-mono px-4">
            "The best way to predict the future is to create it." - Peter Drucker
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;