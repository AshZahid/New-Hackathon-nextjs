import Image from "next/image"

import React from "react";

const Activepro = () => {
  return (
    <div className="relative h-96 bg-black pt-12 w-full ">
      {/* Background Image */}
      
      <div className=" h-96 w-full bg-center bg-no-repeat bg-cover" 
      style={{ backgroundImage: `url('/images/activepro.png')`}}>
        
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-right pt-20 h-full px-6 text-right pr-32 text-white">
        <h2 className="text-sm italic font-light text-yellow-400">
          Richland Urban Process
        </h2>
      
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          <span className="text-yellow-400">We</span> Document Every Food <br />
          Bean Process until it is saved
          </h1>
      
        <p className="mt-4 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam<br/>
          pellentesque bibendum non euismod fringilla bibendum.
         </p>
       
        {/* Buttons */}
        <div className="flex items-right justify-center place-items-start mt-6 space-x-4">
          <button className="px-6 py-3 text-sm font-medium text-white border border-yellow-600 rounded-full hover:bg-yellow-600">
            Read More
          </button>
          <button className="flex items-center px-6 py-3 text-sm font-medium text-white rounded-full hover:bg-yellow-600">
            <svg
              className="w-8  bg-yellow-600 rounded-full h-8 mr-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Play Video 
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Activepro;