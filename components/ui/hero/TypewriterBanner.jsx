"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "../scroll";

const textSeries = [
  "ACTIVACIONES QUE\nCONECTAN",
  "EXPERIENCIAS QUE\nTRANSFORMAN",
  "CREATIVIDAD QUE\nINSPIRA",
  "RESULTADOS QUE\nIMPACTAN",
];

export default function TypewriterBanner({
  isInScrollContainer = false,
  getBannerElementScale,
  getBannerRotation,
  scrollProgress,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showingBrand, setShowingBrand] = useState(false);

  // Hook de animación de scroll
  const {
    scrollProgress: scrollProgressAnimation,
    isAnimating,
    containerRef,
    getOpacity,
    getTranslateY,
    getScale,
    isComplete,
  } = useScrollAnimation();

  useEffect(() => {
    const currentText = showingBrand ? "FLOWinc" : textSeries[currentIndex];

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            if (showingBrand) {
              // Después de borrar FLOWinc, ir al siguiente texto
              setShowingBrand(false);
              setCurrentIndex((prev) => (prev + 1) % textSeries.length);
            } else {
              // Después de borrar el texto, mostrar FLOWinc
              setShowingBrand(true);
            }
          }
        } else {
          setDisplayText(currentText.substring(0, displayText.length + 1));
          if (displayText === currentText) {
            setIsPaused(true);
          }
        }
      },
      isDeleting ? 100 : isPaused ? 3000 : 120
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, currentIndex, showingBrand]);

  // Función para hacer scroll a la siguiente sección
  const scrollToNextSection = () => {
    if (!isInScrollContainer) {
      const nextSection = document.querySelector("section");
      if (nextSection) {
        nextSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  // Convertir texto a líneas para renderizar
  const textLines = displayText.split("\n");

  // Si está en el ScrollContainer, usar estilos con zoom individual
  if (isInScrollContainer) {
    return (
      <div className="relative h-screen w-full overflow-hidden">
        {/* Contenido principal */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          {/* Texto principal con typewriter - CON ZOOM INDIVIDUAL */}
          <div
            className="text-center mb-16"
            style={{
              transform: `scale(${
                getBannerElementScale ? getBannerElementScale(0, 0, 0.8) : 1
              }) rotate(${
                getBannerRotation ? getBannerRotation(0, 0.7, 1) : 0
              }deg)`,
              transformOrigin: "center center",
            }}
          >
            <div className="min-h-[200px] md:min-h-[300px] lg:min-h-[400px] flex flex-col items-center justify-center">
              {showingBrand ? (
                // Cuando muestra FLOWinc - TODO con degradé
                <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent leading-tight">
                  {displayText}
                  <span className="inline-block w-2 h-20 md:h-28 lg:h-36 xl:h-48 bg-[#e01580] ml-4 animate-pulse"></span>
                </h1>
              ) : (
                // Cuando muestra los textos normales - multilínea
                <div className="space-y-4">
                  {textLines.map((line, index) => (
                    <h2
                      key={index}
                      className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
                    >
                      {line}
                      {index === textLines.length - 1 && (
                        <span className="inline-block w-1 h-16 md:h-20 lg:h-24 xl:h-28 bg-[#33bce7] ml-3 animate-pulse"></span>
                      )}
                    </h2>
                  ))}
                </div>
              )}
            </div>

            {/* Subtítulo elegante - CON ZOOM INDIVIDUAL */}
            <p
              className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mt-8 leading-relaxed"
              style={{
                transform: `scale(${
                  getBannerElementScale ? getBannerElementScale(1, 0.1, 0.9) : 1
                }) rotate(${
                  getBannerRotation ? getBannerRotation(1, 0.8, 1) : 0
                }deg)`,
                transformOrigin: "center center",
              }}
            >
              Más de{" "}
              <span className="text-[#33bce7] font-semibold">
                500,000 clientes
              </span>{" "}
              confían en nosotros.{" "}
              <span className="text-[#e01580] font-semibold">+7 años</span>{" "}
              creando experiencias memorables.
            </p>
          </div>

          {/* Botones de acción rediseñados - CON ZOOM INDIVIDUAL */}
          <div
            className="flex flex-col sm:flex-row gap-6 mb-20"
            style={{
              transform: `scale(${
                getBannerElementScale ? getBannerElementScale(2, 0.2, 1) : 1
              }) rotate(${
                getBannerRotation ? getBannerRotation(2, 0.6, 0.9) : 0
              }deg)`,
              transformOrigin: "center center",
            }}
          >
            <button className="group relative px-10 py-4 bg-gradient-to-r from-[#33bce7] to-[#634e99] text-white font-semibold rounded-xl text-lg overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Explorar Proyectos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#634e99] to-[#e01580] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={scrollToNextSection}
              className="group relative px-10 py-4 border-2 border-gray-600 text-white font-semibold rounded-xl text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#33bce7] hover:bg-[#33bce7]/10"
            >
              <span className="relative z-10">Conocer Más</span>
            </button>
          </div>

          {/* Servicios principales - Cards elegantes - CON ZOOM POR CARD */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                color: "#33bce7",
                emoji: "🎯",
                title: "Activaciones",
                desc: "Experiencias que conectan",
              },
              {
                color: "#634e99",
                emoji: "🎭",
                title: "Eventos",
                desc: "Momentos únicos",
              },
              {
                color: "#e01580",
                emoji: "🎨",
                title: "Creatividad",
                desc: "Ideas innovadoras",
              },
              {
                color: "#33bce7",
                emoji: "📈",
                title: "Resultados",
                desc: "Impacto medible",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#33bce7]/50 transition-all duration-300 hover:scale-105"
                style={{
                  transform: `scale(${
                    getBannerElementScale
                      ? getBannerElementScale(3 + index, 0.3 + index * 0.05, 1)
                      : 1
                  }) rotate(${
                    getBannerRotation
                      ? getBannerRotation(3 + index, 0.5 + index * 0.1, 0.8)
                      : 0
                  }deg)`,
                  transformOrigin: "center center",
                }}
              >
                <div className="text-3xl mb-3" style={{ color: item.color }}>
                  {item.emoji}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
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

        {/* Partículas flotantes para ambiente - CON ZOOM INDIVIDUAL */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            {
              top: "25%",
              left: "25%",
              color: "#33bce7",
              delay: "0s",
              duration: "3s",
            },
            {
              top: "75%",
              right: "33%",
              color: "#e01580",
              delay: "1s",
              duration: "4s",
            },
            {
              bottom: "33%",
              left: "33%",
              color: "#634e99",
              delay: "2s",
              duration: "2s",
            },
          ].map((particle, index) => (
            <div
              key={index}
              className="absolute w-1 h-1 rounded-full animate-ping"
              style={{
                ...Object.fromEntries(
                  Object.entries(particle).filter(([key]) =>
                    ["top", "left", "right", "bottom"].includes(key)
                  )
                ),
                backgroundColor: particle.color,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
                transform: `scale(${
                  getBannerElementScale
                    ? getBannerElementScale(7 + index, 0.5, 0.7)
                    : 1
                })`,
                transformOrigin: "center center",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Versión original con scroll animation integrada (para compatibilidad)
  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      style={{
        transform: `scale(${getScale(0, 1, 0.8)})`,
        opacity: getOpacity(0, 1),
      }}
    >
      {/* Contenido principal */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Texto principal con typewriter - MÁS GRANDE */}
        <div
          className="text-center mb-16"
          style={{
            transform: `translateY(${getTranslateY(0, 0.6, -150)}px)`,
            opacity: getOpacity(0, 0.6),
          }}
        >
          <div className="min-h-[200px] md:min-h-[300px] lg:min-h-[400px] flex flex-col items-center justify-center">
            {showingBrand ? (
              // Cuando muestra FLOWinc - TODO con degradé
              <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent leading-tight">
                {displayText}
                <span className="inline-block w-2 h-20 md:h-28 lg:h-36 xl:h-48 bg-[#e01580] ml-4 animate-pulse"></span>
              </h1>
            ) : (
              // Cuando muestra los textos normales - multilínea
              <div className="space-y-4">
                {textLines.map((line, index) => (
                  <h2
                    key={index}
                    className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
                  >
                    {line}
                    {index === textLines.length - 1 && (
                      <span className="inline-block w-1 h-16 md:h-20 lg:h-24 xl:h-28 bg-[#33bce7] ml-3 animate-pulse"></span>
                    )}
                  </h2>
                ))}
              </div>
            )}
          </div>

          {/* Subtítulo elegante */}
          <p
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mt-8 leading-relaxed"
            style={{
              transform: `translateY(${getTranslateY(0.1, 0.7, -100)}px)`,
              opacity: getOpacity(0.1, 0.7),
            }}
          >
            Más de{" "}
            <span className="text-[#33bce7] font-semibold">
              500,000 clientes
            </span>{" "}
            confían en nosotros.{" "}
            <span className="text-[#e01580] font-semibold">+7 años</span>{" "}
            creando experiencias memorables.
          </p>
        </div>

        {/* Botones de acción rediseñados */}
        <div
          className="flex flex-col sm:flex-row gap-6 mb-20"
          style={{
            transform: `translateY(${getTranslateY(0.2, 0.8, -80)}px)`,
            opacity: getOpacity(0.2, 0.8),
          }}
        >
          <button className="group relative px-10 py-4 bg-gradient-to-r from-[#33bce7] to-[#634e99] text-white font-semibold rounded-xl text-lg overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Explorar Proyectos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#634e99] to-[#e01580] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={scrollToNextSection}
            className="group relative px-10 py-4 border-2 border-gray-600 text-white font-semibold rounded-xl text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#33bce7] hover:bg-[#33bce7]/10"
          >
            <span className="relative z-10">Conocer Más</span>
          </button>
        </div>

        {/* Servicios principales - Cards elegantes */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          style={{
            transform: `translateY(${getTranslateY(
              0.3,
              0.9,
              -60
            )}px) scale(${getScale(0.3, 0.9, 0.8)})`,
            opacity: getOpacity(0.3, 0.9),
          }}
        >
          <div className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#33bce7]/50 transition-all duration-300 hover:scale-105">
            <div className="text-[#33bce7] text-3xl mb-3">🎯</div>
            <h3 className="text-white font-semibold mb-2">Activaciones</h3>
            <p className="text-gray-400 text-sm">Experiencias que conectan</p>
            <div className="absolute inset-0 bg-gradient-to-br from-[#33bce7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </div>

          <div className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#634e99]/50 transition-all duration-300 hover:scale-105">
            <div className="text-[#634e99] text-3xl mb-3">🎭</div>
            <h3 className="text-white font-semibold mb-2">Eventos</h3>
            <p className="text-gray-400 text-sm">Momentos únicos</p>
            <div className="absolute inset-0 bg-gradient-to-br from-[#634e99]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </div>

          <div className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#e01580]/50 transition-all duration-300 hover:scale-105">
            <div className="text-[#e01580] text-3xl mb-3">🎨</div>
            <h3 className="text-white font-semibold mb-2">Creatividad</h3>
            <p className="text-gray-400 text-sm">Ideas innovadoras</p>
            <div className="absolute inset-0 bg-gradient-to-br from-[#e01580]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </div>

          <div className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#33bce7]/50 transition-all duration-300 hover:scale-105">
            <div className="text-[#33bce7] text-3xl mb-3">📈</div>
            <h3 className="text-white font-semibold mb-2">Resultados</h3>
            <p className="text-gray-400 text-sm">Impacto medible</p>
            <div className="absolute inset-0 bg-gradient-to-br from-[#33bce7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll más elegante */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center cursor-pointer group"
        onClick={scrollToNextSection}
        style={{
          opacity: getOpacity(0, 0.5),
        }}
      >
        <div className="text-gray-400 text-sm mb-2 animate-pulse group-hover:text-white transition-colors duration-300">
          {isAnimating ? "Continúa desplazándote" : "Descubre más"}
        </div>
        <div className="w-8 h-12 border-2 border-gray-600 rounded-full flex justify-center items-start pt-2 group-hover:border-[#33bce7] transition-colors duration-300">
          <div className="w-1 h-3 bg-gradient-to-b from-[#33bce7] to-[#e01580] rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Partículas flotantes para ambiente - también se desvanecen con scroll */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: getOpacity(0.5, 1),
        }}
      >
        <div
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#33bce7] rounded-full animate-ping"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#e01580] rounded-full animate-ping"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#634e99] rounded-full animate-ping"
          style={{ animationDelay: "2s", animationDuration: "2s" }}
        ></div>
      </div>

      {/* Overlay de transición */}
      {isComplete && (
        <div
          className="absolute inset-0 bg-black/50 z-20 pointer-events-none"
          style={{
            opacity: scrollProgress > 0.8 ? (scrollProgress - 0.8) / 0.2 : 0,
          }}
        />
      )}
    </div>
  );
}
