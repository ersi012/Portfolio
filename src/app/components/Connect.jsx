import React from "react";

const About = () => {
  return (
    <section id="connect">
    <div className="flex flex-col mid-h-screen bg-black container mx-auto mt-28" >
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white">Let's connect!</h2>
        <div className="flex justify-center mt-11 ">
          <p className="text-lg text-white px-12">
              Feel free to reach out through email : 
          </p>
          <text>ersildacako14@gmail.com</text>
          <text>or through</text>

        </div>
        <div className="flex justify-center mt-2">
          <text>or</text>
          <p className="text-lg text-[#DB4B6F] px-12">
            <a href="https://www.linkedin.com/in/ersildacako/">LinkedIn</a>
          </p>
          <text className="bg-[#DB4B6F]"> </text>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
