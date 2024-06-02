import React from 'react';
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const Data = [
    {
      id: 1,
      title: "Marine Guardians",
    //   description: "425 Congress St.",
      image: "./images/Marine.png",
      url: "/MarineGuardians",
    },
   
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black container mx-auto px-20 py-10">
      <div className="max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold place-self-center text-white text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {Data.map((card) => {
          return (
            <ProjectCard
              key={card.id} 
              url={card.url}
              title={card.title}
              description={card.description}
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
