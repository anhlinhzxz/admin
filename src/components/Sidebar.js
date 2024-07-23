import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaAngleRight, FaUser } from 'react-icons/fa';
import './Sidebar.scss'

const Sidebar = () => {
     return (
          <div className="w-64 h-screen bg-gray-100 text-white flex flex-col justify-between">
               <div className='flex flex-col text-black items-center'>
                    <div className="logo p-4 flex justify-center text-4xl">
                         {/* <img src="/path/to/logo.png" alt="Logo" className="w-full h-auto" /> */}
                         logo here
                    </div>
                    <nav className="mt-10 w-full">
                         <Link to="/manage-book" className="flex items-center justify-center font-semibold text-black py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                              <FaChevronDown className="mr-2" />
                              Manage Book
                         </Link>
                         <Link to="/manage-account" className="flex items-center justify-center font-semibold text-black py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                              <FaChevronDown className="mr-2" />
                              Manage Account
                         </Link>
                         <Link to="/manage-system" className="flex items-center justify-center font-semibold text-black py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                              <FaChevronDown className="mr-2" />
                              Manage System
                         </Link>
                    </nav>
               </div>
               <div className="p-4 flex justify-center">
                    <Link to="/profile" className="profile flex text-black items-center justify-center py-2.5 px-4 rounded transition duration-200 hover:rounded-custom">
                         <FaUser className="mr-2" />
                         Profile
                         <FaAngleRight />
                    </Link>
               </div>
          </div>
     );
};

export default Sidebar;
