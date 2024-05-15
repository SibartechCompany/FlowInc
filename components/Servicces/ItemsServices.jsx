import React from "react";

const ItemsServices = () => {
  // Array de nombres y textos de servicios
  const servicios = [
    {
      nombre: "Servicio 1",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      nombre: "Servicio 2",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      nombre: "Servicio 3",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      nombre: "Servicio 4",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      nombre: "Servicio 5",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      nombre: "Servicio 6",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-full md:w-5/6 flex flex-wrap">
        {servicios.map((servicio, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-xl font-semibold text-center mb-3">
              {servicio.nombre}
            </h3>
            <p className="text-center">{servicio.texto}</p>
            <p className="text-center mt-2 mb-2">
              <a href="#" className="text-pink-600 underline">
                Leer más
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsServices;
