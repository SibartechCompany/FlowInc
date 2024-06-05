// Footer.js

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const socialMediaLinks = [
    { icon: FaFacebook, color: "#634E9B", url: "#" },
    { icon: FaTwitter, color: "#30BDE7", url: "#" },
    { icon: FaInstagram, color: "#E21483", url: "#" },
  ];

  const renderSocialLinks = () => {
    return socialMediaLinks.map((link, index) => (
      <a key={index} href={link.url}>
        <link.icon className={`text-${link.color}`} />
      </a>
    ));
  };

  const sectionData = [
    {
      title: "COMPAÑÍA",
      links: ["Servicios", "Casos", "Nosotros"],
    },
    {
      title: "AYUDA",
      links: ["Atención al cliente", "Términos", "Políticas"],
    },
    {
      title: "Suscríbete",
      inputPlaceholder: "Correo electrónico",
      buttonText: "Suscríbete",
    },
  ];

  const renderSections = () => {
    return sectionData.map((section, index) => (
      <div key={index} className="text-white">
        <h2 className="font-bold mb-4 animate-wave bg-gradient-to-r from-[#E21483] via-[#30BDE7] to-[#30BDE7] bg-clip-text text-transparent">
          {section.title}
        </h2>
        {section.links ? (
          <ul>
            {section.links.map((link, idx) => (
              <li key={idx}>{link}</li>
            ))}
          </ul>
        ) : (
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder={section.inputPlaceholder}
              className="py-2 px-4 mb-2 sm:mr-2 sm:mb-0"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#E21483] via-[#634E9B] to-[#30BDE7] text-black py-2 px-4"
            >
              {section.buttonText}
            </button>
          </form>
        )}
      </div>
    ));
  };

  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto w-5/6 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-white mb-8 md:mb-0">
          <img src="/assets/img/logo.webp" alt="Logo" className="mb-4 w-20" />
          <p>
            Con FLOW INC las mejores estrategias de marketing están con
            facilidad
          </p>
          <div className="flex space-x-4 mt-4">{renderSocialLinks()}</div>
        </div>
        {renderSections()}
      </div>
    </footer>
  );
};

export default Footer;
