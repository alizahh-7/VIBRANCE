import React, { useEffect, useState } from 'react';
import { Palette } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black flex items-center justify-center transition-opacity duration-500">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="animate-spin-slow">
            <Palette size={64} className="text-pink-500 mx-auto" />
          </div>
          <div className="absolute inset-0 animate-pulse">
            <Palette size={64} className="text-blue-500 mx-auto opacity-30" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Vibrance UI
        </h1>
        <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-blue-500 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {progress}% Complete
        </p>
      </div>
    </div>
  );
}