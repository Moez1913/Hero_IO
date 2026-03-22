
import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router'

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
      
  
  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row gap-8 items-start border-b pb-6">
        
        {/* App Image */}
        <img
          src={app.image}
          alt={app.title}
          className="w-40 h-40 object-cover rounded-xl shadow"
        />

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-gray-500 mt-1">
            Developed by <span className="text-primary font-medium">{app.companyName}</span>
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-6 flex-wrap">

            <div>
              <p className="text-green-500 text-xl">⬇</p>
              <p className="text-sm text-gray-400">Downloads</p>
              <p className="font-bold text-lg">
                {(app.downloads / 1000000).toFixed(1)}M
              </p>
            </div>

            <div>
              <p className="text-orange-500 text-xl">⭐</p>
              <p className="text-sm text-gray-400">Average Ratings</p>
              <p className="font-bold text-lg">{app.ratingAvg}</p>
            </div>

            <div>
              <p className="text-purple-500 text-xl">👍</p>
              <p className="text-sm text-gray-400">Total Reviews</p>
              <p className="font-bold text-lg">
                {(app.reviews / 1000).toFixed(1)}K
              </p>
            </div>

          </div>

          {/* Install Button */}
          {/* <button onClick={()=> handleInstall(app)} disabled={isInstalled}  className={`px-4 py-2 rounded ${
        isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white"
      }`}>  {isInstalled ? "Installed" :`Install Now (${app.size} MB)`}
            
          </button> */}
          <button
  onClick={() => handleInstall(app)}
  disabled={isInstalled}  className={`px-4 py-2 rounded ${
        isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white"
      }`}
>
  {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
</button>
        </div>
      </div>

      {/* RATINGS SECTION */}
   <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Ratings</h2>

        <div className="w-full h-75">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barSize={30}  layout="vertical">
              <CartesianGrid />
              <XAxis type="number" />
              <YAxis dataKey="name" reverse={true} type="category" />
              <Tooltip />
              <Bar dataKey="count" fill="#f97316" radius={[0, 0, 0, 0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* DESCRIPTION */}
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