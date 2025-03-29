import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "img/carousel-1.jpg", // Update with correct images
    title: "Passport",
    heading: "Get Your Passport Easily!",
    text: "We help you with the entire process of obtaining your passport, making your journey smoother and faster.",
  },
  {
    image: "img/carousel-2.jpg", // Update with correct images
    title: "Birth Certificate",
    heading: "Secure Your Birth Certificate!",
    text: "We assist you with obtaining and verifying your birth certificate, a crucial document for any immigration process.",
  },
  {
    image: "img/carousel-3.jpg", // Update with correct images
    title: "Study Abroad with Scholarship",
    heading: "Your Education, Fully Funded",
    text: "Explore study abroad opportunities with scholarships and step into your future with full financial support.",
  },
  {
    image: "img/carousel-4.jpg", // Update with correct images
    title: "Tourist Visa",
    heading: "Travel the World With Ease",
    text: "Get your tourist visa to visit your dream destinations around the world without any hassle.",
  },
 
 
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slides every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden ">
      <div className="relative w-[100%] h-[900px] flex transition-transform duration-700 ease-in-out">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt="Carousel"
              className="absolute inset-0 w-full h-full "
            />
            <div className="relative bg-opacity-50 text-center p-6 max-w-3xl mx-auto text-white rounded-lg">
              <h4 className="text-5xl font-semibold uppercase mb-2">{slide.title}</h4>
              <h1 className="text-6xl font-bold mb-4">{slide.heading}</h1>
              <p className="text-3xl mb-4">{slide.text}</p>
              <a
                href="#"
                className="bg-burntOrange hover:bg-blue-700 text-white py-2 px-4 rounded-full text-2xl"
              >
                More Details
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-burntOrange text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-burntOrange text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        <ChevronRight size={24} />
      </button>

    
    </div>
  );
}
