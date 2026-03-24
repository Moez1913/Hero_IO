import React from 'react'
import { useLoaderData } from 'react-router'
import SingleApp from '../App/SingleApp'

const AllApps = () => {
  const Apps =useLoaderData()
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
      {
        Apps.map(app =><SingleApp app={app} key={app.id} ></SingleApp>)
      }
    </div>
  )
}

export default AllApps