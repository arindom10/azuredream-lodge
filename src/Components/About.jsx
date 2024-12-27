import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Hero Section */}
      <div className="relative bg-blue-100 rounded-lg overflow-hidden shadow-md">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-2 text-gray-600">
            At Homeya, we aim to provide luxurious and affordable accommodations
            that redefine your travel experience.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="mt-2 text-gray-600">
            To be a global leader in hospitality, creating memorable stays and
            building a trusted brand.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <a href="/">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
