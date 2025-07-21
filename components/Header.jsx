'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Capabilities', href: '/capabilities' },
    { 
      name: 'Solutions', 
      href: '#',
      dropdown: [
        { name: 'Engage360', href: '/engage360' },
        { name: 'WorkForge', href: '/workforge' },
        { name: 'BackGrid', href: '/backgrid' },
        { name: 'Niblo AI', href: '/niblo' }
      ]
    },
    { name: 'Sectors', href: '/sectors' },
    { name: 'Inside NGT', href: '/inside-ngt' },
    { name: 'Careers', href: '/careers' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
          <Link href="/" >
            <img 
              src="/images/NextGenLogo(3).png" 
              alt="NGT Logo" 
              className="h-12 w-auto"
              />
              </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button 
                      className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Let's Talk
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;