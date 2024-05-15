import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black py-4 flex justify-center items-center h-[20%]">
      <div className="w-4/5">
        <div className="flex justify-between items-center">
          <a href="#" className="text-white text-lg mx-4">
            SERVICIOS
          </a>
          <a href="#" className="text-white text-lg mx-4">
            CASOS
          </a>
          <img src="/assets/img/logo.webp" alt="Logo" className="h-10 mx-4" />
          <a href="#" className="text-white text-lg mx-4">
            NOSOTROS
          </a>
          <a href="#" className="text-white text-lg mx-4">
            CONTACTO
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
