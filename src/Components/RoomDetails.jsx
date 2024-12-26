import React from "react";

const RoomDetails = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Double Room",
      image: "https://i.ibb.co.com/jy48BZC/01.png", // Replace with actual image URL
      price: "$62.00/Day",
      size: "500 Sqft",
      guests: "1-4 guests",
      wifi: "Free Wi-Fi",
    },
    {
      id: 2,
      name: "Deluxe Double Room",
      image: "https://i.ibb.co.com/qM2F5xn/02.png", // Replace with actual image URL
      price: "$62.00/Day",
      size: "500 Sqft",
      guests: "1-4 guests",
      wifi: "Free Wi-Fi",
    },
    {
      id: 3,
      name: "Hill View Suite",
      image: "https://i.ibb.co.com/R46GwcG/03.png", // Replace with actual image URL
      price: "$62.00/Day",
      size: "500 Sqft",
      guests: "1-4 guests",
      wifi: "Free Wi-Fi",
    },
    {
      id: 4,
      name: "Hill View Suite",
      image: "https://i.ibb.co.com/x1LmhCD/04.png", // Replace with actual image URL
      price: "$62.00/Day",
      size: "500 Sqft",
      guests: "1-4 guests",
      wifi: "Free Wi-Fi",
    },
    {
      id: 5,
      name: "Hill View Suite",
      image: "https://i.ibb.co.com/x1HzPGf/05.png", // Replace with actual image URL
      price: "$62.00/Day",
      size: "500 Sqft",
      guests: "1-4 guests",
      wifi: "Free Wi-Fi",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row items-start gap-4 p-6 bg-white">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Discover Homeya's Finest Properties For Your Dream Home
          </h1>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-blue-500 mx-4"></div>

        {/* Right Section */}
        <div className="md:w-1/2 text-gray-600">
          <p>
            All three of Rooms Hotels locations are restorations that translate
            historic locations into places of contemporary comfort, industrial
            architecture, salvaged building materials, and the unique approach.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img src={room.image} alt={room.name} className="w-full h-full " />
            <div className="absolute top-2 right-2 bg-white text-orange-400 text-sm p-3  rounded-full ">
              {room.price}
            </div>
            <div className="p-4">
              <h3 className="text-xl absolute bottom-32 left-2 font-semibold text-white mb-2">
                {room.name}
              </h3>
              <p className="text-gray-600 absolute bottom-24 left-2 text-sm">
                {room.size}
              </p>
              <p className="text-gray-600 absolute bottom-24 left-2 text-sm">
                {room.guests}
              </p>
              <p className="text-gray-600 absolute bottom-24 left-2 text-sm">
                {room.wifi}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomDetails;
