"use client";

import { useState, useEffect } from "react";

// Mapeo de ciudades con sus departamentos y coordenadas aproximadas
const CIUDADES_COBERTURA = {
  // Región Caribe
  Medellín: { depto: "Antioquia", region: "caribe", x: 25, y: 35 },
  "Santa Marta": { depto: "Magdalena", region: "caribe", x: 42, y: 18 },
  Montería: { depto: "Córdoba", region: "caribe", x: 35, y: 30 },
  Riohacha: { depto: "La Guajira", region: "caribe", x: 50, y: 15 },
  Barranquilla: { depto: "Atlántico", region: "caribe", x: 40, y: 20 },
  Cartagena: { depto: "Bolívar", region: "caribe", x: 38, y: 25 },

  // Región Centro-Sur
  Neiva: { depto: "Huila", region: "centro", x: 38, y: 60 },
  Ibagué: { depto: "Tolima", region: "centro", x: 35, y: 50 },
  "Eje cafetero": {
    depto: "Caldas/Quindío/Risaralda",
    region: "centro",
    x: 30,
    y: 45,
  },

  // Región Pacífico
  Cali: { depto: "Valle del Cauca", region: "pacifico", x: 25, y: 55 },
  Popayán: { depto: "Cauca", region: "pacifico", x: 28, y: 62 },
  Pasto: { depto: "Nariño", region: "pacifico", x: 32, y: 75 },

  // Región Oriental
  Bogotá: { depto: "Cundinamarca", region: "oriental", x: 42, y: 45 },
  Tunja: { depto: "Boyacá", region: "oriental", x: 45, y: 40 },
  Bucaramanga: { depto: "Santander", region: "oriental", x: 48, y: 35 },
  Cúcuta: { depto: "Norte de Santander", region: "oriental", x: 52, y: 30 },

  // Región Orinoquia
  Villavicencio: { depto: "Meta", region: "orinoquia", x: 50, y: 55 },
  Yopal: { depto: "Casanare", region: "orinoquia", x: 55, y: 45 },
};

const COLORES_REGION = {
  caribe: "#33bce7", // Azul principal de la página
  centro: "#10B981", // Verde
  pacifico: "#634e99", // Púrpura principal de la página
  oriental: "#e01580", // Rosa principal de la página
  orinoquia: "#F59E0B", // Amarillo
};

const REGIONES = {
  1: {
    nombre: "Región Caribe",
    color: "#33bce7",
    ciudades: [
      "Medellín",
      "Santa Marta",
      "Montería",
      "Riohacha",
      "Barranquilla",
      "Cartagena",
    ],
  },
  2: {
    nombre: "Región Centro",
    color: "#10B981",
    ciudades: ["Neiva", "Ibagué", "Eje cafetero"],
  },
  3: {
    nombre: "Región Pacífico",
    color: "#634e99",
    ciudades: ["Cali", "Popayán", "Pasto"],
  },
  4: {
    nombre: "Región Oriental",
    color: "#e01580",
    ciudades: ["Bogotá", "Tunja", "Bucaramanga", "Cúcuta"],
  },
  5: {
    nombre: "Región Orinoquia",
    color: "#F59E0B",
    ciudades: ["Villavicencio", "Yopal"],
  },
};

export default function Cobertura() {
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState(null);
  const [regionSeleccionada, setRegionSeleccionada] = useState(null);
  const [animacionVisible, setAnimacionVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimacionVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleCiudadClick = (ciudad) => {
    setCiudadSeleccionada(ciudad === ciudadSeleccionada ? null : ciudad);
    setRegionSeleccionada(null);
  };

  const handleRegionClick = (regionId) => {
    setRegionSeleccionada(regionId === regionSeleccionada ? null : regionId);
    setCiudadSeleccionada(null);
  };

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto relative z-10">
        {/* Título Principal */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              NUESTRA COBERTURA
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Presencia nacional con operaciones coordinadas en todo el territorio colombiano
          </p>
          <div className="w-16 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-[#33bce7] to-[#e01580] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Mapa Interactivo */}
        <div className="relative mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 sm:p-12 border border-white/10">
            {/* Mapa de Colombia simplificado */}
            <div className="relative w-full h-96 sm:h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
              {/* Puntos de ciudades */}
              {Object.entries(CIUDADES_COBERTURA).map(([ciudad, info]) => (
                <div
                  key={ciudad}
                  className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-150 ${
                    ciudadSeleccionada === ciudad
                      ? "animate-pulse"
                      : "hover:animate-ping"
                  }`}
                  style={{
                    left: `${info.x}%`,
                    top: `${info.y}%`,
                    backgroundColor: COLORES_REGION[info.region],
                    boxShadow: `0 0 20px ${COLORES_REGION[info.region]}40`,
                  }}
                  onClick={() => handleCiudadClick(ciudad)}
                  title={ciudad}
                >
                  {/* Tooltip */}
                  {ciudadSeleccionada === ciudad && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 text-white text-sm rounded-lg whitespace-nowrap z-20">
                      {ciudad}
                    </div>
                  )}
                </div>
              ))}

              {/* Líneas de conexión */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {Object.entries(CIUDADES_COBERTURA).map(([ciudad, info], index) => {
                  const nextCity = Object.entries(CIUDADES_COBERTURA)[index + 1];
                  if (nextCity) {
                    const [nextCiudad, nextInfo] = nextCity;
                    return (
                      <line
                        key={`line-${index}`}
                        x1={`${info.x}%`}
                        y1={`${info.y}%`}
                        x2={`${nextInfo.x}%`}
                        y2={`${nextInfo.y}%`}
                        stroke={COLORES_REGION[info.region]}
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        opacity="0.3"
                      />
                    );
                  }
                  return null;
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* Regiones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Object.entries(REGIONES).map(([id, region]) => (
            <div
              key={id}
              className={`group relative p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[${region.color}]/50 transition-all duration-300 hover:scale-105 cursor-pointer ${
                regionSeleccionada === parseInt(id) ? "ring-2 ring-[${region.color}]/50" : ""
              }`}
              onClick={() => handleRegionClick(parseInt(id))}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${region.color}20, ${region.color}10)`,
                    border: `2px solid ${region.color}40`,
                  }}
                >
                  🗺️
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{region.nombre}</h3>
                  <p className="text-sm text-gray-400">
                    {region.ciudades.length} ciudades
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {region.ciudades.map((ciudad) => (
                  <div
                    key={ciudad}
                    className="flex items-center space-x-2 text-sm text-gray-300"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: region.color }}
                    ></div>
                    <span>{ciudad}</span>
                  </div>
                ))}
              </div>

              {/* Efecto hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${region.color}10, transparent)`,
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#33bce7] to-[#634e99] bg-clip-text text-transparent">
              {Object.keys(CIUDADES_COBERTURA).length}
            </div>
            <div className="text-gray-400 text-sm">Ciudades</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              {Object.keys(REGIONES).length}
            </div>
            <div className="text-gray-400 text-sm">Regiones</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#e01580] to-[#33bce7] bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-gray-400 text-sm">Cobertura</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#33bce7] to-[#e01580] bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-gray-400 text-sm">Soporte</div>
          </div>
        </div>
      </div>
    </section>
  );
}
