import React from "react";

const About =() => {
    return(
    <div className="flex min-h-screen flex-col bg-black container mx-auto  mt-28" >
      <div className="col-span-8 place-self-center"> 
      <h2 className="text-5xl font-bold place-self-center text-white text-center mb-8">Experiences</h2>
       <div className="flex flex-col md:flex-row items-center mt-10">
          <div className="w-full mt-5">
            <div className="flex flex-col items-center">
              <img 
              src="./images/Marine.png" 
              alt="Circle Icon" 
              className="w-20 h-20 mb-2 rounded-full" 
            />
              <span className="flex justify-center text-lg font-semibold">API Management & Integration Intern</span>
              <span className="text-sm font-semibold">(May 2024-Present)</span>
              <div className="flex flex-col items-center space-y-1 mt-1">
                <div className="w-2 h-2 bg-[#DB4B6F] rounded-full"></div>
                <div className="w-px h-16  bg-[#DB4B6F]"></div>
              </div>
            </div>
        
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold">Work</span>
              <div className="flex flex-col items-center space-y-1 mt-1">
                <div className="w-2 h-2 bg-[#DB4B6F] rounded-full"></div>
                <div className="w-px h-16 bg-[#DB4B6F]"></div>
              </div>
            </div>
           
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;