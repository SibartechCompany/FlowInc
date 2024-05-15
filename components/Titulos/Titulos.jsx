import React from "react";
import Titles from "./Titles";

const Titulos = () => {
  // Estilos para el texto Fondo
  const mainTextStyle = {
    fontSize: "7rem",
    fontWeight: "bold",
    color: "white",
    WebkitTextStroke: "1px #634E9B",
  };

  // Estilos para el texto secundario
  const secondaryTextStyle = {
    fontSize: "5xl",
    fontWeight: "bold",
    backgroundImage: "linear-gradient(to right, #30BDE7, #7C0B48)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div>
      <Titles
        mainText="¿POR QUE¡" // Texto del fondo
        secondaryText="FLOWINC" // Texto del pequeño
        mainTextStyle={mainTextStyle}
        secondaryTextStyle={secondaryTextStyle}
      />
    </div>
  );
};

export default Titulos;
