import React from "react";

const About = () => {
  return (
    <div id="about" className="flex min-h-screen flex-col bg-black container mx-auto px-20 py-10 mb-10  justify-center">
      <h2 className="text-5xl font-bold text-white text-center">About me</h2>
      <div className="flex flex-col md:flex-row items-center mt-10 ">
        <div className="w-full  flex justify-center  mt-5 ">
          <p className="text-white mt-2 mb-6 text-lg lg:text-xl text-center">
            I am a Computer Science student at UMaine. I am passionate about everything tech and innovation! Join me in this journey
          </p>
        </div>
      </div>
      {/* <div className="flex justify-center mt-5">
        <button className="px-6 py-3 rounded-full bg-[#DB4B6F] hover:bg-slate-200 text-black">LinkedIn</button>
      </div> */}
    </div>
  );
};

export default About;
