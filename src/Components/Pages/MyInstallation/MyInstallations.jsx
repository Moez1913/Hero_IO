import { useContext, useState } from "react";
import { AppContext } from "../../../Providers/AppProvider";
import { Link, useLoaderData } from "react-router";
import { FaRegStar } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import ErrorImg from '../../../assets/App-Error.png'


const MyInstallations = () => {
  const { installedApps, handleUninstall } = useContext(AppContext);
  const [sortType,setSortType]=useState('')

  const allApps = useLoaderData();

  const installedAppList = allApps.filter((app) =>
    installedApps.includes(app.id),
  );
const sortedApps = [...installedAppList].sort((a, b) => {
  if (sortType === "high-low") {
    return b.downloads - a.downloads; // descending
  }
  if (sortType === "low-high") {
    return a.downloads - b.downloads; // ascending
  }
  return 0;
});


  function formatDownloads(num) {
  if (num >= 1_000_000_000) {   // 1B+
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (num >= 1_000_000) {       // 1M+
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1_000) {           // 1K+
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();       
}
  return (
    <div className="mt-10">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold mb-1">Your Installed Apps</h2>
        <p className="text-sm text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="border border-solid border-base-300 my-10 p-4">
        <div className="mb-8 mx-7 md:mx-40 flex justify-between ">
          <h1 className="text-3xl font-bold mb-1">
            Apps Found({installedAppList.length})
          </h1>
          <details className="dropdown">
            <summary className="btn  w-24">Sorte<span className="text-2xl"><RiArrowDropDownLine /></span> </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
             <li><button onClick={()=>setSortType('high-low')}>High-Low</button></li> 
             <li><button onClick={()=>setSortType('low-high')}>Low-High</button></li> 
            </ul>
          </details>
        </div> 
          
            {sortedApps.length>0 ? ( <div>
              {sortedApps.map((app) => (
        <li className="border-2 border-solid border-base-200 md:mx-40 list-none mb-1">
          <div className="flex justify-between px-1 items-center  ">
            <div className="flex gap-2 p-1 ">
              <img class="size-16 rounded-box" src={app.image} />
              <div className="flex flex-col justify-around">
                <h1 className="text-xl font-bold">{app.title}</h1>
                <div className="flex gap-2">
                  <span className="text-s font-medium flex items-center gap-1 text-green-400">
                              <LuDownload />
                              {formatDownloads(app.downloads)}
                            </span>
                            <span className="text-yellow-500 text-s font-medium flex items-center gap-1 ">
                              <FaRegStar />
                              {app.ratingAvg}
                            </span>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleUninstall(app.id)}
                class="btn  btn-success"
              >
                Uninstall
              </button>
            </div>
          </div>
        </li>
      ))}
            </div>
              
          
      
            )  :(
               <div className=" flex flex-col items-center justify-center bg-gray-100 px-4">
      
      {/* Image */}
      <img
        src={ErrorImg}
        alt="Error"
        className="w-80 md:w-96 mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
       <span className="text-purple-500"> Oops!</span>  No App Found
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-center max-w-md mb-6">
      You Have No Installed App
      </p>

      {/* Button */}
      <Link to="/">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
          Go Back Home
        </button>
      </Link>
      <p>Or</p>
      <Link to="/All">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
          Explore Our All Apps
        </button>
      </Link>

    </div>
            )
          }
        
      </div>

      
    </div>
  );
};

export default MyInstallations;
