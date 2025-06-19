import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Zap, Heart } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth) * 100;
      const yPos = (clientY / innerHeight) * 100;
      
      heroRef.current.style.background = `
        radial-gradient(circle at ${xPos}% ${yPos}%, rgba(255, 55, 95, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #F2F2F7 0%, #E5E5EA 100%)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 animate-float">
          <Sparkles size={32} className="text-pink-500 opacity-60" />
        </div>
        <div className="absolute top-40 right-32 animate-float-delayed">
          <Zap size={28} className="text-blue-500 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float">
          <Heart size={24} className="text-green-500 opacity-60" />
        </div>
        <div className="absolute top-1/2 right-20 animate-float-delayed">
          <Sparkles size={20} className="text-pink-500 opacity-40" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Crafting{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Next-Gen
            </span>
            <br />
            Digital Experiences
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            We design stunning, interactive interfaces that captivate users and drive engagement through innovative cosmetic-themed UI design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('showcase')}
              className="group bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Explore Our Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-pink-500 hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}