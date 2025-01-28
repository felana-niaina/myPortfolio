import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-[90px]">
      <div className="flex flex-col items-center justify-center">
        <span>Let's Talk</span>
        <span>About Your Project</span>
      </div>
      <div>
        <div className="container mx-auto p-6">
          {/* Row for first name and email */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* First Name Input */}
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="firstName" className="text-lg font-medium mb-2">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className="p-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Address Input */}
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="email" className="text-lg font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="p-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Textarea */}
          <div className="flex flex-col mt-6">
            <label htmlFor="message" className="text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
              rows={4}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="flex justify-center items-center mt-6">
            <a
              href="#"
              style={{
                background: "linear-gradient(to right, #20B2AA, #48D1CC)", // Dégradé de couleur
              }}
              className="px-16 py-5 md:px-6 md:py-3 text-xl  text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 hover:translate-y-2"
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
