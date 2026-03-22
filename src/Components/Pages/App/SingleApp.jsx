import React from 'react'
import { LuDownload } from 'react-icons/lu';
import { Link } from 'react-router';

const SingleApp = ({app}) => {

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
  return num.toString();        // ছোট সংখ্যা যেমন আছে তেমন
}
//      {
//     "id": 17,
//     "title": "Recipe Book",
//     "companyName": "CookMaster",
//     "image": "https://source.unsplash.com/400x300/?recipe,cooking",
//     "description": "Explore and cook delicious recipes from around the world.",
//     "size": 38,
//     "reviews": 1020,
//     "ratingAvg": 4.5,
//     "downloads": 36000,
//     "ratings": [
//       { "name": "1 star", "count": 30 },
//       { "name": "2 star", "count": 70 },
//       { "name": "3 star", "count": 200 },
//       { "name": "4 star", "count": 400 },
//       { "name": "5 star", "count": 320 }
//     ]
//   },
const{title,companyName,image,ratingAvg,downloads,id}=app
  return (
    <Link to={`/appDetails/${id}`}>
     <div className="card bg-base-100  h-full min-h-85     shadow-md overflow-visible relative group border-2 border-base-300 hover:border-primary transition duration-300 ">
      
      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={app.image}
          alt={app.title}
          className="rounded-xl w-full h-52 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold">
          {app.title}
        </h2>

        <p className="text-sm text-gray-500">
          {app.companyName}
        </p>

        {/* Rating + Download */}
        <div className="flex justify-between items-center mt-3">

           <span className="text-s font-medium flex items-center gap-1 text-green-400">
            <LuDownload />
            {formatDownloads(downloads)}
          </span>
          <span className="text-yellow-500 font-semibold">
            {app.ratingAvg}
          </span>

         
        </div>

      
      </div>
    </div>
    </Link>
  )
}

export default SingleApp