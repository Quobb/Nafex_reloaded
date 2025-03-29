import React from 'react';

function Address() {

  return (
    <div className="bg-gray-900 text-white text-sm py-2 px-4 flex  ">
        <div>
          <span className="mr-4">📞 +1 234 567 890</span>
          <span>📧 info@example.com</span>
        </div>
        <div>
          <span className="mr-4">📍 123 Street, City, Country</span>
        </div>
      </div>
  );
}

export default Address;
