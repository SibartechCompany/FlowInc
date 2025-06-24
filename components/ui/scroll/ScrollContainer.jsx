"use client";

import { useScrollAnimation } from "./";
import TypewriterBanner from "../hero/TypewriterBanner";
import { QuienesSomos, NuestroProceso, Cobertura } from "../sections";

export default function ScrollContainer() {
  const {
    scrollProgress,
    phase,
    isAnimating,
    containerRef,
    getBannerScale,
    getBannerOpacity,
    getBannerElementScale,
    getBannerRotation,
    getSectionOpacity,
    getSectionScale,
    getSectionSlideX,
    getProcesoOpacity,
    getProcesoSlideX,
    getProcesoScale,
    getProcesoTranslateY,
    isInTransition,
    isLateralTransition,
    isBannerComplete,
    getCoberturaOpacity,
    getCoberturaScale,
    getCoberturaTranslateY,
  } = useScrollAnimation();

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Banner - Fase 1 (0-1) - ZOOM BIDIRECCIONAL */}
      <div
        className="absolute inset-0 z-10"
        style={{
          opacity: getBannerOpacity(0, 1),
          transform: `scale(${getBannerScale(0, 1, 4)})`,
          pointerEvents: phase === "banner" ? "auto" : "none",
          transformOrigin: "center center",
        }}
      >
        <TypewriterBanner
          isInScrollContainer={true}
          getBannerElementScale={getBannerElementScale}
          getBannerRotation={getBannerRotation}
          scrollProgress={scrollProgress}
        />
      </div>

      {/* Sección QuienesSomos - Fase 2 (1-2) - FADE IN/OUT + SLIDE LATERAL AL FINAL */}
      <div
        className="absolute inset-0 z-8"
        style={{
          opacity: getSectionOpacity(1, 2),
          transform: `
            translateX(${getSectionSlideX(1, 2, 100)}%) 
            scale(${getSectionScale(1, 2, 0.9)})
          `,
          pointerEvents: phase === "section" ? "auto" : "none",
        }}
      >
        <div className="h-screen flex items-center justify-center">
          <QuienesSomos isInScrollContainer={true} />
        </div>
      </div>

      {/* Sección NuestroProceso - Fase 3 (2-3) - SLIDE + ZOOM OUT optimizado */}
      <div
        className="absolute inset-0 z-6"
        style={{
          opacity: getProcesoOpacity(2, 3),
          transform: `translate3d(${getProcesoSlideX(
            2,
            3,
            100
          )}%, ${getProcesoTranslateY()}px, 0) scale3d(${getProcesoScale(
            2,
            3,
            0.9
          )}, ${getProcesoScale(2, 3, 0.9)}, 1)`,
          pointerEvents: phase === "proceso" ? "auto" : "none",
          transformOrigin: "center center",
          willChange:
            phase === "proceso" || scrollProgress >= 2.5
              ? "transform, opacity"
              : "auto",
          backfaceVisibility: "hidden",
        }}
      >
        <div className="h-screen flex items-center justify-center">
          <NuestroProceso
            isInScrollContainer={true}
            scrollProgress={scrollProgress}
          />
        </div>
      </div>

      {/* Cobertura - Fase 3-4 (Grow effect) */}
      <div
        className="absolute inset-0 z-4"
        style={{
          opacity: getCoberturaOpacity(),
          transform: `scale(${getCoberturaScale()}) translateY(${getCoberturaTranslateY()}px)`,
          pointerEvents: getCoberturaOpacity() > 0 ? "auto" : "none",
        }}
      >
        <div className="h-screen flex items-center justify-center">
          <Cobertura isInScrollContainer={true} />
        </div>
      </div>

      {/* Efecto de partículas que reaccionan al zoom bidireccional */}
      {phase === "banner" && (
        <div className="absolute inset-0 pointer-events-none z-15">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + (i % 4) * 15}%`,
                transform: `scale(${
                  1 + scrollProgress * (2 + i * 0.3)
                }) rotate(${getBannerRotation(i, 0, 1)}deg)`,
                opacity: getBannerOpacity(0, 0.8),
                animationDelay: `${i * 150}ms`,
              }}
            />
          ))}
        </div>
      )}

      {/* Partículas para la transición lateral - efectos de "deslizamiento" */}
      {isLateralTransition && (
        <div className="absolute inset-0 pointer-events-none z-15">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-[#634e99] to-[#e01580] rounded-full"
              style={{
                left: `${10 + i * 8}%`,
                top: `${30 + (i % 4) * 15}%`,
                transform: `translateX(${
                  (scrollProgress - 1.8) * 300
                }px) scale(${1 + (scrollProgress - 1.8) * 2})`,
                opacity:
                  (scrollProgress - 1.8) * 5 * (2.2 - scrollProgress) * 5,
                animationDelay: `${i * 50}ms`,
                animation: "pulse 1s infinite",
              }}
            />
          ))}
        </div>
      )}

      {/* Partículas para la sección proceso - efecto slide desde derecha */}
      {phase === "proceso" && !isLateralTransition && (
        <div className="absolute inset-0 pointer-events-none z-15">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-br from-[#33bce7] to-[#e01580] rounded-full"
              style={{
                right: `${20 + i * 10}%`,
                top: `${20 + (i % 3) * 30}%`,
                transform: `translateX(${getProcesoSlideX(
                  2,
                  3,
                  50
                )}px) scale(${getProcesoScale(2, 3, 0.5)})`,
                opacity: getProcesoOpacity(2, 3) * 0.7,
                animationDelay: `${i * 200}ms`,
                animation: "pulse 2s infinite",
              }}
            />
          ))}
        </div>
      )}

      {/* Partículas para la sección cobertura - efecto grow/shrink */}
      {phase === "cobertura" && (
        <div className="absolute inset-0 pointer-events-none z-15">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-br from-[#10B981] to-[#3B82F6] rounded-full"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${15 + Math.floor(i / 4) * 25}%`,
                transform: `scale(${
                  getCoberturaScale() * (0.5 + i * 0.1)
                }) translateY(${getCoberturaTranslateY() * (1 + i * 0.1)}px)`,
                opacity: getCoberturaOpacity() * 0.8,
                animationDelay: `${i * 100}ms`,
                animation: "ping 3s infinite",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
