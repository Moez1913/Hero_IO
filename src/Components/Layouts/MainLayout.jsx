import React from 'react'
import Navbar from '../Shared/Header/Navbar'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Shared/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import Loader from '../../Loader/Loader'

const MainLayout = () => {
  const navigation=useNavigation();
  return (
    <div>
      <Navbar/>
     <div>
       {navigation.state === "loading" && <Loader/>}
       <Outlet/>
     </div>
      <Footer/>
        <ToastContainer/>
    </div>
  )
}

export default MainLayout