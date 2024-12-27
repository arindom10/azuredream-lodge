import React from "react";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: "$100/Day",
      image: "https://i.ibb.co.com/PMhvZjj/03-1.png", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Suite Room",
      price: "$150/Day",
      image: "https://i.ibb.co.com/F71SdcX/04-1.png", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Economy Room",
      price: "$80/Day",
      image: "https://i.ibb.co.com/ctWDcFM/Rectangle-4784.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Rooms
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{room.name}</h2>
              <p className="text-gray-600 mt-2">{room.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
