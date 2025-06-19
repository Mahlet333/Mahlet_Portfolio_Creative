import React from 'react';
import { Heart, Code, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl font-bold text-[#00D4FF]">M.A.</span>
              <div className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse"></div>
            </div>
            <p className="text-gray-400 mb-4">
              Computer Science researcher, creative technologist, and athlete 
              building the future with AI, code, and compassion.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Built with</span>
              <Heart size={14} className="text-red-500" />
              <span>and</span>
              <Code size={14} className="text-[#00D4FF]" />
              <span>by Mahlet</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-[#00D4FF] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Abu Dhabi, UAE</p>
              <p>ma7030@nyu.edu</p>
              <p>+971 547249227</p>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <Zap size={16} className="text-[#FFD23F]" />
              <span className="text-sm text-gray-400">
                Available for collaborations
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Mahlet Atrsaw Andargei. All rights reserved.
          </div>
          
          {/* Animated Initials */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="text-2xl font-bold text-[#00D4FF] hover:text-[#9D4EDD] 
                            transition-colors cursor-pointer select-none">
                M
              </div>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="relative">
              <div className="text-2xl font-bold text-[#9D4EDD] hover:text-[#FFD23F] 
                            transition-colors cursor-pointer select-none">
                A
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Easter Egg */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-600 font-mono">
            "The best way to predict the future is to create it." - Peter Drucker
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;