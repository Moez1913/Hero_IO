import React, { useEffect, useState } from 'react'
import SingleApp from '../../App/SingleApp'

const TrendingApps = () => {
 const [apps,setApps]=useState([])

 useEffect(()=>{
   fetch('./AppData.json')
   .then(res=>res.json())
   .then(data=>setApps(data))
 },[])
     const hightRatingApps = apps.sort((a, b)=> b.ratingAvg - a.ratingAvg).slice(0, 8);
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
       {
        hightRatingApps.map(app=> <SingleApp app={app} key={app.id}></SingleApp>)
       }
    </div>
  )
}

export default TrendingApps