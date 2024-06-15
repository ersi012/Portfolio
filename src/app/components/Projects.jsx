import React from 'react';
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const Data = [
    {
      id: 1,
      title: "Stepping Out: the Portland, Maine Queer History Trail",
      image: "./images/Marine.png",
      url: "/SteppingOut",
    },
    {
      id: 2,
      title: "SustainaVerse",
      image: "./images/Marine.png",
      url: "/SustainaVerse",
    },
    {
      id: 3,
      title: "Izhikevich Spiking Neuron Model",
      image: "./images/Marine.png",
      url: "/NeuronModel",
    },
    {
      id: 4,
      title: "Recipe Master",
      image: "./images/Marine.png",
      url: "/RecipeMaster",
    },
    {
      id: 5,
      title: "Unalive Purpose",
      image: "./images/Marine.png",
      url: "/UnalivePurpose",
    },
    {
      id: 6,
      title: "GreenDex",
      image: "./images/Marine.png",
      url: "/UnalivePurpose",
    },
    {
      id: 7,
      title: "Water Balloon Pop",
      image: "./images/Marine.png",
      url: "/UnalivePurpose",
    },
    {
      id: 8,
      title: "Marine Guardians",
      image: "./images/Marine.png",
      url: "/MarineGuardians",
    },
  ];

  return (
    <div className="bg-black  min-h-screen flex justify-center items-center mt-28">
      <div className="max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold place-self-center text-white text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7">
        {Data.map((card) => {
          return (
            <ProjectCard
              key={card.id} 
              url={card.url}
              title={card.title}
              imgUrl={card.image}
            />
          );
        })}

        </div>
      </div>
    </div>
   
  );
};

export default Projects;
