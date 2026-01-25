
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center h-16">
        {/* Logo in left corner */}
        <div className="flex items-center">
          <img 
            src="/removebg.png" 
            alt="Advance SOS Max Logo" 
            className="h-12 w-12 md:h-14 md:w-14 object-contain"
            onError={(e) => {
              // Fallback if logo doesn't exist - create a simple SVG logo
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = 'h-10 w-10 flex items-center justify-center';
              fallback.innerHTML = `
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5L30 10V20C30 28.2843 23.2843 35 15 35C6.71573 35 0 28.2843 0 20V10L10 5L20 5Z" fill="#FF3A46" opacity="0.8"/>
                  <path d="M20 5L10 10L10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20V10L20 5Z" fill="#FF3A46"/>
                  <path d="M15 15L20 20L25 15" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              `;
              target.parentNode?.insertBefore(fallback, target);
            }}
          />
        </div>

        {/* Centered Title */}
        <div className="flex-1 flex items-center justify-center">
          <div 
            className="text-sos-red font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight flex items-center cursor-pointer hover:scale-105 transition-transform" 
            onClick={() => navigate('/')}
          >
            <span className="text-white">Advance</span>
            <span className="ml-2">SOS</span>
            <span className="ml-2 text-white">Max</span>
          </div>
        </div>

        {/* Right side spacer for balance */}
        <div className="w-10 h-10"></div>
      </div>
    </header>
  );
};

export default Navbar;
