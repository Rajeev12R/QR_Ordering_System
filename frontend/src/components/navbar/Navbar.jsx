import React, { useState } from 'react';
// import { BsSearch } from 'react-icons/bs';
import { IoMdNotificationsOutline } from "react-icons/io";
// import { BiDish } from 'react-icons/bi'; // React icons for dish 
import { CiMenuBurger } from "react-icons/ci";
import logo from "../../assets/logo.png"
import { IoIosCloseCircleOutline } from "react-icons/io";


const Navbar = () => {
  // State to control dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <nav className='h-20 w-[90%] mx-auto flex items-center justify-between relative'>
      {/* Left Side: Menu Icon and Logo */}
      <div className='flex items-center space-x-4'>
        {/* Menu Icon */}
        <div className='relative'>
          <CiMenuBurger className='text-[#66db34] text-2xl cursor-pointer' onClick={toggleDropdown} />
        </div>

        {/* Logo */}
        <div className='text-white text-xl'>
          EatEase
        </div>
      </div>
      
      {/* Right Sidebar / Dropdown (Appearing on the Left) */}
      {isDropdownOpen && (
        <div className="fixed left-0 top-0 h-full w-64 bg-[#6765653b] shadow-lg p-4 z-50 transform transition-transform duration-300 ease-in-out">
          <div className='mb-20 flex justify-between'>
          <img src={logo} className='w-10 h-10 ' alt="" srcset="" />
          <IoIosCloseCircleOutline
            className="h-10 w-10 text-[#66db34 mb-3"
            onClick={toggleDropdown}
            >
          </IoIosCloseCircleOutline>
          </div>
          <ul className="space-y-2">
            <li><a href="#" className="block hover:text-gray-700 text-gray-100 p-2 text-2xl rounded">Home</a></li>
            <li><a href="#" className="block hover:text-gray-700 text-gray-100 p-2 text-2xl rounded">Menu</a></li>
            <li><a href="#" className="block hover:text-gray-700 text-gray-100 p-2 text-2xl rounded">Gallery</a></li>
            <li><a href="#" className="block hover:text-gray-700 text-gray-100 p-2 text-2xl rounded">About</a></li>
            <li><a href="#" className="block hover:text-gray-700 text-gray-100 p-2 text-2xl rounded">Contact</a></li>
            </ul>

        </div>
      )}

      {/* Right Side: Cart and Notification Icons */}
      <div className='flex items-center space-x-4'>
        {/* Cart Icon */}
        <div className='relative'>
          {/* <BiDish className='text-[#66db34] text-2xl cursor-pointer' />
          <span className='absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>3</span> Cart badge */}
        </div>

        {/* Notification Icon */}
        <div className='relative'>
          <IoMdNotificationsOutline className='text-[#66db34] text-2xl cursor-pointer' />
          <span className='absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>3</span> {/* Notification badge */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
