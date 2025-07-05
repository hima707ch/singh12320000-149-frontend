import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <div id="AboutUs_1" className="py-16 bg-white overflow-hidden">
      <div id="AboutUs_2" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="AboutUs_3" className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div id="AboutUs_4" className="relative">
            <h3 id="AboutUs_5" className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Who We Are
            </h3>
            <p id="AboutUs_6" className="mt-3 text-lg text-gray-500">
              With over a decade of expertise in real estate, we provide personalized solutions to connect you to your dream home, answering every query and guiding you at every step.
            </p>
            <dl id="AboutUs_7" className="mt-10 space-y-10">
              {[{"id": "AboutUs_8", "name": "Experienced Agents", "description": "Our trusted agents are with you every step of the way."}, {"id": "AboutUs_9", "name": "Comprehensive Listings", "description": "Access exclusive listings to find your perfect home."}, {"id": "AboutUs_10", "name": "Customer Support", "description": "24/7 assistance to answer your every query."}].map((feature) => (
                <div key={feature.id} className="relative">
                  <dt>
                    <p className="text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div id="AboutUs_11" className="mt-10 -mx-4 relative lg:mt-0">
            <img id="AboutUs_12" className="relative mx-auto rounded-lg shadow-lg" src={images[1] || 'https://via.placeholder.com/500x500'} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;