import React from "react";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black container mx-auto px-20 py-10 justify-center">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white">Let's connect!</h2>
        <div className="flex flex-col md:flex-row items-center mt-10 md:mt-0 md:-mx-4">
          <div className="w-full md:w-1/2 mt-5 md:mt-0 md:px-4">
            <p className="text-lg text-gray-700 px-5">
              Hi, I am Ersi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
