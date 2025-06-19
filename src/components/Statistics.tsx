import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 250,
    suffix: '+',
    label: 'Happy Clients',
    color: 'text-blue-500'
  },
  {
    icon: Award,
    value: 150,
    suffix: '+',
    label: 'Projects Completed',
    color: 'text-green-500'
  },
  {
    icon: TrendingUp,
    value: 99,
    suffix: '%',
    label: 'Success Rate',
    color: 'text-pink-500'
  },
  {
    icon: Clock,
    value: 5,
    suffix: ' Years',
    label: 'Experience',
    color: 'text-purple-500'
  }
];

export default function Statistics() {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let currentValue = 0;
            
            const timer = setInterval(() => {
              currentValue += increment;
              if (currentValue >= stat.value) {
                currentValue = stat.value;
                clearInterval(timer);
              }
              
              setAnimatedValues(prev => {
                const newValues = [...prev];
                newValues[index] = Math.floor(currentValue);
                return newValues;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Numbers that reflect our commitment to delivering exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-4">
                  <Icon size={48} className={`${stat.color} mx-auto mb-4`} />
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {animatedValues[index]}{stat.suffix}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Graph Visualization */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Growth Over Time
          </h3>
          <div className="flex items-end justify-between h-64 space-x-2">
            {[40, 65, 45, 80, 60, 95, 75, 100, 85, 90, 95, 100].map((height, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-pink-500 to-blue-500 rounded-t-lg flex-1 transition-all duration-1000 ease-out hover:opacity-80 cursor-pointer"
                style={{
                  height: hasAnimated ? `${height}%` : '0%',
                  transitionDelay: `${index * 100}ms`
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-500 dark:text-gray-400">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}