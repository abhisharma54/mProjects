import React from "react";

function ProjectCard({ imgSrc, imgAlt, projectName, description }) {
  return (
    <div className="group relative w-[350px] h-[400px] flex flex-col gap-2 p-2.5 border bg-[var(--bgCardColor)] border-[#202020] rounded-[var(--boxRadius)] cursor-pointer hover:shadow-2xl dark:bg-[var(--bgDarkCardColor)] transition duration-150 ease-in overflow-hidden max-[550px]:w-full max-[550px]:h-[430px]">
      <img
        className="w-full h-[340px] object-cover rounded-[var(--boxRadius)] border border-[#202020] shadow-md max-[550px]:h-[370px]"
        src={imgSrc}
        alt={imgAlt}
        loading="lazy"
      />
      <div className="w-full h-[50px] absolute bottom-0 left-0 p-2 rounded-t-lg transition-all duration-150 ease-in-out group-hover:h-[120px] group-hover:bg-[var(--bgCardColor)] dark:group-hover:bg-[var(--bgDarkCardColor)] group-hover:rounded-3xl">
        <h1 className="text-2xl font-bold pb-2 text-white group-hover:text-white">
          {projectName}
        </h1>
        <p className="text-white font-medium group-hover:text-[var(--textColor)]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
