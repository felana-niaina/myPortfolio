import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center md:justify-around pt-[80px] space-y-2 relative">
      <div className="h-screen flex flex-col pt-[45px] md:flex-row gap-28">
        <div className="flex flex-col gap-5">
          {/* text info */}
          <div className="flex justify-center text-center">
            <p className="text-sm text-gray-200 max-w-md mt-2">
              <span>
                I specialize in frontend and backend technologies to build
                seamless, efficient, and innovative solutions.
              </span>
              <span> Here is a glimpse of my expertise</span>
            </p>
          </div>
          <div className="flex flex-col text-center gap-3">
            <span className="text-gray-300 text-[12px]">
              Frontend technology
            </span>
            <div className="flex justify-center gap-5 flex-wrap">
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg  relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/html.png"
                  alt="html"
                  title="HTML"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                  HTML
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg relative transition-transform duration-300 hover:scale-110 hover:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/js.png"
                  alt="js"
                  title="Javascript"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                  JAVASCRIPT
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/css.png"
                  alt="css"
                  title="CSS"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                  CSS
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/bootstrap.png"
                  alt="bootstrap"
                  title="Bootstrap"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                  BOOTSTRAP
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/tailwindCss.png"
                  alt="tailwindCss"
                  title="tailwindCSS"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                  TAILWIND CSS
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/mui.png"
                  alt="mui"
                  title="MaterialUI"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                  MaterialUI
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/react.png"
                  alt="react"
                  title="React"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                  React JS
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/next.png"
                  alt="next"
                  title="NextJS"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                  NEXT JS
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center gap-3">
            <span className="text-gray-300 text-[12px]">
              Backend technology
            </span>
            <div className="flex justify-center gap-5 flex-wrap">
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg  relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/php.png"
                  alt="php"
                  title="PHP"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                  PHP
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg  relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/nodeJS.png"
                  alt="nodeJS"
                  title="NodeJS"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                  NODE JS
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg  relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/express.png"
                  alt="express"
                  title="ExpressJS"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                EXPRESS JS
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg  relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/symfony.png"
                  alt="symfony"
                  title="Symfony"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                SYMFONY
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg  relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/laravel.png"
                  alt="laravel"
                  title="Laravel"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                LARAVEL
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg  relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/java.png"
                  alt="java"
                  title="Java"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                JAVA
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg  relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/net.png"
                  alt="net"
                  title=".NET"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                .NET
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg  relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/mysql.png"
                  alt="mysql"
                  title="mySQL"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                mySQL
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg  relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/postgresql.png"
                  alt="postgresql"
                  title="postgreSql"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                postgreSQL
                </span>
              </div>
              <div className="gap-1 md:gap-0 bg-slate-800 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-between p-3 rounded-lg  relative transition-transform duration-300 hover:scale-110 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)]">
                <Image
                  className="dark:invert transform duration-300 hover:scale-125"
                  src="/mongoDB.png"
                  alt="mongoDB"
                  title="mongoDB"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-gray-300 text-[5px] md:text-[10px] font-semibold">
                MONGO DB
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default page;
