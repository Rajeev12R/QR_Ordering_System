import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { BiDish } from 'react-icons/bi'; // React icons for dish 
import { BsGear } from 'react-icons/bs'; // React icons for settings

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='h-20 w-[80%] mx-auto flex items-center justify-between'>
      {/* Left Side: Logo or other elements */}
      <div className='text-white text-xl'>
        EatEase
      </div>

      {/* Center Side: Search Bar */}
      <div className='relative w-[50%]'>
        <input 
          type="search" 
          className='outline-none py-2 px-12 bg-white rounded-full w-full 
                    focus:outline-none focus:ring-2 focus:ring-[#66db34]
                    cursor-text hover:bg-gray-100 transition-all ease-in-out duration-100 pl-4 pr-12' 
          placeholder="Search..."
        />
        <div className='absolute right-6 top-1/2 transform -translate-y-1/2'>
          <BsSearch className='text-[#66db34]' />
        </div>
      </div>

      {/* Right Side: Cart, Settings */}
      <div className='flex items-center space-x-6'>
        {/* Cart Icon */}
        <div className='relative'>
          <BiDish className='text-[#66db34] text-2xl cursor-pointer' />
          <span className='absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>3</span> {/* Example cart badge */}
        </div>

        {/* Settings Icon with Dropdown */}
        <div className='relative'>
          <BsGear className='text-[#66db34] text-2xl cursor-pointer' onClick={toggleDropdown} />
          
          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className='absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg p-2'>
              <ul>
                <li className='px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100'>Settings</li>
                <li className='px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100'>Account</li>
                <li className='px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100'>Privacy</li>
                <li className='px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100'>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
