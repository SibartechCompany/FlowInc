import React from "react";

const Titles = ({
  mainText, // Texto principal
  secondaryText, // Texto secundario
  mainTextStyle, // Estilos para el texto principal
  secondaryTextStyle, // Estilos para el texto secundario
}) => {
  return (
    <div className="flex justify-center items-center relative">
      <div>
        <h2
          className="text-[7rem] font-bold text-[#634E9B] relative z-10 flex"
          style={mainTextStyle} // Aplicar estilos al texto principal
        >
          <span
            className="text-white"
            style={{ WebkitTextStroke: "1px #A0AEC0" }} // Estilos para el texto principal
          >
            {mainText}
          </span>
        </h2>
        <h2
          className="text-5xl font-bold absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-20"
          style={secondaryTextStyle} // Aplicar estilos al texto secundario
        >
          {secondaryText}
        </h2>
      </div>
    </div>
  );
};

export default Titles;
