import React from 'react';
import images from '../assets/images';

const CallToAction = () => {
  return (
    <div id="CallToAction_1" className="bg-blue-700">
      <div id="CallToAction_2" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 id="CallToAction_3" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to begin your journey?</span>
          <span className="block text-blue-200">Join us today.</span>
        </h2>
        <div id="CallToAction_4" className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div id="CallToAction_5" className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
            >
              Get Started
            </a>
          </div>
          <div id="CallToAction_6" className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;