import React from 'react';
import { Mic } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
            <Mic className="relative h-10 w-10 text-orange-500 drop-shadow-lg" />
          </div>
          <span className="text-3xl font-black text-white bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Mystartup Podcast 
          </span>
        </div>
        
      </div>
    </header>
  );
};

export default Header;