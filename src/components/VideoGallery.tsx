import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'UI Animation Showcase',
    thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '2:30'
  },
  {
    id: 2,
    title: 'Interactive Design Process',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '3:45'
  },
  {
    id: 3,
    title: 'Mobile UX Walkthrough',
    thumbnail: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '1:20'
  }
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            See Our Work in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Watch how we bring digital experiences to life through innovative design and smooth animations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="aspect-video relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Play Button */}
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  hoveredVideo === video.id ? 'scale-110' : 'scale-100'
                }`}>
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-4 hover:bg-white/30 transition-colors">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-2 py-1 rounded-lg text-sm">
                  {video.duration}
                </div>

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              
              <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play size={64} className="mx-auto mb-4 opacity-50" />
                    <p className="text-xl mb-2">
                      {videos.find(v => v.id === selectedVideo)?.title}
                    </p>
                    <p className="text-gray-400">Video player would be integrated here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}