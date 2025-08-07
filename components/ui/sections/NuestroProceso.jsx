"use client";

import { useState, useEffect } from "react";

const procesoData = [
  {
    step: "01",
    title: "ESCUCHAMOS",
    subtitle: "Tu visión es nuestro punto de partida",
    description:
      "Briefing detallado • Análisis de necesidades • Definición de objetivos",
    icon: "👂",
    color: "#33bce7",
    bgPattern:
      "radial-gradient(circle at 20% 80%, #33bce720 0%, transparent 50%)",
    details: [
      "Sesión de briefing personalizada",
      "Análisis profundo del mercado",
      "Definición clara de objetivos",
    ],
  },
  {
    step: "02",
    title: "CREAMOS",
    subtitle: "Ideas que cobran vida",
    description:
      "Conceptualización creativa • Desarrollo de propuestas • Presentación de alternativas",
    icon: "💡",
    color: "#634e99",
    bgPattern:
      "radial-gradient(circle at 80% 20%, #634e9920 0%, transparent 50%)",
    details: [
      "Brainstorming creativo",
      "Desarrollo de conceptos únicos",
      "Múltiples propuestas visuales",
    ],
  },
  {
    step: "03",
    title: "PRODUCIMOS",
    subtitle: "Excelencia en cada detalle",
    description:
      "Ejecución profesional • Control de calidad • Supervisión constante",
    icon: "⚙️",
    color: "#e01580",
    bgPattern:
      "radial-gradient(circle at 20% 20%, #e0158020 0%, transparent 50%)",
    details: [
      "Producción de alta calidad",
      "Supervisión en cada etapa",
      "Estándares profesionales",
    ],
  },
  {
    step: "04",
    title: "ENTREGAMOS",
    subtitle: "Resultados que superan expectativas",
    description:
      "Cumplimiento de tiempos • Instalación/distribución • Seguimiento post-entrega",
    icon: "🚀",
    color: "#33bce7",
    bgPattern:
      "radial-gradient(circle at 80% 80%, #33bce720 0%, transparent 50%)",
    details: [
      "Entrega puntual garantizada",
      "Instalación profesional",
      "Soporte post-entrega",
    ],
  },
];

export default function NuestroProceso() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Mostrar todas las tarjetas con animación escalonada
    procesoData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 300);
    });
  }, []);

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto relative z-10">
        {/* Título Principal */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              NUESTRO PROCESO
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Un método probado que garantiza resultados excepcionales en cada proyecto
          </p>
          <div className="w-16 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-[#33bce7] to-[#e01580] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Grid de Procesos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {procesoData.map((item, index) => (
            <div
              key={index}
              className={`group relative p-6 sm:p-8 md:p-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[${item.color}]/50 transition-all duration-500 hover:scale-105 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Fondo con patrón */}
              <div
                className="absolute inset-0 rounded-2xl opacity-30"
                style={{ background: item.bgPattern }}
              ></div>

              {/* Contenido */}
              <div className="relative z-10">
                {/* Header con step y título */}
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-black"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                      border: `2px solid ${item.color}40`,
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Icono grande */}
                <div className="text-4xl sm:text-5xl md:text-6xl mb-6 text-center">
                  {item.icon}
                </div>

                {/* Descripción */}
                <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base md:text-lg">
                  {item.description}
                </p>

                {/* Detalles */}
                <ul className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center space-x-3 text-sm sm:text-base text-gray-300"
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Línea decorativa */}
                <div
                  className="w-full h-1 rounded-full mt-6"
                  style={{ backgroundColor: item.color }}
                ></div>
              </div>

              {/* Efecto hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${item.color}10, transparent)`,
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center">
          <div className="bg-gradient-to-r from-[#33bce7]/10 to-[#e01580]/10 rounded-2xl p-8 sm:p-12 border border-white/10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para comenzar tu proyecto?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Nuestro equipo está listo para escuchar tu visión y transformarla en una experiencia memorable
            </p>
            <button className="bg-gradient-to-r from-[#33bce7] to-[#e01580] text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300">
              Iniciar Proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
