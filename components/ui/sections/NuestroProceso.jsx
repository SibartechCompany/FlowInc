"use client";

import { useState, useEffect, useRef } from "react";

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

export default function NuestroProceso({
  isInScrollContainer = false,
  scrollProgress = 0,
}) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  // Deshabilitar efectos pesados durante el zoom out para optimizar rendimiento
  const isZooming = scrollProgress >= 2.5;

  useEffect(() => {
    if (isInScrollContainer) {
      // Mostrar todas las tarjetas con animación escalonada
      procesoData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index]);
        }, index * 200);
      });
    } else {
      // Para la versión independiente, usar intersection observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.dataset.index);
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
      );

      cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => observer.disconnect();
    }
  }, [isInScrollContainer]);

  if (isInScrollContainer) {
    return (
      <div className="w-full h-screen flex items-center justify-center px-6 py-8">
        <div className="max-w-7xl mx-auto relative">
          {/* Título Principal - Más Compacto */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                CÓMO TRABAJAMOS
              </span>
              <span className="text-white"> CONTIGO</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Un proceso probado que garantiza resultados excepcionales
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#33bce7] to-[#e01580] mx-auto rounded-full mt-6"></div>
          </div>

          {/* Grid de Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {procesoData.map((proceso, index) => (
              <div
                key={index}
                className={`group relative h-80 rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10 transition-all duration-700 cursor-pointer ${
                  visibleCards.includes(index)
                    ? "opacity-100 transform translate-y-0 scale-100"
                    : "opacity-0 transform translate-y-8 scale-95"
                } ${
                  hoveredCard === index && !isZooming
                    ? "scale-105 border-white/30"
                    : "hover:scale-102 hover:border-white/20"
                }`}
                style={{
                  background: isZooming
                    ? `linear-gradient(135deg, ${proceso.color}10, ${proceso.color}03)` // Fondos más simples durante zoom
                    : `linear-gradient(135deg, ${proceso.color}15, ${proceso.color}05), ${proceso.bgPattern}`,
                  boxShadow: isZooming
                    ? `0 5px 15px -5px ${proceso.color}20` // Sombras reducidas durante zoom
                    : hoveredCard === index
                    ? `0 25px 50px -12px ${proceso.color}40`
                    : `0 10px 25px -5px ${proceso.color}20`,
                  transitionDelay: `${index * 100}ms`,
                  willChange: isZooming ? "auto" : "transform", // Optimizar will-change
                }}
                onMouseEnter={() => !isZooming && setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Contenido de la Tarjeta */}
                <div className="p-6 h-full flex flex-col justify-between relative z-10">
                  {/* Header */}
                  <div className="text-center">
                    <div
                      className="text-4xl font-black opacity-30 mb-3"
                      style={{ color: proceso.color }}
                    >
                      {proceso.step}
                    </div>

                    <div
                      className={`text-5xl mb-4 transition-transform duration-500 ${
                        hoveredCard === index ? "scale-110 rotate-12" : ""
                      }`}
                    >
                      {proceso.icon}
                    </div>

                    <h3
                      className="text-xl lg:text-2xl font-black mb-2"
                      style={{ color: proceso.color }}
                    >
                      {proceso.title}
                    </h3>

                    <h4 className="text-sm text-white font-semibold mb-4 leading-tight">
                      {proceso.subtitle}
                    </h4>
                  </div>

                  {/* Descripción */}
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-gray-300 text-sm leading-relaxed text-center mb-4">
                      {proceso.description}
                    </p>

                    {/* Detalles expandidos al hover */}
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        hoveredCard === index
                          ? "max-h-32 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="space-y-2 pt-2 border-t border-white/10">
                        {proceso.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-center text-gray-400 text-xs"
                            style={{
                              transitionDelay: `${detailIndex * 100}ms`,
                            }}
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0"
                              style={{ backgroundColor: proceso.color }}
                            />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Efectos de fondo */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    hoveredCard === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${proceso.color}08, transparent 50%, ${proceso.color}08)`,
                  }}
                />

                {/* Partículas flotantes - Solo si no está zooming */}
                {hoveredCard === index && !isZooming && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(3)].map(
                      (
                        _,
                        i // Reducir partículas de 6 a 3
                      ) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 rounded-full animate-ping"
                          style={{
                            left: `${30 + i * 20}%`,
                            top: `${30 + (i % 2) * 30}%`,
                            backgroundColor: proceso.color,
                            animationDelay: `${i * 300}ms`,
                            animationDuration: "1.5s", // Más rápido
                          }}
                        />
                      )
                    )}
                  </div>
                )}

                {/* Borde animado - Deshabilitado durante zoom */}
                {!isZooming && (
                  <div
                    className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                      hoveredCard === index ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background: `conic-gradient(from 0deg, ${proceso.color}60, transparent, ${proceso.color}60)`,
                      padding: "2px",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "subtract",
                      animation:
                        hoveredCard === index
                          ? "spin 3s linear infinite"
                          : "none",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Conexiones entre tarjetas - Ocultas durante zoom */}
          {!isZooming && (
            <div className="hidden xl:block absolute inset-0 pointer-events-none">
              {procesoData.slice(0, -1).map((_, index) => (
                <div
                  key={index}
                  className={`absolute top-1/2 transition-all duration-1000 ${
                    visibleCards.includes(index) &&
                    visibleCards.includes(index + 1)
                      ? "opacity-40 scale-100"
                      : "opacity-0 scale-50"
                  }`}
                  style={{
                    left: `${25 + index * 25}%`,
                    width: "18%",
                    height: "2px",
                    background: `linear-gradient(to right, ${
                      procesoData[index].color
                    }80, ${procesoData[index + 1].color}80)`,
                    transformOrigin: "center",
                    transitionDelay: `${(index + 1) * 300}ms`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Indicador de progreso global - Oculto durante zoom */}
          {!isZooming && (
            <div className="flex justify-center mt-12 space-x-3">
              {procesoData.map((proceso, index) => (
                <div
                  key={index}
                  className={`w-12 h-3 rounded-full transition-all duration-500 ${
                    visibleCards.includes(index)
                      ? "scale-100"
                      : "scale-75 opacity-50"
                  } ${hoveredCard === index ? "scale-125" : ""}`}
                  style={{
                    background: visibleCards.includes(index)
                      ? `linear-gradient(to right, ${proceso.color}80, ${proceso.color}40)`
                      : "#ffffff20",
                    transitionDelay: `${index * 150}ms`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Versión independiente más elaborada
  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-16 px-6 relative bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Título Principal */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              CÓMO TRABAJAMOS
            </span>
            <span className="text-white"> CONTIGO</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Un proceso probado que garantiza resultados excepcionales
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[#33bce7] to-[#e01580] mx-auto rounded-full mt-8"></div>
        </div>

        {/* Grid de Proceso */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {procesoData.map((proceso, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`group relative h-96 rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10 transition-all duration-1000 cursor-pointer ${
                visibleCards.includes(index)
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-12"
              }`}
              style={{
                background: `linear-gradient(135deg, ${proceso.color}15, ${proceso.color}05), ${proceso.bgPattern}`,
                transitionDelay: `${index * 200}ms`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Contenido completo para versión independiente */}
              <div className="p-8 h-full flex flex-col justify-between relative z-10">
                <div className="text-center">
                  <div
                    className="text-5xl font-black opacity-30 mb-4"
                    style={{ color: proceso.color }}
                  >
                    {proceso.step}
                  </div>

                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {proceso.icon}
                  </div>

                  <h3
                    className="text-2xl lg:text-3xl font-black mb-3"
                    style={{ color: proceso.color }}
                  >
                    {proceso.title}
                  </h3>

                  <h4 className="text-lg text-white font-semibold mb-6">
                    {proceso.subtitle}
                  </h4>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-gray-300 text-center leading-relaxed mb-6">
                    {proceso.description}
                  </p>

                  <div className="space-y-3">
                    {proceso.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center text-gray-400 text-sm"
                      >
                        <div
                          className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                          style={{ backgroundColor: proceso.color }}
                        />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Efectos hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${proceso.color}15, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
