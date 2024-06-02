import React from "react";
import Link from "next/link";

const ProjectCard = ({ url, imgUrl, title, description }) => {
    return (
      <div style={{ cursor: "pointer" }}>
        <Link href={url} passHref>
        <div
          className="h-72 md:h-96 rounded-t-xl relative group "
          style={{ background: `url(${imgUrl}) no-repeat center center`, backgroundSize: "contain" }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#464545] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          </div>
        </div>
        <div className="text-white rounded-b-xl mt-3 bg-[#DB4B6F] py-6 px-4">
          <h5 className="text-2xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </Link>
      </div>
  );
};

export default ProjectCard;
