import React, { useState, useEffect } from "react";
import Titles from "./Titles";
import { Margarine } from "next/font/google";

const Titulos = ({ mainText, secondaryText }) => { 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize(); // Llama a la función inicialmente para establecer el estado
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Estilos para el texto Fondo
  const mainTextStyle = {
    fontSize: isMobile ? "4rem" : "7rem",
    fontWeight: "bold",
    color: "white",
    WebkitTextStroke: "1px #634E9B",
    fontFamily: "ui-sans-serif, system-ui, sans-serif",
  };

  // Estilos para el texto secundario
  const secondaryTextStyle = {
    fontSize: isMobile ? "2rem" : "3rem",
    fontWeight: "bold",
    backgroundImage: "linear-gradient(to right, #30BDE7, #7C0B48)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginTop: isMobile ? "0.5rem" : "1rem",
  };

  return (
    <div>
      <Titles
        mainText={mainText} // Texto del fondo
        secondaryText={secondaryText} // Texto del pequeño
        mainTextStyle={mainTextStyle}
        secondaryTextStyle={secondaryTextStyle}
      />
    </div>
  );
};

export default Titulos;
