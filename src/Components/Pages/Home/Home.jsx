import React from 'react'
import Banner from './Banner/Banner';
import TrendingApps from './Trending/TrendingApps';

const Home = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <div className='mt-5'>
        <TrendingApps></TrendingApps>
      </div>
      
    </div>
  )
}

export default Home