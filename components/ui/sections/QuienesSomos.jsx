"use client";

import { useState, useEffect, useRef } from "react";

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

export default function QuienesSomos({ isInScrollContainer = false }) {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Solo usar intersection observer si NO está en el scroll container
    if (!isInScrollContainer) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.dataset.index);
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
      );

      cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => observer.disconnect();
    } else {
      // Si está en scroll container, mostrar todas las cards inmediatamente
      setVisibleCards([0, 1, 2, 3]);
    }
  }, [isInScrollContainer]);

  // Si está en el ScrollContainer, usar una versión más compacta
  if (isInScrollContainer) {
    return (
      <div className="w-full px-6 py-12">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Título Principal */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="text-white">¿</span>
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                QUIÉNES SOMOS
              </span>
              <span className="text-white">?</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#33bce7] to-[#e01580] mx-auto rounded-full"></div>
          </div>

          {/* Grid de Cards Compacto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#33bce7]/50 transition-all duration-300 hover:scale-105"
              >
                {/* Header con icono y stat/year */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  {(item.year || item.stat) && (
                    <div
                      className="text-2xl md:text-3xl font-black bg-gradient-to-r bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(45deg, ${item.color}, ${item.color}80)`,
                      }}
                    >
                      {item.year || item.stat}
                    </div>
                  )}
                </div>

                {/* Título */}
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-3">
                  {item.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                  {item.description}
                </p>

                {/* Línea decorativa */}
                <div
                  className="w-16 h-1 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>

                {/* Efecto hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}10, transparent)`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Versión completa original para uso normal
  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título Principal */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">¿</span>
            <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              QUIÉNES SOMOS
            </span>
            <span className="text-white">?</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#33bce7] to-[#e01580] mx-auto rounded-full"></div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-24">
          {timelineData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`transition-all duration-1000 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-cols-2" : "lg:grid-cols-2"
                }`}
              >
                {/* Contenido */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="space-y-6">
                    {/* Stat/Year */}
                    {(item.year || item.stat) && (
                      <div className="flex items-center space-x-4">
                        <div className="text-6xl">{item.icon}</div>
                        <div
                          className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r bg-clip-text text-transparent"
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
                      <div className="text-6xl mb-4">{item.icon}</div>
                    )}

                    {/* Título */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Línea decorativa */}
                    <div
                      className="w-24 h-1 rounded-full"
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
                      className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)`,
                        border: `2px solid ${item.color}40`,
                      }}
                    >
                      {/* Contenido del círculo */}
                      <div className="text-center z-10">
                        <div className="text-6xl md:text-7xl mb-4">
                          {item.icon}
                        </div>
                        {(item.year || item.stat) && (
                          <div
                            className="text-2xl md:text-3xl font-bold"
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
                        className="absolute top-4 right-4 w-3 h-3 rounded-full animate-bounce"
                        style={{
                          backgroundColor: item.color,
                          animationDelay: "0s",
                          animationDuration: "2s",
                        }}
                      ></div>
                      <div
                        className="absolute bottom-8 left-8 w-2 h-2 rounded-full animate-bounce"
                        style={{
                          backgroundColor: item.color,
                          animationDelay: "0.5s",
                          animationDuration: "3s",
                        }}
                      ></div>
                      <div
                        className="absolute top-1/2 left-4 w-1 h-1 rounded-full animate-pulse"
                        style={{ backgroundColor: item.color }}
                      ></div>
                    </div>

                    {/* Aura externa */}
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-30 animate-pulse"
                      style={{
                        background: `radial-gradient(circle, ${item.color}30, transparent 70%)`,
                        transform: "scale(1.2)",
                      }}
                    ></div>

                    {/* Líneas de conexión decorativas */}
                    <div
                      className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg opacity-30"
                      style={{ borderColor: item.color }}
                    ></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg opacity-30"
                      style={{ borderColor: item.color }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats finales */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#33bce7] to-[#634e99] bg-clip-text text-transparent">
              500K+
            </div>
            <div className="text-gray-400 text-sm">Clientes Alcanzados</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              7+
            </div>
            <div className="text-gray-400 text-sm">Años de Experiencia</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#e01580] to-[#33bce7] bg-clip-text text-transparent">
              100+
            </div>
            <div className="text-gray-400 text-sm">Proyectos Exitosos</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#33bce7] to-[#e01580] bg-clip-text text-transparent">
              5★
            </div>
            <div className="text-gray-400 text-sm">Satisfacción Cliente</div>
          </div>
        </div>
      </div>
    </section>
  );
}
