/* eslint-disable no-unused-vars */
import React from 'react';
import '../Navbar.css';

function MainPage() {
  return (
    <div
      className="bg-blue-100 min-h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your image URL
      }}
    >
      {/* Optional Overlay */}
      <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center">
       
      </div>
    </div>
  );
}

export default MainPage;
