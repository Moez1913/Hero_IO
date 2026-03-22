import React, { useEffect, useState } from 'react'
import SingleApp from '../../App/SingleApp'

const TrendingApps = () => {
 const [apps,setApps]=useState([])

 useEffect(()=>{
   fetch('./AppData.json')
   .then(res=>res.json())
   .then(data=>setApps(data))
 },[])

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
       {
        apps.map(app=> <SingleApp app={app} key={app.id}></SingleApp>)
       }
    </div>
  )
}

export default TrendingApps