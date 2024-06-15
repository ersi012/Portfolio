import React from "react";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black container mx-auto  justify-center">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white">Let's connect!</h2>
        <div className="flex flex-col md:flex-row items-center ">
          <div className="w-full md:w-1/2  ">
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
