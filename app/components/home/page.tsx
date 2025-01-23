import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";
const page = () => {
  return (
    <div className="flex items-center justify-center space-y-2 space-x-60 h-screen">
      <div className="absolute left-[15%]">
        <div  className="rounded-full overflow-hidden w-72 h-72 border-8 border-blue-500 flex p-4 items-center justify-center">
          <div className="rounded-full overflow-hidden w-56 h-56 border-8 border-gray-500">
            <Image
              className="dark:invert"
              src="/felana.jpg"
              alt="Next.js logo"
              width={220}
              height={220}
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start space-x-8">
        <div>
          <h3 className="text-4xl font-semibold">
            Felana NIRINA MAMPIONONA
          </h3>
          <h3 className="text-2xl text-gray-500">Web developper</h3>
          <div className="mt-5">
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">Download CV</button>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          {/* GitHub */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <FaGithub size={24} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/felananiaina-nirina-mampionona-357ba6227"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
