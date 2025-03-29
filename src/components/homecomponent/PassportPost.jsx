import React from "react";

const PassportPost = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 w-full flex justify-center items-center">
      <div className="max-w-4xl shadow-lg rounded-lg overflow-hidden md:flex">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/img/passport-4.jpg"
            alt="Passport"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Travel with Ease</h2>
          <p className="text-gray-600 text-sm mb-4">
            Get your passport quickly and hassle-free. We offer expert guidance on the application process, renewals, and documentation.
          </p>
          <ul className="text-gray-600 text-sm list-disc list-inside mb-4">
            <li>Fast & Reliable Processing</li>
            <li>Document Assistance</li>
            <li>Secure & Confidential</li>
          </ul>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassportPost;