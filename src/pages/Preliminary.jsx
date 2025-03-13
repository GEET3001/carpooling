import React from "react";
import { Link } from "react-router-dom";

const Preliminary = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Welcome to Car Pooling!</h2>
        <p className="mb-6 text-gray-600">Are you a driver or a passenger?</p>
        <div className="space-y-4">
          <Link
            to="/user/login"
            className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Passenger
          </Link>
          <Link
            to="/driver/login"
            className="block w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Driver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Preliminary;