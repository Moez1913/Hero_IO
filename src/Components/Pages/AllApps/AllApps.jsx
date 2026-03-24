import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import SingleApp from "../App/SingleApp";
import ErrorImg from '../../../assets/App-Error.png'

const AllApps = () => {
  const Apps = useLoaderData();
  const [searchText, setSearchText] = useState("");

  // 🔍 Filter (case-insensitive)
  const filteredApps = Apps.filter((app) =>
    app.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="my-10 mx-2 md:mx-20">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold mb-1">Our All Applications</h1>
        <p className="text-sm text-gray-600">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      {/* 🔥 Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3 ">
        {/* Total Count */}
        <h2 className="text-lg font-semibold">
          Total Apps: {filteredApps.length}
        </h2>

           {/* Search Bar */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Search Apps..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="grow "
          />
        </label>
      
        {/* <input
          type="text"
          placeholder='Search Apps...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-72"
        /> */}
      </div>

      {/* 🔥 Apps Grid */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredApps.map((app) => (
            <SingleApp key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className=" flex flex-col items-center justify-center bg-gray-100 px-4">
      
      {/* Image */}
      <img
        src={ErrorImg}
        alt="Error"
        className="w-80 md:w-96 mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
       <span className="text-purple-500"> Oops!</span>  App Not Found
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
      )}
    </div>
  );
};

export default AllApps;
