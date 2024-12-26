import React, { useState } from "react";

const Review = () => {
  const testimonials = [
    {
      id: 1,
      name: "Arman",
      title: "Webflow Developer",
      text: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sophia",
      title: "UI/UX Designer",
      text: "The experience has been exceptional. Their platform is intuitive, fast, and reliable. I’m super impressed with the results so far.",
      rating: 5,
    },
    {
      id: 3,
      name: "James",
      title: "Full Stack Developer",
      text: "Great platform with easy-to-use tools. The support team was very responsive and helped us launch our project successfully.",
      rating: 4,
    },
    {
      id: 4,
      name: "Ella",
      title: "Product Manager",
      text: "Their services exceeded expectations! The design flexibility and cloud performance have truly impressed our team.",
      rating: 5,
    },
    {
      id: 5,
      name: "Liam",
      title: "Software Engineer",
      text: "Amazing support, fast delivery, and brilliant design options. Highly recommended for professionals.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4; // Number of reviews visible at a time

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + visibleItems) % testimonials.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - visibleItems
        : prevIndex - visibleItems
    );
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 py-12">
      <div className="flex w-full  h-[500px]">
        {/* Left Section */}
        <div className="w-1/2 bg-gray-900 text-white flex flex-col items-center justify-center h-full">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Rave Reviews from Our Satisfied Guests
          </h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              &#8592;
            </button>
            <div className="flex space-x-2">
              {Array.from({
                length: Math.ceil(testimonials.length / visibleItems),
              }).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === Math.floor(currentIndex / visibleItems)
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                  }`}
                ></div>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-white text-gray-900 relative h-full overflow-hidden">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
          >
            &#8592;
          </button>
          <div className="flex space-x-4 h-full items-center ml-20">
            {testimonials
              .slice(currentIndex, currentIndex + visibleItems)
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-100 rounded-lg p-6 shadow-md w-[250px] h-[350px] flex flex-col justify-between"
                >
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                  <p className="text-sm mb-4">{testimonial.text}</p>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
