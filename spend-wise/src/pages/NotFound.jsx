import React from 'react';

const NotFound = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96 text-center">
        <h2 className="text-3xl font-bold mb-4">404 - Not Found</h2>
        <p className="text-gray-600 mb-8">Oops! The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
