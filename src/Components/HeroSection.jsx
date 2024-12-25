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
        <div>
          <button
            style={{ backgroundColor: "#EEE5D8", color: "#CEAF83" }}
            className="px-4 py-2  rounded-full hover:bg-yellow-600 mt-10"
          >
            Discover Now
          </button>
        </div>

        {/* Bottom Form Section */}
        <div className="mt-10">
          <p>Check Availability</p>
          <div className="flex justify-between items-center bg-white shadow-2xl rounded-full p-4 md:p-6 w-full max-w-5xl mx-auto mt-5">
            {/* Input Fields */}
            <div className="flex w-full justify-between items-center">
              {/* Check In */}
              <div className="text-center px-4">
                <p className="font-medium text-gray-700">Check In</p>
                <p className="text-gray-400 text-sm">Add dates</p>
              </div>
              <div className="border-r border-gray-300 h-10"></div>

              {/* Check Out */}
              <div className="text-center px-4">
                <p className="font-medium text-gray-700">Check Out</p>
                <p className="text-gray-400 text-sm">Add dates</p>
              </div>
              <div className="border-r border-gray-300 h-10"></div>

              {/* Adults */}
              <div className="text-center px-4">
                <p className="font-medium text-gray-700">Adults</p>
                <p className="text-gray-400 text-sm">Add Adults</p>
              </div>
              <div className="border-r border-gray-300 h-10"></div>

              {/* Children */}
              <div className="text-center px-4">
                <p className="font-medium text-gray-700">Children</p>
                <p className="text-gray-400 text-sm">Add Children</p>
              </div>
              <div className="border-r border-gray-300 h-10"></div>

              {/* Rooms */}
              <div className="text-center px-4">
                <p className="font-medium text-gray-700">Room's</p>
                <p className="text-gray-400 text-sm">Add Room's</p>
              </div>
            </div>

            {/* Search Button */}
            <button
              style={{ backgroundColor: "#CEAF83" }}
              className=" text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg ml-4"
            >
              <img src="https://i.ibb.co.com/xY3Cpjy/Vector-2.png" alt="" />
            </button>
          </div>
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
