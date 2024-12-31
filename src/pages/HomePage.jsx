import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Main Content */}
        <div className="flex-grow flex items-center justify-center px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to YourApp
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              YourApp is here to make your life easier.
            </p>
            <Link
              to="/register"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
