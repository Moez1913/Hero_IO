import React from "react";
import { Link } from "react-router";
import ErrorImage from '../../../assets/error-404.png'

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      
      {/* Image */}
      <img
        src={ErrorImage}
        alt="Error"
        className="w-80 md:w-96 mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-2">
        Oops! Something went wrong
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-center max-w-md mb-6">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>

      {/* Button */}
      <Link to="/">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
          Go Back Home
        </button>
      </Link>

    </div>
  );
};

export default ErrorPage;