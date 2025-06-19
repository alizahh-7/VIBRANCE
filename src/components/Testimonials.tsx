import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    company: 'TechStart Inc.',
    content: 'Vibrance UI transformed our vision into a stunning reality. Their attention to detail and innovative approach exceeded our expectations.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Innovation Labs',
    content: 'The team delivered a beautiful, functional interface that our users absolutely love. The design system they created is incredible.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Creative Agency',
    content: 'Working with Vibrance UI was a game-changer. They brought fresh ideas and executed them flawlessly. Highly recommended!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
            <Quote size={48} className="text-pink-500 mb-6" />
            
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-pink-500 font-medium">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-pink-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-pink-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}