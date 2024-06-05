import React from "react";
import Titles from "../Titulos/Titles";

const TituloServicios = () => {
  // Estilos para el texto Fondo
  const mainTextStyle = {
    fontSize: "clamp(5rem, 8vw, 7rem)", // Tamaño del texto adaptable
    fontWeight: "bold",
    color: "white",
    WebkitTextStroke: "1px #634E9B",
    fontFamily: "ui-sans-serif, system-ui, sans-serif",
  };

  // Estilos para el texto secundario
  const secondaryTextStyle = {
    fontSize: "clamp(1.5rem, 5vw, 3xl)", // Tamaño del texto adaptable
    fontWeight: "bold",
    backgroundImage: "linear-gradient(#E21483, #E21483)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginTop: "1rem", // Espacio superior ajustado
  };

  return (
    <div>
      <Titles
        mainText="SERVICIOS" // Texto del fondo
        secondaryText="MIS SERVICIOS" // Texto del pequeño
        mainTextStyle={mainTextStyle}
        secondaryTextStyle={secondaryTextStyle}
      />
    </div>
  );
};

export default TituloServicios;
