"use client";

import { useState, useEffect } from "react";

const timelineData = [
  {
    year: "2018",
    title: "Nacimos con una idea",
    description:
      "Flow Inc nació como un sueño creativo en 2018. Desde el principio, nuestra misión fue sumar valor a través de ideas que conectan, inspiran y transforman.",
    color: "#33bce7",
    icon: "💡",
  },
  {
    stat: "+7 años",
    title: "de experiencia",
    description:
      "Hoy contamos con más de siete años acompañando marcas en sus retos de comunicación, activación y diseño. Hemos crecido con cada proyecto, consolidando una propuesta única en el mercado.",
    color: "#634e99",
    icon: "🚀",
  },
  {
    title: "Presencia nacional",
    description:
      "Coordinamos operaciones en todo el territorio colombiano. Desde nuestras principales ciudades operativas, generamos impacto real en puntos estratégicos del país.",
    color: "#e01580",
    icon: "🇨🇴",
  },
  {
    stat: "+100",
    title: "clientes satisfechos",
    description:
      "Más de 100 marcas han confiado en nuestro equipo, nuestro enfoque y nuestra capacidad de ejecución. Construimos relaciones duraderas, con resultados visibles.",
    color: "#33bce7",
    icon: "🏆",
  },
];

export default function QuienesSomos() {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Mostrar todas las cards con animación escalonada
    timelineData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto relative z-10">
        {/* Título Principal */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6">
            <span className="text-white">¿</span>
            <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              QUIÉNES SOMOS
            </span>
            <span className="text-white">?</span>
          </h2>
          <div className="w-16 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-[#33bce7] to-[#e01580] mx-auto rounded-full"></div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                {/* Contenido */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    {/* Stat/Year */}
                    {(item.year || item.stat) && (
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                          {item.icon}
                        </div>
                        <div
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r bg-clip-text text-transparent"
                          style={{
                            backgroundImage: `linear-gradient(45deg, ${item.color}, ${item.color}80)`,
                          }}
                        >
                          {item.year || item.stat}
                        </div>
                      </div>
                    )}

                    {/* Solo icono para los que no tienen year/stat */}
                    {!item.year && !item.stat && (
                      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4">
                        {item.icon}
                      </div>
                    )}

                    {/* Título */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Línea decorativa */}
                    <div
                      className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                  </div>
                </div>

                {/* Elemento Visual */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-1" : ""
                  } flex justify-center`}
                >
                  <div className="relative">
                    {/* Círculo principal */}
                    <div
                      className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)`,
                        border: `2px solid ${item.color}40`,
                      }}
                    >
                      {/* Contenido del círculo */}
                      <div className="text-center z-10">
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-3 md:mb-4">
                          {item.icon}
                        </div>
                        {(item.year || item.stat) && (
                          <div
                            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold"
                            style={{ color: item.color }}
                          >
                            {item.year || item.stat}
                          </div>
                        )}
                      </div>

                      {/* Efectos de fondo en el círculo */}
                      <div
                        className="absolute inset-0 rounded-full opacity-20"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, ${item.color}40, transparent 50%)`,
                        }}
                      ></div>

                      {/* Partículas flotantes */}
                      <div
                        className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full animate-bounce"
                        style={{
                          backgroundColor: item.color,
                          animationDelay: "0s",
                          animationDuration: "2s",
                        }}
                      ></div>
                      <div
                        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 w-1.5 sm:w-2 md:w-2 h-1.5 sm:h-2 md:h-2 rounded-full animate-bounce"
                        style={{
                          backgroundColor: item.color,
                          animationDelay: "0.5s",
                          animationDuration: "3s",
                        }}
                      ></div>
                      <div
                        className="absolute top-1/2 left-2 sm:left-3 md:left-4 w-1 h-1 rounded-full animate-pulse"
                        style={{ backgroundColor: item.color }}
                      ></div>
                    </div>

                    {/* Aura externa */}
                    <div
                      className="absolute inset-0 rounded-full blur-lg sm:blur-xl opacity-20 sm:opacity-30 animate-pulse"
                      style={{
                        background: `radial-gradient(circle, ${item.color}30, transparent 70%)`,
                        transform: "scale(1.1) sm:scale(1.2)",
                      }}
                    ></div>

                    {/* Líneas de conexión decorativas */}
                    <div
                      className="absolute -top-2 sm:-top-3 md:-top-4 -right-2 sm:-right-3 md:-right-4 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 border-t-2 border-r-2 rounded-tr-lg opacity-30"
                      style={{ borderColor: item.color }}
                    ></div>
                    <div
                      className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 -left-2 sm:-left-3 md:-left-4 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 border-b-2 border-l-2 rounded-bl-lg opacity-30"
                      style={{ borderColor: item.color }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats finales */}
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          <div className="space-y-1 sm:space-y-2">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#33bce7] to-[#634e99] bg-clip-text text-transparent">
              500K+
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              Clientes Alcanzados
            </div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              7+
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              Años de Experiencia
            </div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#e01580] to-[#33bce7] bg-clip-text text-transparent">
              100+
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              Proyectos Exitosos
            </div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#33bce7] to-[#e01580] bg-clip-text text-transparent">
              5★
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              Satisfacción Cliente
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
