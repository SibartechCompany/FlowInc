"use client";
import React from "react";
import Titulos from "../Titulos/Titulos";

const BrandingAndPublicity = () => {
  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundImage: `url(https://img.freepik.com/vector-gratis/fondo-bokeh-realista_52683-63997.jpg?t=st=1723334807~exp=1723335407~hmac=6dc213c078046459454a9edc27364e2a88bf4acdea75b053b397f3f9695a11d6)`,
      }}
    >
      <div
        className="w-full"
        style={{
          backgroundColor: "rgba(48, 189, 231, .5)",
        }}
      >
        <Titulos
          mainText={"BRANDING Y PUBLICIDAD"}
          secondaryText={"BRANDING Y PUBLICIDAD"}
          colorsBG={["#ffffff", "#f5f5f5"]}
        />
      </div>
    </div>
  );
};

export default BrandingAndPublicity;
