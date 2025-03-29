/* eslint-disable no-unused-vars */
import React from "react";

const VisaSection = () => {
  const visas = [
    { id: 1, name: "Canada Visa", description: "Our immigration law specialists provide expert advice on your Canada visa application.", image: "/img/canada-visa.jpg", icon: "/img/canada.png" },
    { id: 2, name: "Schengen Visa", description: "We assist you with Schengen visa applications, reapplications, and appeals.", image: "/img/schengen.jpg", icon: "/img/sch.png" },
    { id: 3, name: "UK Visa", description: "Get expert guidance for your UK visa application, ensuring a smooth process.", image: "/img/uk-visa.jpg", icon: "/img/uk.png" },
    { id: 4, name: "China Visa", description: "Study and work in China with a full scholarship. Let us help with your visa application.", image: "/img/chinna-visa.jpg", icon: "/img/china.png" },
    { id: 5, name: "Turkey Tourist Visa", description: "Planning a trip to Turkey? We assist with hassle-free tourist visa applications.", image: "/img/turkey-visa.jpg", icon: "/img/turkey.png" },
    { id: 6, name: "Tourist Visa", description: "Explore multiple tourist visa options with our expert assistance.", image: "/img/tourist-visa.jpg", icon: "/img/uk.png" }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Visa Services</h1>
      <p className="text-center text-2xl text-burtBlue mb-6 w-[80%] mx-auto">
        We provide quality services for your visa application process. Our team of experts will guide you through every step, ensuring a smooth and hassle-free experience.
      </p>
      <p className="text-center text-2xl text-burtBlue mb-6 w-[80%] mx-auto">
        Explore our diverse range of visa services tailored to your needs.
      </p>
      <div className="space-y-3 w-[80%] mx-auto">
        {visas.map((visa, index) => (
          <div key={visa.id} className={`flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2 p-4">
              <img src={visa.image} alt={visa.name} className="w-full h-[50vh] object-cover rounded-md" />
            </div>
            <div className="w-full md:w-1/2 p-4 text-center md:text-left">
              <img src={visa.icon} alt={`${visa.name} icon`} className="w-12 h-12 mx-auto md:mx-0 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{visa.name}</h2>
              <p className="text-gray-600">{visa.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaSection;
