import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";
const page = () => {
  return (
    <div className="flex items-center justify-around space-y-2 h-screen relative">
      <div className="absolute top-0 left-0 w-96 h-full -z-10" style={{background: "linear-gradient(to right, #20B2AA, #48D1CC)"}}></div>
      <div className="flex items-center gap-10">
        <div>
          <div className="w-72 h-72 flex items-center justify-center">
            <div
              className="rounded-full flex items-center justify-center p-3"
              style={{
                background: "linear-gradient(to right, #20B2AA, #48D1CC)", // Dégradé extérieur
              }}
            >
              {/* Espace de séparation épais */}
              <div className="rounded-full flex items-center justify-center p-4 bg-white">
                {/* Bordure intérieure avec dégradé */}
                <div
                  className="rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(to right, #20B2AA, #48D1CC)", // Dégradé intérieur
                    padding: "1rem", // Épaisseur de bordure intérieure
                  }}
                >
                  {/* Image */}
                  <div className="rounded-full overflow-hidden w-56 h-56 bg-white">
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
        <div className="flex flex-row items-start space-x-8">
          <div>
            <h3 className="text-4xl font-semibold">Felana NIRINA MAMPIONONA</h3>
            <h3 className="text-2xl text-gray-500">Web developper</h3>
            <div className="mt-9">
              <a
                href="/CV_felana.pdf"
                download="felanaCV.pdf"
                style={{
                  background: "linear-gradient(to right, #20B2AA, #48D1CC)", // Dégradé de couleur
                }}
                className="px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            {/* GitHub */}
            <a
              href="https://github.com/felana-niaina"
              target="_blank"
              rel="noopener noreferrer"
              className="transition"
            >
              <FaGithub
                size={24}
                style={{ color: "#feb47b" }} // Utilisation directe de la couleur
                className=" hover:text-black-500 transition-colors duration-300"
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
                style={{ color: "#feb47b" }}
                className=" hover:text-black-500 transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
