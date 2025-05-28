
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Charitha K Raj
          </h3>
          <p className="text-gray-400 mb-4">
            Information Science & Engineering Student
          </p>
          <div className="border-t border-gray-800 pt-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Charitha K Raj. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
