import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/fubk-logo.jpg';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { AuthContext } from '../authentication/AuthProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false)
   
  const {user} =  useContext(AuthContext);

  // toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(()=> {
      const handleScroll = () => {
          if (window.scrollY > 100) {
            setIsSticky(true)
          }
          else {
            setIsSticky(false)
          }
      }
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.addEventListener('scroll', handleScroll);        
      }
  }, [])

  // navItems here
  const navItems = [
    {link: "Home", path:"/"},
    {link: "Books", path:"/allbooks"},
    {link: "Staffs", path:"/staffs"},
    {link: "Branches", path:"/branches"},
    {link: "Services", path:"/services"},
    {link: "Manage Books", path:"/admin/dashboard"},
    {link: "Help", path:"/help"},
    {link: "Contact", path:"/contact"},
  ]
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8 rounded bg-sky-600'>
          {/* logo */}
          <Link to="/" className="flex items-center gap-4 text-2xl font-bold text-black-500">
          <img src={Logo} alt="logo" className="inline-block w-20 rounded mx-2" />
          <span className='text-white font-custom'>FEDERAL UNIVERSITY BIRNIN KEBBI,<br/>LIBRARY COMPLEX</span> 
           </Link>

           {/* nav item for large device */}

           <ul className='md:flex space-x-12 hidden'>
            {
              navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base
               text-white uppercase cursor-pointer hover:text-black font-custom'>{link}</Link> )
            }
           </ul>
           {/* Button for large devices */}
           <div className='space-x-12 hidden lg:flex items-center'>
            <button><FaBarsStaggered className='w-5 text-white hover:text-black lg:hidden'/></button>
              {
                user? user.email : ""
              }
           </div>
           {/* menu button for mobile devices */}
           <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white focus:outline-none'>
              {
                isMenuOpen ? <FaXmark className='h-5 w-5 text-white hover:text-black'/> : <FaBarsStaggered className='h-5 w-5 text-white hover:text-black'/>
              }
            </button>
           </div>
        </div>
        {/* navitems for mobile devices */}
        <div className={`space-y-4 px-4 mt-40 py-5 bg-blue-500 ${isMenuOpen ?
           "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {
              navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base
            text-white uppercase cursor-pointer hover:text-black font-custom'>{link}</Link> )
            }
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
