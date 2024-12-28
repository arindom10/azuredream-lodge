import { useState, useEffect } from "react";

const Review = () => {
  const testimonials = [
    {
      id: 1,
      name: "Arman",
      title: "Webflow Developer",
      text: "Amazing design, easy to customize and a design quality superlative  on its cloud platform for the optimized performance.",
      rating: 5,
      avatar: "https://i.ibb.co.com/Bg34vXn/AK.jpg",
    },
    {
      id: 2,
      name: "Sophia",
      title: "UI/UX Designer",
      text: "The experience has been exceptional. Their platform is intuitive, fast, and reliable. I’m super impressed with the results so far.",
      rating: 5,
      avatar: "https://i.ibb.co.com/Bg34vXn/AK.jpg",
    },
    {
      id: 3,
      name: "James",
      title: "Full Stack Developer",
      text: "Great platform with easy-to-use tools. The support team was very responsive and helped us launch our project successfully.",
      rating: 4,
      avatar: "https://i.ibb.co.com/Bg34vXn/AK.jpg",
    },
    {
      id: 4,
      name: "Ella",
      title: "Product Manager",
      text: "Their services exceeded expectations! The design flexibility and cloud performance have truly impressed our team.",
      rating: 5,
      avatar: "https://i.ibb.co.com/Bg34vXn/AK.jpg",
    },
    {
      id: 5,
      name: "Liam",
      title: "Software Engineer",
      text: "Amazing support, fast delivery, and brilliant design options. Highly recommended for professionals.Have truly impressed our team.",
      rating: 5,
      avatar: "https://i.ibb.co.com/Bg34vXn/AK.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2);

  useEffect(() => {
    // Set visible items based on screen size
    const updateVisibleItems = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1); // For small screens, show 1 testimonial at a time
      } else {
        setVisibleItems(2); // Default for larger screens
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

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
    <div className="flex justify-center items-center ">
      <div className="flex flex-col lg:flex-row w-full lg:h-[500px]">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 bg-gray-900 text-white flex flex-col items-center justify-center py-8 px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center">
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
        <div className="w-full lg:w-1/2 bg-white text-gray-900 relative overflow-hidden py-8 px-4">
          <div className="flex overflow-hidden h-full items-center space-x-4 lg:space-x-6">
            {testimonials
              .slice(currentIndex, currentIndex + visibleItems)
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-100 rounded-lg p-4 sm:p-6 shadow-md w-full lg:w-[450px] flex flex-col justify-between"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name}'s avatar`}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm mb-4">{testimonial.text}</p>
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
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
          >
            &#8592;
          </button>
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
