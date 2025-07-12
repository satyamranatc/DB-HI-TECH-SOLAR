import React from 'react';
import { Sun } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span className="font-bold text-xl">DB HI TECH SOLAR</span>
            </div>
            <p className="text-gray-400">
              Leading the renewable energy revolution with cutting-edge solar solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Residential Solar</li>
              <li>Commercial Solar</li>
              <li>Energy Storage</li>
              <li>Maintenance</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>News</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Warranty</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DB HI TECH SOLAR ENERGY PVT LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;