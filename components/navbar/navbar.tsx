import Link from 'next/link';
import React from 'react'
import { FaMoon } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-transparent text-black fixed w-full">
      <nav className="container mx-auto flex items-center justify-around py-4 px-6">
        {/* Logo */}
        <div className="text-s text-white"><span>Felana</span></div>
  
        {/* Navigation links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/home" className="hover:text-gray-600">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              My Project
            </a>
          </li>
        </ul>
  
        {/* Button */}
        <div>
          <FaMoon size={24} color="#20B2AA"  />
        </div>
      </nav>
    </div>
  );
  
}

export default Navbar