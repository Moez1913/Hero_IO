import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import SingleApp from '../../App/SingleApp'
import { MdArrowOutward } from 'react-icons/md'

const TrendingApps = () => {
 const [apps,setApps]=useState([])

 useEffect(()=>{
   fetch('./AppData.json')
   .then(res=>res.json())
   .then(data=>setApps(data))
 },[])
     const hightRatingApps = apps.sort((a, b)=> b.ratingAvg - a.ratingAvg).slice(0, 8);
  return (
    <div>
        <div className="text-center">
      <h1 className="text-5xl font-bold mb-2">Trending Apps</h1>
      <p className="text-sm text-gray-600">Explore All Trending Apps on the Market developed by us</p>
        </div>

    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-10 mx-2 md:mx-20 '>
       {
        hightRatingApps.map(app=> <SingleApp app={app} key={app.id}></SingleApp>)
       }
    </div> 
    <div>
    <Link to="/All" className=" w-40 mx-auto text-white flex  items-center gap-1 btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] mb-10">View All Apps<MdArrowOutward /></Link>
    </div>
        </div>
  )
}

export default TrendingApps