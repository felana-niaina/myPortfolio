import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-8 pt-[65px]">
      <div className="flex flex-col items-center justify-center">
        <span className="text-gray-400 text-sm">get in touch</span>
        <span className="text-gray-300 font-bold text-xl">CONTACT</span>
      </div>
      <div className="flex flex-col md:flex-row gap-16">
        <div className="flex flex-col gap-3">
          <div className="flex text-gray-400 gap-2 items-center bg-black/30 p-4 rounded-lg w-[300px] mx-auto md:w-full">
            <div>
              <FaPhone
                size={18}
                className="hover:text-black transition-colors duration-300"
              />
            </div>
            <div>
              <span className="text-sm">+261 32 94 097 28</span>
            </div>
          </div>
          <div className="flex text-gray-400 gap-2 items-center bg-black/30 p-4 rounded-lg w-[300px] mx-auto md:w-full">
            <div>
              <FaEnvelope
                size={18}
                className="hover:text-black transition-colors duration-300"
              />
            </div>
            <div>
              <span className="text-sm">nirina.felananiaina@gmail.com</span>
            </div>
          </div>
          <div className="flex text-gray-400 gap-2 items-center bg-black/30 p-4 rounded-lg w-[300px] mx-auto md:w-full">
            <div>
              <FaMapMarkerAlt
                size={18}
                className="hover:text-black transition-colors duration-300"
              />
            </div>
            <div>
              <span className="text-sm">87 ter Ambohitrarahaba</span>
            </div>
          </div>
        </div>
        {/* Séparateur vertical */}
        <div className="hidden md:block border-l border-gray-500/50"></div>

        <div className="flex flex-col gap-2">
          {/* Row for first name and email */}

          {/* First Name Input */}
          <div className="flex flex-col gap-1 w-[300px] mx-auto md:w-full">
            <label htmlFor="firstName" className="text-sm text-gray-400 font-medium">
              Your name
            </label>
            <input
              id="firstName"
              type="text"
              className="px-28 py-1 bg-black/30 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Email Address Input */}
          <div className="flex flex-col gap-1 w-[300px] mx-auto md:w-full">
            <label htmlFor="email" className="text-sm text-gray-400 font-medium">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              className="px-28 bg-black/30 text-gray-200 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Textarea */}
          <div className="flex flex-col gap-1 w-[300px] mx-auto md:w-full">
            <label htmlFor="message" className="text-sm text-gray-400 font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="p-2 bg-black/30 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            ></textarea>
          </div>
          <div className="flex justify-center items-center mt-6">
            <a
              href="#"
              style={{
                background: "linear-gradient(to right, #20B2AA, #48D1CC)", // Dégradé de couleur
              }}
              className="border border-[#20B2AA] rounded-lg px-9 py-3 md:px-6 md:py-3 text-sm  text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 hover:translate-y-2"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
