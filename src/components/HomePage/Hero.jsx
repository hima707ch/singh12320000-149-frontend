import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-green-50 via-cyan-50 to-blue-50 pt-16 pb-32">
      <div id="Hero_2" className="absolute inset-0">
        <svg id="Hero_3" className="absolute right-0 top-0 opacity-10" width="404" height="404" fill="none">
          <defs>
            <pattern id="Hero_pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#Hero_pattern)" />
        </svg>
      </div>
      <div id="Hero_4" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="Hero_5" className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div id="Hero_6" className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 id="Hero_7" className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
              <span id="Hero_8" className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Welcome to Your Next</span>
              <span id="Hero_9" className="block animate-bounce mt-3">Destination</span>
            </h1>
            <p id="Hero_10" className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Discover the best properties and make your dream home a reality. Explore the finest listings today for your next journey.
            </p>
            <div id="Hero_11" className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <button id="Hero_12" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-cyan-600 bg-white hover:bg-cyan-50">
                Start Your Search
              </button>
            </div>
          </div>
          <div id="Hero_13" className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div id="Hero_14" className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img id="Hero_15" className="w-full rounded-lg transform transition-transform hover:scale-105" src={images[0] || 'https://via.placeholder.com/600x400'} alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;