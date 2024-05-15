// Footer.js

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto w-5/6 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-white mb-8 md:mb-0">
          <img src="/assets/img/logo.webp" alt="Logo" className="mb-4 w-20" />
          <p>
            Con FLOW INC las mejores estrategias de marketing están con
            facilidad
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#">
              <FaFacebook className="text-[#634E9B]" />
            </a>
            <a href="#">
              <FaTwitter className="text-[#30BDE7]" />
            </a>
            <a href="#">
              <FaInstagram className="text-[#E21483]" />
            </a>
          </div>
        </div>
        <div className="text-white">
          <h2 className="font-bold mb-4 animate-wave bg-gradient-to-r from-[#E21483] via-[#30BDE7] to-[#30BDE7] bg-clip-text text-transparent">
            COMPAÑÍA
          </h2>
          <ul>
            <li>Servicios</li>
            <li>Casos</li>
            <li>Nosotros</li>
          </ul>
        </div>
        <div className="text-white">
          <h2 className="font-bold mb-4 animate-wave bg-gradient-to-r from-[#E21483] via-[#30BDE7] to-[#30BDE7] bg-clip-text text-transparent">
            AYUDA
          </h2>
          <ul>
            <li>Atención al cliente</li>
            <li>Términos</li>
            <li>Políticas</li>
          </ul>
        </div>
        <div className="text-white">
          <h2 className="font-bold mb-4 animate-wave bg-gradient-to-r from-[#E21483] via-[#30BDE7] to-[#30BDE7] bg-clip-text text-transparent">
            Suscríbete
          </h2>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="py-2 px-4 mb-2 sm:mr-2 sm:mb-0"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#E21483] via-[#634E9B] to-[#30BDE7] text-black py-2 px-4"
            >
              Suscríbete
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
