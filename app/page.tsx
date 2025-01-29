"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className=" flex items-center justify-around space-y-2 h-screen relative">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-28">
        <div className="block mt-[15px] md:hidden md:w-[240px] md:h-[240px] w-[175px] h-[175px] rounded-full overflow-hidden border-4 border-gradient-to-r from-[#20B2AA] via-[#42ccc7] to-[#48D1CC] shadow-xl shadow-gray-900 transform hover:scale-105 transition-all duration-300">
          <Image
            src="/felana.jpg"
            alt="My Profile Picture"
            width={255}
            height={255}
            priority
            className="object-cover"
          />
        </div>
        {/* Icônes sociales */}
        <div className="flex flex-row md:flex-col gap-5">
          {/* GitHub */}
          <a
            href="https://github.com/felana-niaina"
            target="_blank"
            rel="noopener noreferrer"
            className="transition"
          >
            <FaGithub
              size={24}
              className="text-white hover:text-black-500 transition-colors duration-300"
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
              className="text-white hover:text-blue-600 transition-colors duration-300"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="transition"
          >
            <FaInstagram
              size={24}
              className="text-white hover:text-pink-500 transition-colors duration-300"
            />
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="transition"
          >
            <FaFacebook
              size={24}
              className="text-white hover:text-blue-600 transition-colors duration-300"
            />
          </a>
        </div>
        {/* Info perso */}
        <div>
          <div className="flex flex-col items-center text-center gap-10">
            {/* Informations personnelles */}
            <div className="flex flex-col gap-2">
              <span className="text-center md:text-left text-white">
                Hello, I m{" "}
                <strong className="text-[#20B2AA]">Felana Andria</strong>
              </span>
              <h3 className="text-2xl md:text-4xl font-bold text-center md:text-left text-[#20B2AA]">
                Web Developer .
              </h3>
              <div className="text-center md:text-left text-white">
                <p className="text-sm text-white align-top max-w-md mt-2 px-7 md:px-0">
                  <span>
                    I am a passionate web developer skilled in backend and frontend,
                  </span>
                  <span>
                    committed to creating efficient and user-friendly
                    applications. Always eager to learn,
                  </span>
                  <span> I deliver innovative and high-quality solutions.</span>
                </p>
              </div>
            </div>
            {/* Bouton Download CV & contact info*/}
            <div className="flex flex-col md:flex-row gap-10 md:gap-4 md:align-top w-full">
              <div>
                <a
                  href="/CV_felana.pdf"
                  download="felanaCV.pdf"
                  className="px-9 py-3 md:px-6 md:py-3 text-black font-semibold border border-black rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1 bg-white hover:bg-[#20B2AA] hover:text-white"
                >
                  Download CV
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="px-9 py-3 md:px-6 md:py-3 text-white font-semibold border border-white rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1 bg-[#20B2AA] hover:bg-white hover:text-black"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-[240px] md:h-[240px] w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-gradient-to-r from-[#20B2AA] via-[#42ccc7] to-[#48D1CC] shadow-xl shadow-gray-900 transform hover:scale-105 transition-all duration-300">
          <Image
            src="/felana.jpg"
            alt="My Profile Picture"
            width={255}
            height={255}
            priority
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
