import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-800 text-white">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold">MyLogo</div>

        {/* Navigation links */}
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              My Project
            </a>
          </li>
        </ul>

        {/* Button */}
        <div>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Download CV
          </a>
        </div>
      </nav>
    </div>

  )
}

export default page