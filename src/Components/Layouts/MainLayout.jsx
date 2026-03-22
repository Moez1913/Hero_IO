import React from 'react'
import Navbar from '../Shared/Header/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Shared/Footer/Footer'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
        <ToastContainer/>
    </div>
  )
}

export default MainLayout