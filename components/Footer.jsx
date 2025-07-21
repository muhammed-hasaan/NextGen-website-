'use client'
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
// import ngtTransparentLogo from "../../public/images/ngtTransparentLogo.png"

const Footer = () => {
  const footerSections = {
    Solutions: [
      { name: 'Engage360', href: '/engage360' },
      { name: 'WorkForge', href: '/workforge' },
      { name: 'BackGrid', href: '/backgrid' },
      { name: 'Niblo AI', href: '/niblo' }
    ],
    Industries: [
      { name: 'Retail & eCommerce', href: '/sectors#retail' },
      { name: 'Healthcare', href: '/sectors#healthcare' },
      { name: 'SaaS', href: '/sectors#saas' },
      { name: 'Telecom', href: '/sectors#telecom' }
    ],
    // Company: [
    //   { name: 'Inside NGT', href: '/inside-ngt' },
    //   { name: 'CEO & MD', href: '/inside-ngt#leadership' },
    //   { name: 'Delivery Model', href: '/inside-ngt#delivery' },
    //   { name: 'Compliance', href: '/inside-ngt#compliance' }
    // ],
    Careers: [
      { name: 'View Openings', href: '/careers' },
      { name: 'Apply Now', href: '/careers#apply' },
      { name: 'FAQ', href: '/careers#faq' },
      { name: 'Join Talent Pool', href: '/careers#talent-pool' }
    ],
    Contact: [
      { name: 'Book a Call', href: '/lets-talk' },
      { name: 'Email Us', href: 'mailto:info@ngt.com' },
      { name: 'Office Location', href: '/contact#location' },
      { name: 'Social Links', href: '#social' }
    ]
  };

  return (
    <footer className="bg-[#383A3F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/images/ngtTransparentLogo.png"
              alt="NGT Logo" 
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              NGT delivers multilingual call centre support, virtual staffing, and backend 
              operations through structured offshore teams — driving reliable, 24/7 performance 
              across the globe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-blue-400 mr-3" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-gray-400">info@ngtbpo.com</div>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-blue-400 mr-3" />
              <div>
                <div className="font-medium">Phone</div>
                <div className="text-gray-400">+92518747470</div>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-blue-400 mr-3" />
              <div>
                <div className="font-medium">Office</div>
                <div className="text-gray-400">Islamabad, Pakistan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 NextGen Technologies. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;