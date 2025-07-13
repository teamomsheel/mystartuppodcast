import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

const Main = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Thanks! We'll notify you at ${email}`);
    setEmail('');
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/60 to-black/80"></div>
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight animate-gradient-x">
          🎙️ Fueling Startup{' '}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Minds
          </span>
        </h1>
        <h2 className="text-2xl md:text-4xl text-white/90 mb-6 font-bold">
          We’re Launching Soon: The Ultimate Podcast for Startup Founders & Builders
        </h2>
        <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
          Real talks. Raw stories. Proven tactics to scale your startup.
        </p>

        <form onSubmit={handleEmailSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-white/10 text-white placeholder-white/60 rounded-md border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold rounded-md hover:scale-105 transition-all"
            >
              <Mail className="inline-block mr-2 w-4 h-4" /> Notify Me
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Main;