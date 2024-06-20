import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold">
              Welcome to Your Learning Hub
              <span className="text-blue-500"> - Discover, Learn, Grow!</span>
            </h1>
            <p className="text-md md:text-lg">
              Join our community and enhance your skills with our wide range of courses. Whether you're looking to advance your career or explore new hobbies, we have something for everyone.
            </p>
            <label className="flex items-center gap-2 bg-white shadow-md rounded-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </label>
          </div>
          <button className="btn mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Get Started
          </button>
        </div>
        <div className="w-full order-1 md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] object-cover rounded-md shadow-md mt-20"
            alt="Learning Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
