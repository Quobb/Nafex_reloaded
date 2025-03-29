/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CarouselPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: "/img/carousel-1.jpg",
      title: "Solution For All Type Of Visas",
      heading: "Immigration Process Starts Here!",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      img: "/img/carousel-1.jpg",
      title: "Solution For All Type Of Visas",
      heading: "Best Visa Immigration Services",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slides every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden ">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full relative">
            <img src={slide.img} className="w-100 h-screen object-cover" alt={`Slide ${index + 1}`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4 text-center">
               <h4 className="text-lg font-bold uppercase mb-2">{slide.title}</h4>
              <h1 className="text-4xl font-extrabold mb-4">{slide.heading}</h1>
              <p className="mb-4 text-lg">{slide.text}</p>
              <a href="#" className=" bg-burntOrange  hover:bg-burntOrange  text-white px-6 py-3 rounded-full">
                More Details
              </a> 
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-burntOrange  p-3 rounded-full shadow-lg hover:bg-burntOrange transition"
      >
        <FaChevronLeft className="text-white text-xl" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-burntOrange  p-3 rounded-full shadow-lg hover:bg-burntOrange transition"
      >
        <FaChevronRight className="text-white text-xl" />
      </button>
    </div>
  );
};

export default CarouselPage;
