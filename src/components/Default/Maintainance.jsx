import React from 'react';

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">🚧 Under Maintenance 🚧</h1>
      <p className="text-lg md:text-xl text-center mb-8">
        We're currently working on something awesome. Please check back later.
      </p>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
};

export default MaintenancePage;