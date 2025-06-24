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

export default function Cobertura({ className = "" }) {
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
    <div
      className={`relative w-full min-h-screen text-white overflow-hidden ${className}`}
    >
      <div className="relative z-10 flex flex-col min-h-screen p-3 sm:p-4 lg:p-6 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        {/* Título principal - Más compacto - RESPONSIVE MEJORADO */}
        <div
          className={`text-center mb-2 sm:mb-3 md:mb-4 lg:mb-4 transition-all duration-1000 ${
            animacionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2">
            <span className="bg-gradient-to-r from-[#33bce7] via-[#e01580] to-[#634e99] bg-clip-text text-transparent">
              Cobertura Nacional
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-2">
            Desde las principales ciudades se coordinan las acciones para todo
            el país
          </p>
        </div>

        {/* Layout principal: Maximizando espacio horizontal - RESPONSIVE MEJORADO */}
        <div
          className={`flex-1 w-full max-w-none mx-auto transition-all duration-1000 delay-300 ${
            animacionVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 h-full">
            {/* Columna del mapa - Más grande - RESPONSIVE MEJORADO */}
            <div className="lg:col-span-2 flex flex-col">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 text-center lg:text-left">
                <span className="bg-gradient-to-r from-[#33bce7] to-[#e01580] bg-clip-text text-transparent">
                  Mapa de Colombia
                </span>
              </h3>

              <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl border border-gray-700/50 p-2 sm:p-3 lg:p-4">
                <div className="relative h-full">
                  <svg
                    viewBox="0 0 1000 800"
                    className="w-full h-full filter drop-shadow-2xl"
                    style={{
                      minHeight: "400px",
                      maxHeight: "800px",
                      height: "clamp(300px, 50vh, 600px)",
                    }}
                  >
                    {/* Mapa base de Colombia */}
                    <image
                      href="/co.svg"
                      x="0"
                      y="0"
                      width="1000"
                      height="800"
                      opacity="0.9"
                      className="transition-all duration-500"
                      style={{ filter: "brightness(0.7) contrast(1.2)" }}
                    />

                    {/* Overlay con gradiente sutil */}
                    <defs>
                      <radialGradient id="mapGradient" cx="50%" cy="50%">
                        <stop offset="0%" stopColor="rgba(51, 188, 231, 0.1)" />
                        <stop
                          offset="50%"
                          stopColor="rgba(224, 21, 128, 0.05)"
                        />
                        <stop
                          offset="100%"
                          stopColor="rgba(99, 78, 153, 0.1)"
                        />
                      </radialGradient>

                      {/* Filtros para efectos de glow */}
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <rect width="1000" height="800" fill="url(#mapGradient)" />

                    {/* Marcadores de ciudades - Más grandes - RESPONSIVE MEJORADO */}
                    {Object.entries(CIUDADES_COBERTURA).map(
                      ([ciudad, info], index) => {
                        const x = (info.x / 100) * 1000;
                        const y = (info.y / 100) * 800;
                        const color = COLORES_REGION[info.region];
                        const isSelected = ciudadSeleccionada === ciudad;
                        const isRegionSelected =
                          regionSeleccionada &&
                          REGIONES[regionSeleccionada].ciudades.includes(
                            ciudad
                          );
                        const shouldHighlight = isSelected || isRegionSelected;

                        return (
                          <g key={ciudad}>
                            {/* Efecto de pulso para ciudad seleccionada - RESPONSIVE MEJORADO */}
                            {shouldHighlight && (
                              <>
                                <circle
                                  cx={x}
                                  cy={y}
                                  r="30"
                                  fill={color}
                                  opacity="0.2"
                                  className="animate-ping"
                                />
                                <circle
                                  cx={x}
                                  cy={y}
                                  r="20"
                                  fill={color}
                                  opacity="0.3"
                                  className="animate-pulse"
                                />
                              </>
                            )}

                            {/* Círculo principal - Más grande - RESPONSIVE MEJORADO */}
                            <circle
                              cx={x}
                              cy={y}
                              r={shouldHighlight ? "12" : "8"}
                              fill={color}
                              stroke="white"
                              strokeWidth="2"
                              className={`transition-all duration-300 cursor-pointer ${
                                animacionVisible ? "opacity-100" : "opacity-0"
                              }`}
                              style={{
                                animationDelay: `${index * 150}ms`,
                                filter: `drop-shadow(0 0 ${
                                  shouldHighlight ? "10px" : "5px"
                                } ${color}) url(#glow)`,
                              }}
                              onClick={() => handleCiudadClick(ciudad)}
                            />

                            {/* Etiqueta de ciudad - Más grande - RESPONSIVE MEJORADO */}
                            <text
                              x={x}
                              y={y - 15}
                              textAnchor="middle"
                              className={`font-bold fill-white transition-all duration-300 pointer-events-none ${
                                shouldHighlight ? "opacity-100" : "opacity-90"
                              }`}
                              style={{
                                filter:
                                  "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))",
                                animationDelay: `${index * 150 + 300}ms`,
                                fontSize: shouldHighlight ? "12px" : "9px",
                              }}
                            >
                              {ciudad}
                            </text>
                          </g>
                        );
                      }
                    )}

                    {/* Líneas de conexión para región seleccionada - Más gruesas - RESPONSIVE MEJORADO */}
                    {regionSeleccionada &&
                      REGIONES[regionSeleccionada].ciudades.map(
                        (ciudad, index) => {
                          if (index === 0) return null;

                          const ciudadActual = CIUDADES_COBERTURA[ciudad];
                          const ciudadAnterior =
                            CIUDADES_COBERTURA[
                              REGIONES[regionSeleccionada].ciudades[index - 1]
                            ];

                          if (!ciudadActual || !ciudadAnterior) return null;

                          const x1 = (ciudadAnterior.x / 100) * 1000;
                          const y1 = (ciudadAnterior.y / 100) * 800;
                          const x2 = (ciudadActual.x / 100) * 1000;
                          const y2 = (ciudadActual.y / 100) * 800;

                          return (
                            <line
                              key={`line-${ciudad}`}
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke={REGIONES[regionSeleccionada].color}
                              strokeWidth="3"
                              strokeDasharray="6,3"
                              className="animate-pulse"
                              opacity="0.7"
                              style={{ animationDelay: `${index * 200}ms` }}
                            />
                          );
                        }
                      )}
                  </svg>
                </div>
              </div>
            </div>

            {/* Columna derecha: Regiones - Más compacta - RESPONSIVE MEJORADO */}
            <div className="lg:col-span-1 flex flex-col">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 text-center lg:text-left">
                <span className="bg-gradient-to-r from-[#e01580] to-[#634e99] bg-clip-text text-transparent">
                  Nuestras Regiones
                </span>
              </h3>

              {/* Grid de regiones - Todas visibles sin scroll - RESPONSIVE MEJORADO */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-1 gap-1 sm:gap-2 lg:gap-3">
                {Object.entries(REGIONES).map(([regionId, region]) => (
                  <div
                    key={regionId}
                    className={`
                      bg-white/5 backdrop-blur-lg 
                      rounded-md sm:rounded-lg border border-gray-700/50 p-1.5 sm:p-2 lg:p-3 cursor-pointer
                      transition-all duration-300 hover:scale-[1.02]
                      ${
                        regionSeleccionada === parseInt(regionId)
                          ? "ring-1 sm:ring-2 ring-opacity-50"
                          : ""
                      }
                    `}
                    style={{
                      ringColor:
                        regionSeleccionada === parseInt(regionId)
                          ? region.color
                          : "transparent",
                    }}
                    onClick={() => handleRegionClick(parseInt(regionId))}
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                      <div
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm shadow-lg"
                        style={{
                          backgroundColor: region.color,
                          boxShadow: `0 0 8px ${region.color}40`,
                        }}
                      >
                        {regionId}
                      </div>
                      <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-white leading-tight">
                        {region.nombre.replace("Región ", "")}
                      </h4>
                    </div>

                    {/* Grid de ciudades más compacto - RESPONSIVE MEJORADO */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0.5 sm:gap-1">
                      {region.ciudades.map((ciudad) => (
                        <div
                          key={ciudad}
                          className={`
                            flex items-center gap-1 sm:gap-1.5 p-0.5 sm:p-1 rounded cursor-pointer
                            transition-all duration-200 hover:bg-gray-700/30
                            ${
                              ciudadSeleccionada === ciudad
                                ? "bg-gray-600/50"
                                : ""
                            }
                          `}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCiudadClick(ciudad);
                          }}
                        >
                          <div
                            className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: region.color }}
                          />
                          <span className="text-xs text-gray-300 hover:text-white transition-colors truncate leading-tight">
                            {ciudad}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas en la parte inferior - Más compactas - RESPONSIVE MEJORADO */}
        <div className="mt-2 sm:mt-3 lg:mt-4 flex justify-center">
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 bg-white/5 backdrop-blur-lg rounded-lg border border-gray-700/50 px-3 sm:px-4 lg:px-6 py-2 lg:py-3">
            <div className="text-center">
              <div className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-[#33bce7] to-[#e01580] bg-clip-text text-transparent">
                {Object.keys(CIUDADES_COBERTURA).length}
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-wider">
                Ciudades
              </div>
            </div>
            <div className="text-center">
              <div className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-[#e01580] to-[#634e99] bg-clip-text text-transparent">
                5
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-wider">
                Regiones
              </div>
            </div>
            <div className="text-center">
              <div className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-[#634e99] to-[#33bce7] bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-wider">
                Cobertura
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
