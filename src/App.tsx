import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Statistics from './components/Statistics';
import VideoGallery from './components/VideoGallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { SplashCursor } from './components/ui/splash-cursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true); // Force dark mode

  useEffect(() => {
    // Force dark mode
    setDarkMode(true);
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleDarkMode = () => {
    // Keep dark mode always enabled
    setDarkMode(true);
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  };

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  // Remove custom cursor effect since we're using SplashCursor
  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-black text-white transition-colors duration-300">
      {/* Splash Cursor Effect */}
      <SplashCursor 
        BACK_COLOR={{ r: 0.05, g: 0.05, b: 0.05 }}
        SPLAT_FORCE={8000}
        COLOR_UPDATE_SPEED={15}
        DENSITY_DISSIPATION={2.5}
      />
      
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <Showcase />
        <Statistics />
        <VideoGallery />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg"></div>
              <span className="text-2xl font-bold">Vibrance UI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Crafting next-generation digital experiences with passion and precision.
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500">
                © 2025 Vibrance UI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;