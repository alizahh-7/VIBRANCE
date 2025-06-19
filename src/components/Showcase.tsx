import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const showcaseItems = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'Modern analytics dashboard with real-time data visualization',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Dashboard'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Sleek financial interface with gesture-based navigation',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile'
  },
  {
    id: 3,
    title: 'Creative Portfolio',
    description: 'Interactive portfolio with parallax effects and animations',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Portfolio'
  }
];

export default function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section id="showcase" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our latest projects showcasing innovative design and seamless user experiences.
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden group">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {showcaseItems.map((item) => (
                <div key={item.id} className="min-w-full h-full relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="inline-block bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-lg">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-colors">
                      <Play size={24} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-pink-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-pink-300'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-500 to-blue-500 rounded-full transition-all duration-100 ease-linear"
              style={{
                width: isAutoPlaying ? '100%' : '0%',
                animation: isAutoPlaying ? 'progress 4s linear infinite' : 'none'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}