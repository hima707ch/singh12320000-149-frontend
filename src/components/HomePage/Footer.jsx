import React from 'react';
import images from '../assets/images';

const Footer = () => {
  return (
    <footer id="Footer_1" className="bg-gray-800">
      <div id="Footer_2" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div id="Footer_3" className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div id="Footer_4" className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div id="Footer_5" className="md:grid md:grid-cols-2 md:gap-8">
              <div id="Footer_6">
                <h3 id="Footer_7" className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
                <ul id="Footer_8" className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Buy</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Sell</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Rent</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Consult</a></li>
                </ul>
              </div>
              <div id="Footer_9" className="mt-12 md:mt-0">
                <h3 id="Footer_10" className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul id="Footer_11" className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div id="Footer_12" className="mt-8 xl:mt-0">
            <h3 id="Footer_13" className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Sign up for our newsletter</h3>
            <p id="Footer_14" className="mt-4 text-base text-gray-300">Stay updated with the latest real estate trends and offers by subscribing to our newsletter.</p>
            <form id="Footer_15" className="mt-4 sm:flex sm:max-w-md">
              <input
                type="email"
                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div id="Footer_16" className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-blue-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div id="Footer_17" className="mt-8 border-t border-gray-700 pt-8">
          <p id="Footer_18" className="text-base text-gray-400 xl:text-center">
            © 2023 Realty Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;