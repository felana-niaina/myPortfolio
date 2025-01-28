"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaMoon, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("/home");

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    setMenuOpen(false);
  };

  return (
    <div className="bg-transparent text-black fixed w-full z-50">
      <nav className="container mx-auto flex items-center justify-between md:justify-around py-4 px-6">
        {/* Logo */}
        <div className="text-lg font-bold text-white">
          <span>Felana</span>
        </div>

        {/* Hamburger and Dark Mode Icons on Mobile */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Dark Mode Icon */}
          <FaMoon size={24} color="#ffffff" />
          {/* Hamburger Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <FaTimes size={24} color="#ffffff" />
            ) : (
              <FaBars size={24} color="#ffffff" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-row gap-3">
          <ul
            className={`absolute top-0 left-0 w-full h-screen bg-[#42ccc7] text-white flex flex-col items-center justify-center space-y-8 transform ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:static md:flex-row md:h-auto md:w-auto md:bg-transparent md:text-black md:translate-x-0 md:space-y-0 md:space-x-6`}
          >
            {/* Close Button in Menu */}
            <li className="absolute top-4 right-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white focus:outline-none"
              >
                <FaTimes size={30} />
              </button>
            </li>
            <li>
              <Link
                href="/home"
                onClick={() => handleMenuClick("/home")}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeMenu === "/home"
                    ? "text-white bg-[#20B2AA] font-bold underline decoration-2 underline-offset-4"
                    : "hover:text-gray-600"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/about"
                onClick={() => handleMenuClick("/about")}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeMenu === "/about"
                    ? "text-white bg-[#20B2AA] font-bold underline decoration-2 underline-offset-4"
                    : "hover:text-gray-600"
                }`}
              >
                AboutMe
              </a>
            </li>

            <li>
              <a
                href="/project"
                onClick={() => handleMenuClick("/project")}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeMenu === "/project"
                    ? "text-white bg-[#20B2AA] font-bold underline decoration-2 underline-offset-4"
                    : "hover:text-gray-600"
                }`}
              >
                My Project
              </a>
            </li>
            <li>
              <a
                href="/contact"
                onClick={() => handleMenuClick("/contact")}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeMenu === "/contact"
                    ? "text-white bg-[#20B2AA] font-bold underline decoration-2 underline-offset-4"
                    : "hover:text-gray-600"
                }`}
              >
                ContactMe
              </a>
            </li>
          </ul>

          {/* Dark Mode Icon for Desktop */}
          <div className="hidden md:block">
            <FaMoon size={24} color="#20B2AA" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
