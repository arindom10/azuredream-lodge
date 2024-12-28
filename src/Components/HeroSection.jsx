import VideoPopup from "./VideoPopup";

const HeroSection = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 sm:px-6 md:px-8 py-10 relative">
      {/* Top Middle Image */}
      <img
        src="https://i.ibb.co/H4YRj92/Vector-1.png"
        alt="Top Decoration"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 mt-24"
      />

      {/* Left Section */}
      <div className="w-full md:w-3/5 space-y-6 relative z-10">
        <div>
          {/* Text Section */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-800">
            Find the top
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl relative">
            <span className="text-gray-800">
              Hotels nearby<span style={{ color: "#CEAF83" }}>.</span>
              {/* Image under "nearby" text */}
              <img
                src="https://i.ibb.co/6vXZ3d8/Vector.png"
                alt="Underline Decoration"
                className="absolute -bottom-4 right-0 w-28 sm:w-36 md:w-40 lg:w-48 xl:w-56 transform translate-x-4 opacity-50"
              />
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            {` Looking for a comfortable and convenient home? Our house rental
            offers spacious living areas, modern amenities, and a prime
            location. Featuring multiple bedrooms, updated kitchens, and cozy
            living spaces, its perfect for families or professionals.`}
          </p>
          <div
            style={{ color: "#4D4D4D" }}
            className="flex flex-wrap justify-between mt-6 text-sm sm:text-base md:text-lg"
          >
            <p>Vila</p>
            <p>Family House</p>
            <p>Hotel</p>
            <p>Room</p>
          </div>
        </div>

        {/* Video Popup */}
        <div>
          <VideoPopup />
        </div>

        {/* Bottom Form Section */}
      </div>
      {/* Right Image Section */}
      <div className="w-full md:w-2/5">
        <img
          src="https://i.ibb.co/cY2Sn8p/Image.png"
          alt="Hotel"
          className="rounded-xl object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-10 w-full">
        <p className="text-sm sm:text-base md:text-lg">Check Availability</p>
        <div className="flex  flex-wrap md:flex-nowrap  bg-white shadow-2xl rounded-full p-4 md:p-6 w-full max-w-5xl  mt-5">
          {/* Input Fields */}
          <div className="flex w-full justify-between items-center flex-wrap md:flex-nowrap">
            {/* Check In */}
            <div className="text-center px-2 sm:px-4 ">
              <p className="font-medium text-gray-700 text-sm sm:text-base">
                Check In
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">Add dates</p>
            </div>
            <div className="hidden md:block border-r border-gray-300 h-10"></div>

            {/* Check Out */}
            <div className="text-center px-2 sm:px-4">
              <p className="font-medium text-gray-700 text-sm sm:text-base">
                Check Out
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">Add dates</p>
            </div>
            <div className="hidden md:block border-r border-gray-300 h-10"></div>

            {/* Adults */}
            <div className="text-center px-2 sm:px-4">
              <p className="font-medium text-gray-700 text-sm sm:text-base">
                Adults
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">Add Adults</p>
            </div>
            <div className="hidden md:block border-r border-gray-300 h-10"></div>

            {/* Children */}
            <div className="text-center px-2 sm:px-4">
              <p className="font-medium text-gray-700 text-sm sm:text-base">
                Children
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">Add Children</p>
            </div>
            <div className="hidden md:block border-r border-gray-300 h-10"></div>

            {/* Rooms */}
            <div className="text-center px-2 sm:px-4">
              <p className="font-medium text-gray-700 text-sm sm:text-base">
                Room's
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">Add Room's</p>
            </div>
          </div>

          {/* Search Button */}
          <button
            style={{ backgroundColor: "#CEAF83" }}
            className="text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg ml-4 mt-4 md:mt-0"
          >
            <img src="https://i.ibb.co.com/xY3Cpjy/Vector-2.png" alt="Search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
