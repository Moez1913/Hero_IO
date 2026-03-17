import React from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../../../assets/logo.png'
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {
    const Links=<>
           <div className='flex flex-col md:flex-row gap-2'>
            <NavLink to='/'>Home</NavLink>
           <NavLink to='/All'>Apps</NavLink>
           <NavLink to='/'>Installation</NavLink>
           </div>
          </>
  return (
    <div className="navbar bg-base-100 shadow-sm px-12">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {Links}
      </ul>
    </div>
    <Link to={'/'}>
    <div className='flex gap-1 item-center'>
      <img className='h-8 w-8' src={logo} alt="Logo" />
      <h3 className='text-xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h3>
    </div>
 
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {Links}
    </ul>
  </div>
  <div className="navbar-end">
    <a href="" className='flex items-center gap-1 btn'><FaGithub/>Contribute</a>
  </div>
</div>
  )
}

export default Navbar