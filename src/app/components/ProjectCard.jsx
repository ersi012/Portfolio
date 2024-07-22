
import React from "react";
import Link from "next/link";

const SiteCard = ({ url, imgUrl, title, description }) => {
    return (
      <div style={{ cursor: "pointer" }}>
        <Link href={url} passHref>
        <div
          className="h-52 md:h-72 rounded-t-xl relative group"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" , backgroundPosition: "center" }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#DB4B6F] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          </div>
        </div>
        <div className="text-gray rounded-b-xl mt-3 bg-[#DB4B6F] py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </Link>
      </div>
  );
};

export default SiteCard;