import React from "react";

const RoomDetails = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Double Room",
      image: "https://i.ibb.co.com/M2YXdQG/Rectangle-4777-1.png", // Replace with actual image URL
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
      <h2 className="text-4xl font-bold text-center mb-8">Our Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img src={room.image} alt={room.name} className="w-full h-full " />
            <div className="absolute top-2 right-2 bg-yellow-500 text-white text-sm  rounded-full ">
              {room.price}
            </div>
            <div className="p-4">
              <h3 className="text-xl absolute bottom-6 left-2 font-semibold text-gray-800 mb-2">
                {room.name}
              </h3>
              {/* <p className="text-gray-600 text-sm">{room.size}</p>
              <p className="text-gray-600 text-sm">{room.guests}</p>
              <p className="text-gray-600 text-sm">{room.wifi}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomDetails;
