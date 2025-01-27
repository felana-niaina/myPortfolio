"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaMoon, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
          <FaMoon size={24} color="#ffffff" />{" "}
          {/* Set color to white on mobile */}
          {/* Hamburger Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <FaTimes size={24} color="#ffffff" />
            ) : (
              <FaBars size={24} color="#ffffff" />
            )}{" "}
            {/* Set color to white on mobile */}
          </button>
        </div>

        {/* Navigation Links */}
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
              onClick={() => setMenuOpen(false)} // Close menu on click
              className="hover:text-gray-600"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setMenuOpen(false)} // Close menu on click
              className="hover:text-gray-600"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setMenuOpen(false)} // Close menu on click
              className="hover:text-gray-600"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setMenuOpen(false)} // Close menu on click
              className="hover:text-gray-600"
            >
              My Project
            </a>
          </li>
        </ul>

        {/* Dark Mode Icon for Desktop */}
        <div className="hidden md:block">
          <FaMoon size={24} color="#20B2AA" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
