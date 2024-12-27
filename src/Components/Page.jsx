import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Welcome to Your Custom Page
      </h1>
      <p className="text-gray-600 text-center">
        This is a placeholder page. You can customize it as per your needs.
      </p>
      <div className="mt-10 flex justify-center">
        <a href="/">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
            Explore More
          </button>
        </a>
      </div>
    </div>
  );
};

export default Page;
