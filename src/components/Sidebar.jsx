// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCrop, FaHome, FaLifeRing, FaTree } from 'react-icons/fa'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sm:hidden fixed inset-y-0 left-5 sm:bottom-2 my-5 w-24 bg-green-50 border border-green-300 rounded-full transition-transform duration-300`}>
      <nav className="pt-16 text-sm">
        <ul className='flex flex-col justify-center items-center space-y-16'>
          <li>
            <Link to="/dashboard" className="hover:text-green-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/crop" className="hover:text-green-500">
              Crops
            </Link>
          </li>
          <li>
            <Link to="/crop" className="hover:text-green-500">
              Profile
            </Link>
          </li>

          <li>
            <Link to="/logout" className="hover:text-green-500">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
