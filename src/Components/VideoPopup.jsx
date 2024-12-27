import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const videoOptions = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="flex items-center space-x-4 mt-10 mb-9">
      {/* Discover Now Button */}
      <button
        onClick={openPopup}
        style={{ backgroundColor: "#EEE5D8", color: "#CEAF83" }}
        className="px-6 py-2  rounded-full shadow-lg hover:bg-opacity-80 transition"
      >
        Discover now
      </button>

      {/* Watch Our Story Section */}
      <div className="flex items-center cursor-pointer" onClick={openPopup}>
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.752 11.168l-5.197 3.003A1 1 0 018 13.403V10.6a1 1 0 01.555-.894l5.197-3.003a1 1 0 011.496.894v6.006a1 1 0 01-1.496.894z"
            />
          </svg>
        </div>
        <span className="ml-2 text-black">Watch our story</span>
      </div>

      {/* Video Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-full max-w-4xl p-4">
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={closePopup}
            >
              &times;
            </button>
            <YouTube videoId="dQw4w9WgXcQ" opts={videoOptions} />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopup;
