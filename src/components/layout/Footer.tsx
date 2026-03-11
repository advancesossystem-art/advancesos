
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black py-12">
      <div className="container flex flex-wrap gap-8 justify-between">
        <div className="flex-1 min-w-64 max-w-md">
          <div className="font-bold text-xl mb-4">
            <span className="text-white">Advance</span>
            <span className="text-sos-red">SOS</span>
            <span className="text-white"> Max</span>
          </div>
          <p className="text-sos-lightgray text-sm">
            A next-generation emergency response platform designed for the future – 
            connecting communities, responders, and technology for faster, smarter safety.
          </p>
        </div>
        
        <div>
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <p className="text-sos-lightgray text-sm mb-2">advancesossystem@gmail.com</p>
            <p className="text-sos-lightgray text-sm">+91 95868 68538</p>
          </div>
        </div>
      </div>
      
      <div className="container mt-8 pt-8 border-t border-gray-800 text-sos-lightgray text-sm flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Advance SOS Max. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-sos-red transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-sos-red transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-sos-red transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
