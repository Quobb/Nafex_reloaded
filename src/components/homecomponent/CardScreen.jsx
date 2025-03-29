/* eslint-disable no-unused-vars */
import React from 'react';
import '../Navbar.css'; // Ensure this file doesn't override Tailwind styles

function CardScreen() {
  const cards = [
    { id: 1, color: "bg-blue-200", text: "This is Card 1 content" },
    { id: 2, color: "bg-green-200", text: "This is Card 2 content" },
    { id: 3, color: "bg-yellow-200", text: "This is Card 3 content" },
    { id: 4, color: "bg-purple-200", text: "This is Card 4 content" },
    { id: 5, color: "bg-red-200", text: "This is Card 5 content" },
    { id: 6, color: "bg-pink-200", text: "This is Card 6 content" },
  ];

  return (
    <div className="bg-red-100 pt-5 pb-5 h-full min-h-screen w-screen">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 px-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative h-80 ${card.color} rounded-lg shadow-md flex items-center justify-center group overflow-hidden`}
          >
            <div
              className="absolute inset-0 
              flex items-center justify-center 
              bg-black bg-opacity-70 
              opacity-0 group-hover:opacity-100 hover:bg-blue
              transition-opacity duration-700 ease-in-out"
            >
              <p className="text-lg text-center text-white px-4">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardScreen;
