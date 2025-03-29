import React from "react";


const countries = [
  { name: "UK", image: "https://source.unsplash.com/500x300/?london" },
  { name: "USA", image: "https://source.unsplash.com/500x300/?newyork" },
  { name: "Canada", image: "https://source.unsplash.com/500x300/?canada" },
  { name: "China", image: "https://source.unsplash.com/500x300/?shanghai" },
  { name: "Australia", image: "https://source.unsplash.com/500x300/?sydney" },
  { name: "Netherlands", image: "https://source.unsplash.com/500x300/?amsterdam" },
  { name: "Hungary", image: "https://source.unsplash.com/500x300/?budapest" },
  { name: "Finland", image: "https://source.unsplash.com/500x300/?helsinki" },
  { name: "Cyprus", image: "https://source.unsplash.com/500x300/?cyprus" },
];

function StudyAbroadGrid() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {countries.map((country, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-lg font-bold">Study in {country.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyAbroadGrid;
