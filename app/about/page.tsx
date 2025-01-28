import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center md:justify-around pt-[80px] space-y-2 h-screen relative">
      <div className="flex flex-col text-center items-center sm:justify-center mt-32 md:mt-0">
        <span className="text-2xl text-gray">My Personal</span>
        <span className="text-2xl text-gray"> information</span>
      </div>
      <div className="flex flex-col pt-[65px] md:flex-row justify-center min-h-screen gap-28">
        {/* me in photo */}
        <div>
        <Image
            className="dark:invert transform duration-300 hover:scale-125"
            src="/balise.png"
            alt="balise"
            title="balise"
            width={150}
            height={150}
            priority
          />
        </div>
        {/* <div>
          <div className="md:w-80 md:h-80 w-48 h-48 flex items-center justify-center">
            <div
              className="rounded-full flex items-center justify-center p-2 md:p-3"
              style={{
                background: "linear-gradient(to right, #20B2AA, #48D1CC)", // Dégradé extérieur
              }}
            >
              
              <div className="rounded-full flex items-center justify-center p-5 md:p-4 bg-white">
                
                <div
                  className="rounded-full flex items-center justify-center p-2 md:p-3"
                  style={{
                    background: "linear-gradient(to right, #20B2AA, #48D1CC)", // Dégradé intérieur
                  }}
                >
                  
                  <div className="rounded-full overflow-hidden w-36 h-36 md:w-64 md:h-64 bg-white">
                    <Image
                      className="dark:invert"
                      src="/felana.jpg"
                      alt="My Profile Picture"
                      width={255}
                      height={255}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* text info */}
        <div className="flex flex-col gap-3">
          <div className="text-left">
            <h3 className="text-xl font-bold">Felaniaina</h3>
            <h4 className="text-lg text-gray-600">Wev Developper</h4>
            <p className="text-sm text-gray-500 max-w-md mt-2">
              <span>
                I am a passionate web developer skilled in backend and frontend,
              </span>
              <span>
                committed to creating efficient and user-friendly applications.
                Always eager to learn,
              </span>
              <span> I deliver innovative and high-quality solutions.</span>
            </p>
          </div>
          <div className="mt-7">
            <a
              href="#"
              style={{
                background: "linear-gradient(to right, #20B2AA, #48D1CC)", // Dégradé de couleur
              }}
              className="px-16 py-5 md:px-6 md:py-3 text-xl  text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 hover:translate-y-2"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-7">
            <span>My Skills Are</span>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-row gap-2">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/html.png"
                  alt="html"
                  title="HTML"
                  width={35}
                  height={35}
                  priority
                />
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/css.png"
                  alt="css"
                  title="CSS"
                  width={35}
                  height={35}
                  priority
                />
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/js.png"
                  alt="js"
                  title="Javascript"
                  width={35}
                  height={35}
                  priority
                />
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/php.png"
                  alt="php"
                  title="PHP"
                  width={35}
                  height={35}
                  priority
                />
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/bootstrap.png"
                  alt="bootstrap"
                  title="Bootstrap"
                  width={35}
                  height={35}
                  priority
                />
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/tailwindCss.png"
                  alt="tailwindCss"
                  title="tailwindCSS"
                  width={35}
                  height={35}
                  priority
                />

                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/mui.png"
                  alt="mui"
                  title="MaterialUI"
                  width={35}
                  height={35}
                  priority
                />
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/react.png"
                  alt="react"
                  title="React"
                  width={35}
                  height={35}
                  priority
                />
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/next.png"
                  alt="next"
                  title="NextJS"
                  width={35}
                  height={35}
                  priority
                />
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/nodeJS.png"
                  alt="nodeJS"
                  title="NodeJS"
                  width={35}
                  height={35}
                  priority
                />
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/express.png"
                  alt="express"
                  title="ExpressJS"
                  width={35}
                  height={35}
                  priority
                />

                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/symfony.png"
                  alt="symfony"
                  title="Symfony"
                  width={35}
                  height={35}
                  priority
                />
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/laravel.png"
                  alt="laravel"
                  title="Laravel"
                  width={35}
                  height={35}
                  priority
                />
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/java.png"
                  alt="java"
                  title="Java"
                  width={35}
                  height={35}
                  priority
                />
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/net.png"
                  alt="net"
                  title=".NET"
                  width={35}
                  height={35}
                  priority
                />
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/mysql.png"
                  alt="mysql"
                  title="mySQL"
                  width={35}
                  height={35}
                  priority
                />
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/postgresql.png"
                  alt="postgresql"
                  title="postgreSql"
                  width={35}
                  height={35}
                  priority
                />
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/mongoDB.png"
                  alt="mongoDB"
                  title="mongoDB"
                  width={35}
                  height={35}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
