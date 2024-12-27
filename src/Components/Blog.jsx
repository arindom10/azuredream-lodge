import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Travel Destinations of 2024",
      description: "Explore the best places to visit this year...",
      image: "https://i.ibb.co/blog-image.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      title: "5 Tips for a Perfect Stay",
      description: "Make your hotel experience seamless and enjoyable...",
      image: "https://i.ibb.co/blog-image-2.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Luxury on a Budget",
      description:
        "Discover how to experience luxury without breaking the bank...",
      image: "https://i.ibb.co/blog-image-3.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
