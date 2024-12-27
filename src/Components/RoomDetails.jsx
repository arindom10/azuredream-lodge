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
      image: "https://i.ibb.co.com/sbgNS7K/Rectangle-4780-1.png", // Replace with actual image URL
      price: "$62.00/Day",
      size: "500 Sqft",
      guests: "1-4 guests",
      wifi: "Free Wi-Fi",
    },
    {
      id: 3,
      name: "Hill View Suite",
      image: "https://i.ibb.co.com/PMhvZjj/03-1.png", // Replace with actual image URL
      price: "$62.00/Day",
      size: "500 Sqft",
      guests: "1-4 guests",
      wifi: "Free Wi-Fi",
    },
    {
      id: 4,
      name: "Hill View Suite",
      image: "https://i.ibb.co.com/F71SdcX/04-1.png", // Replace with actual image URL
      price: "$62.00/Day",
      size: "500 Sqft",
      guests: "1-4 guests",
      wifi: "Free Wi-Fi",
    },
    {
      id: 5,
      name: "Hill View Suite",
      image: "https://i.ibb.co.com/ctWDcFM/Rectangle-4784.png", // Replace with actual image URL
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
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-8">
        {/* First row */}
        <div className="lg:col-span-3">
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden h-96">
            <img
              src={rooms[0].image}
              alt={rooms[0].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-white text-orange-400 text-sm p-3 rounded-full">
              {rooms[0].price}
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{rooms[0].name}</h3>
              <div className="flex space-x-4 text-sm mt-1">
                <p>{rooms[0].size}</p>
                <p>{rooms[0].guests}</p>
                <p>{rooms[0].wifi}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden h-96">
            <img
              src={rooms[1].image}
              alt={rooms[1].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-white text-orange-400 text-sm p-3 rounded-full">
              {rooms[1].price}
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{rooms[1].name}</h3>
              <div className="flex space-x-4 text-sm mt-1">
                <p>{rooms[1].size}</p>
                <p>{rooms[1].guests}</p>
                <p>{rooms[1].wifi}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {rooms.slice(2).map((room) => (
          <div
            key={room.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden h-96"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-white text-orange-400 text-sm p-3 rounded-full">
              {room.price}
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{room.name}</h3>
              <div className="flex space-x-4 text-sm mt-1">
                <p>{room.size}</p>
                <p>{room.guests}</p>
                <p>{room.wifi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center ">
        <button
          style={{ backgroundColor: "#CEAF83" }}
          className="flex items-center justify-center px-6 py-2  text-white rounded-full shadow-md hover:bg-opacity-80 transition mt-16"
        >
          <span className="mr-2">View All</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
