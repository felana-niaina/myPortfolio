"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="border-b-8 border-[#3ec9c3] flex items-center justify-around space-y-2 h-screen relative">
      <div
        // className="absolute top-0 left-0 w-96 h-full -z-10"
        className="absolute top-0 left-0 md:w-96 w-full md:h-full h-72 -z-10"
        style={{ background: "linear-gradient(to right, #20B2AA, #48D1CC)" }}
      ></div>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div>
          <div className="md:w-72 md:h-72 w-48 h-48 flex items-center justify-center">
            <div
              className="rounded-full flex items-center justify-center p-2 md:p-3"
              style={{
                background: "linear-gradient(to right, #20B2AA, #48D1CC)", // Dégradé extérieur
              }}
            >
              {/* Espace de séparation épais */}
              <div className="rounded-full flex items-center justify-center p-5 md:p-4 bg-white">
                {/* Bordure intérieure avec dégradé */}
                <div
                  className="rounded-full flex items-center justify-center p-2 md:p-3"
                  style={{
                    background: "linear-gradient(to right, #20B2AA, #48D1CC)", // Dégradé intérieur
                  }}
                >
                  {/* Image */}
                  <div className="rounded-full overflow-hidden w-36 h-36 md:w-56 md:h-56 bg-white">
                    <Image
                      className="dark:invert"
                      src="/felana.jpg"
                      alt="My Profile Picture"
                      width={220}
                      height={220}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Info perso */}
        <div>
          <div className="flex flex-col items-center text-center md:flex-row md:space-x-8 mb-11 space-y-6 md:space-y-0">
            {/* Informations personnelles */}
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl font-semibold hidden md:block">
                Felana NIRINA MAMPIONONA
              </h3>
              <h3 className="text-4xl font-semibold block md:hidden">
                Felaniaina
              </h3>
              <h3 className="text-3xl text-gray-500 md:flex">Web Developer</h3>
            </div>

            {/* Icônes sociales et bouton Download CV */}
            <div className="flex flex-col space-y-4">
              {/* Icônes sociales */}
              <div className="flex flex-row md:flex-col space-x-6 md:space-x-0 md:space-y-2 gap-2">
                {/* GitHub */}
                <a
                  href="https://github.com/felana-niaina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition"
                >
                  <FaGithub
                    size={24}
                    style={{ color: "#20B2AA" }}
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
                    style={{ color: "#20B2AA" }}
                    className="hover:text-black-500 transition-colors duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Bouton Download CV */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/CV_felana.pdf"
              download="felanaCV.pdf"
              style={{
                background: "linear-gradient(to right, #20B2AA, #48D1CC)", // Dégradé de couleur
              }}
              className="px-16 py-5 md:px-6 md:py-3 text-xl  text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 hover:translate-y-2"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}
