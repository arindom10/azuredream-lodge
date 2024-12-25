import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 py-10 relative">
      {/* Top Middle Image */}
      <img
        style={{ height: "50px", width: "50px" }}
        src="https://i.ibb.co/H4YRj92/Vector-1.png"
        alt="Top Decoration"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 md:w-24 mt-24"
      />

      {/* Left Section */}
      <div className="w-full md:w-3/5 space-y-6 relative z-10">
        {/* Text Section */}
        <div>
          <h1 className="text-8xl text-gray-800">Find the top</h1>
          <h1 className="text-8xl relative">
            <span className="text-gray-800">
              Hotels nearby<span style={{ color: "#CEAF83" }}>.</span>
              {/* Image under "nearby" text */}
              <img
                style={{ height: "65px", width: "500px" }}
                src="https://i.ibb.co/6vXZ3d8/Vector.png"
                alt="Underline Decoration"
                className="absolute -bottom-4 right-0 w-36 md:w-40 transform translate-x-4 opacity-50 mb-4"
              />
            </span>
          </h1>

          <p className="mt-4 text-gray-600">
            Looking for a comfortable and convenient home? Our house rental
            offers spacious living areas, modern amenities, and a prime
            location. Featuring multiple bedrooms, updated kitchens, and cozy
            living spaces, it’s perfect for families or professionals.
          </p>
          <div
            style={{ color: "#4D4D4D" }}
            className="flex justify-between mt-6"
          >
            <p>Vila</p>
            <p>Family House</p>
            <p>Hotel</p>
            <p>Room</p>
          </div>
        </div>

        {/* Bottom Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          <div>
            <label className="text-gray-700 font-medium">Check In</label>
            <input
              type="text"
              placeholder="Add dates"
              className="mt-2 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label className="text-gray-700 font-medium">Check Out</label>
            <input
              type="text"
              placeholder="Add dates"
              className="mt-2 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label className="text-gray-700 font-medium">Adults</label>
            <input
              type="text"
              placeholder="Add Adults"
              className="mt-2 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label className="text-gray-700 font-medium">Children</label>
            <input
              type="text"
              placeholder="Add Children"
              className="mt-2 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label className="text-gray-700 font-medium">Rooms</label>
            <input
              type="text"
              placeholder="Add Rooms"
              className="mt-2 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <button className="col-span-2 md:col-span-1 px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
            Search
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-2/5">
        <img
          src="https://i.ibb.co/cY2Sn8p/Image.png"
          alt="Hotel"
          className="rounded-xl object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
