
import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router'
import rating from '../../../assets/icon-ratings.png'
import download from '../../../assets/icon-downloads.png'
import  review from '../../../assets/icon-review.png'

import {

  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import { AppContext } from '../../../Providers/AppProvider';


const AppDetails = () => {
    const {id}=useParams()
    const AppId=parseInt(id)
    const AppData=useLoaderData()
    const app=AppData.find(app=>app.id===AppId)
    const chartData = [...app.ratings].reverse();
     const { installedApps, handleInstall }=useContext(AppContext)
     const isInstalled = installedApps.includes(app.id);
      
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
  
  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row gap-8 items-start border-b pb-6">
        
        {/* App Image */}
        <img
          src={app.image}
          alt={app.title}
          className="w-60 h-60 object-cover rounded-xl shadow"
        />

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{app.title}</h1>
          <p className="text-gray-500 mt-1">
            Developed by <span className="text-primary font-medium">{app.companyName}</span>
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-6 flex-wrap">

            <div className='flex flex-col items-center'>
         
              <img src={download} alt="" />
              <p className="text-sm text-gray-600">Downloads</p>
              <p className="font-extrabold text-4xl">
                {formatDownloads(app.downloads) }
              </p>
            </div>

            <div className='flex flex-col items-center'>
           
              <img src={rating} alt="" />
              <p className="text-sm text-gray-600">Average Ratings</p>
              <p className="font-extrabold text-4xl">{app.ratingAvg}</p>
            </div>

            <div className='flex flex-col items-center'>
             
              <img src={review} alt="" />
              <p className="text-sm text-gray-600">Total Reviews</p>
              <p className="font-extrabold text-4xl">
                {(app.reviews / 1000).toFixed(1)}K
              </p>
            </div>

          </div>

         <div className='mt-1'>
           <button
  onClick={() => handleInstall(app)}
  disabled={isInstalled}  className={`px-4 py-2 rounded ${
        isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390] cursor-pointer text-white"
      }`}
>
  {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
</button>
         </div>
         
        </div>
      </div>

      {/* RATINGS SECTION */}
   <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Ratings</h2>

        <div className="w-full h-75">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barSize={30} barCategoryGap="0%"  layout="vertical">
              <CartesianGrid vertical={false} horizontal={false}/>
              <XAxis type="number" />
              <YAxis dataKey="name"  type="category" />
              <Tooltip />
              <Bar dataKey="count" fill="#f97316" radius={[0, 0, 0, 0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* DESCRIPTION */} 
    <h2 className='underline-base-300'></h2>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-gray-600 leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  )
}

export default AppDetails