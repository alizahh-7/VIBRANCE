import React from 'react';
import { 
  BarChart3, 
  Zap, 
  MousePointer, 
  Smartphone, 
  Layers, 
  Palette 
} from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Dashboard Design',
    description: 'Beautiful, functional dashboards that make complex data simple and actionable.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Interactive Animations',
    description: 'Smooth, engaging animations that enhance user experience and delight visitors.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: MousePointer,
    title: 'Custom Cursor Effects',
    description: 'Unique cursor interactions that add personality and polish to your interface.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Smartphone,
    title: 'Responsive UX',
    description: 'Seamless experiences across all devices with mobile-first design principles.',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Layers,
    title: 'Parallax Layouts',
    description: 'Dynamic, layered designs that create depth and visual interest.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Palette,
    title: 'Theme Systems',
    description: 'Comprehensive design systems with dark/light modes and consistent branding.',
    color: 'from-teal-500 to-cyan-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We specialize in creating stunning, interactive digital experiences that captivate and convert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`h-1 w-12 bg-gradient-to-r ${service.color} rounded-full`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}