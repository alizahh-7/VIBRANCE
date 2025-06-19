import React, { useState, useEffect } from 'react';
import { Menu, X, Palette, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Palette className="w-8 h-8 text-pink-500" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Vibrance UI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('showcase')}
              className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-colors"
            >
              Showcase
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64 mt-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 py-4 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-2xl px-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('showcase')}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-colors"
            >
              Showcase
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}