import React from "react";

const ServicesElement = ({ icon, name, href }) => {
  return (
    <a
      className="flex flex-col items-center gap-6 containerNavServices"
      href={href}
    >
      <div className="flex relative justify-center items-center">
        <div className="absolute">{icon}</div>
        <span className="polygon" />
      </div>

      <p className="text-xl font-bold w-full text-center w-[120px]">{name}</p>
    </a>
  );
};

export default ServicesElement;
