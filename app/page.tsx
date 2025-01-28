"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className=" flex items-center justify-around space-y-2 h-screen relative">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-[240px] md:h-[240px] w-[200px] h-[200px] rounded-full overflow-hidden border border-black">
          <Image
            src="/felana.jpg"
            alt="My Profile Picture"
            width={255}
            height={255}
            priority
            className="object-cover"
          />
        </div>

        {/* Info perso */}
        <div>
          <div className="flex flex-col items-center text-center mb-11 gap-10">
            {/* Informations personnelles */}
            <div className="flex flex-col gap-2">
              <span>Hello, I'm</span>
              <h3 className="text-4xl font-bold hidden md:block">
                Felana Andria
              </h3>
              <h3 className="text-3xl font-semibold block md:hidden">
                Web Developer
              </h3>
            </div>
            {/* Bouton Download CV & contact info*/}
            <div className="flex flex-col md:flex-row gap-10 md:gap-4">
              <div>
                <a
                  href="/CV_felana.pdf"
                  download="felanaCV.pdf"
                  className="px-9 py-3 md:px-6 md:py-3 text-black font-semibold border border-black rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1 bg-white hover:bg-gray-100"
                >
                  Download CV
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="px-9 py-3 md:px-6 md:py-3 text-white font-semibold border border-white rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1 bg-black hover:bg-gray-900"
                >
                  Contact Info
                </a>
              </div>
            </div>
            {/* Icônes sociales*/}

            {/* Icônes sociales */}
            <div className="flex flex-row gap-2">
              {/* GitHub */}
              <a
                href="https://github.com/felana-niaina"
                target="_blank"
                rel="noopener noreferrer"
                className="transition"
              >
                <FaGithub
                  size={24}
                  className="hover:text-black-500 transition-colors duration-300"
                />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/felananiaina-nirina-mampionona-357ba6227"
                target="_blank"
                rel="noopener noreferrer"
                className="transition"
              >
                <FaLinkedin
                  size={24}
                  className="hover:text-black-500 transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
