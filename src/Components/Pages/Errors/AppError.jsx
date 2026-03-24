import React from 'react'
import  ErrorImg from '../../../assets/App-Error.png'
import { Link } from 'react-router'

const AppError = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 px-4">
      
      {/* Image */}
      <img
        src={ErrorImg}
        alt="Error"
        className="w-80 md:w-96 mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
       <span className="text-purple-500"> Oops!</span>  No App Found in this Route
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-center max-w-md mb-6">
       The App you are requesting is not found on our system.  please try another apps
      </p>

      {/* Button */}
      <Link to="/">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
          Go Back Home
        </button>
      </Link>

    </div>
  )
}

export default AppError