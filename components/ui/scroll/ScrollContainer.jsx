"use client";

import { useScrollAnimation } from "./";
import TypewriterBanner from "../hero/TypewriterBanner";
import { NuestroProceso, ResumenLogros, NuestroDiferencial } from "../sections";
import { CasosExito, TestimoniosClientes, CTAFinal } from "../sections";

export default function ScrollContainer() {
  const {
    scrollProgress,
    phase,
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
    isLateralTransition,
    getCoberturaOpacity,
    getCoberturaScale,
    getCoberturaTranslateY,
    getCasosOpacity,
    getCasosSlideX,
    getCasosScale,
    getTestimoniosOpacity,
    getTestimoniosScale,
    getTestimoniosTranslateY,
    getCTAOpacity,
    getCTAScale,
    getCTAGlow,
  } = useScrollAnimation();

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Banner - Fase 1 (0-1) */}
      <div
        className="absolute inset-0 z-10"
        style={{
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

      {/* NuestroDiferencial - Fase 2 (1-2) */}
      <div
        className="absolute inset-0 z-8"
        style={{
          pointerEvents: phase === "section" ? "auto" : "none",
          transformOrigin: "center center",
        }}
      >
        <div className="h-screen flex items-center justify-center">
          <NuestroDiferencial isInScrollContainer={true} />
        </div>
      </div>

      {/* NuestroProceso - Fase 3 (2-3) */}
      <div
        className="absolute inset-0 z-6"
        style={{
         
          pointerEvents: phase === "proceso" ? "auto" : "none",
          transformOrigin: "center center",
          willChange: phase === "proceso" || scrollProgress >= 2.5 ? "transform, opacity" : "auto",
          backfaceVisibility: "hidden",
        }}
      >
        <div className="h-screen flex items-center justify-center">
          <NuestroProceso isInScrollContainer={true} scrollProgress={scrollProgress} />
        </div>
      </div>

      {/* ResumenLogros - Fase 4 (3-4) */}
      <div
        className="absolute inset-0 z-4"
        style={{
          pointerEvents: phase === "cobertura" ? "auto" : "none",
          transformOrigin: "center center",
        }}
      >
        <div className="h-screen flex items-center justify-center">
          <ResumenLogros isInScrollContainer={true} />
        </div>
      </div>

      {/* CasosExito - Fase 5 (4-5) */}
      <div
        className="absolute inset-0 z-3"
        style={{
          pointerEvents: phase === "casos" ? "auto" : "none",
          transformOrigin: "center center",
        }}
      >
        <div className="h-screen flex items-center justify-center">
          <CasosExito isInScrollContainer={true} />
        </div>
      </div>

      {/* TestimoniosClientes - Fase 6 (5-6) */}
      <div
        className="absolute inset-0 z-2"
        style={{
          pointerEvents: phase === "testimonios" ? "auto" : "none",
          transformOrigin: "center center",
        }}
      >
        <div className="h-screen flex items-center justify-center">
          <TestimoniosClientes isInScrollContainer={true} />
        </div>
      </div>

      {/* CTAFinal - Fase 7 (6-7) */}
      <div
        className="absolute inset-0 z-1"
        style={{
          pointerEvents: phase === "cta" ? "auto" : "none",
          transformOrigin: "center center",
        }}
      >
        <div className="h-screen flex items-center justify-center">
          <CTAFinal isInScrollContainer={true} />
        </div>
      </div>

      {/* Efectos de partículas */}
      {phase === "banner" && (
        <div className="absolute inset-0 pointer-events-none z-15">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + (i % 4) * 15}%`,
                transform: `scale(${1 + scrollProgress * (2 + i * 0.3)}) rotate(${getBannerRotation(i, 0, 1)}deg)`,
                opacity: getBannerOpacity(0, 0.8),
                animationDelay: `${i * 150}ms`,
              }}
            />
          ))}
        </div>
      )}

      {/* Partículas para NuestroDiferencial - Fase 2 */}
      {phase === "section" && (
        <div className="absolute inset-0 pointer-events-none z-15">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gradient-to-br from-[#33bce7] to-[#634e99] rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                top: `${20 + (i % 4) * 20}%`,
                transform: `translateX(${getSectionSlideX(1, 2, 30)}px) scale(${getSectionScale(1, 2, 0.5)})`,
                opacity: getSectionOpacity(1, 2) * 0.8,
                animationDelay: `${i * 150}ms`,
                animation: "pulse 2.5s infinite",
              }}
            />
          ))}
        </div>
      )}

      {isLateralTransition && (
        <div className="absolute inset-0 pointer-events-none z-15">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-[#634e99] to-[#e01580] rounded-full"
              style={{
                left: `${10 + i * 8}%`,
                top: `${30 + (i % 4) * 15}%`,
                transform: `translateX(${(scrollProgress - 1.8) * 300}px) scale(${1 + (scrollProgress - 1.8) * 2})`,
                opacity: (scrollProgress - 1.8) * 5 * (2.2 - scrollProgress) * 5,
                animationDelay: `${i * 50}ms`,
                animation: "pulse 1s infinite",
              }}
            />
          ))}
        </div>
      )}
      {phase === "proceso" && !isLateralTransition && (
        <div className="absolute inset-0 pointer-events-none z-15">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-br from-[#33bce7] to-[#e01580] rounded-full"
              style={{
                right: `${20 + i * 10}%`,
                top: `${20 + (i % 3) * 30}%`,
                transform: `translateX(${getProcesoSlideX(2, 3, 50)}px) scale(${getProcesoScale(2, 3, 0.5)})`,
                opacity: getProcesoOpacity(2, 3) * 0.7,
                animationDelay: `${i * 200}ms`,
                animation: "pulse 2s infinite",
              }}
            />
          ))}
        </div>
      )}

      {/* Partículas para ResumenLogros - Fase 4 */}
      {phase === "cobertura" && (
        <div className="absolute inset-0 pointer-events-none z-15">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-br from-[#33bce7] to-[#e01580] rounded-full"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${15 + Math.floor(i / 4) * 25}%`,
                transform: `scale(${getCoberturaScale() * (0.5 + i * 0.1)}) translateY(${getCoberturaTranslateY() * (1 + i * 0.1)}px)`,
                opacity: getCoberturaOpacity() * 0.8,
                animationDelay: `${i * 100}ms`,
                animation: "ping 3s infinite",
              }}
            />
          ))}
        </div>
      )}

      {/* Partículas para CasosExito - Fase 5 */}
      {phase === "casos" && (
        <div className="absolute inset-0 pointer-events-none z-15">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gradient-to-br from-[#33bce7] to-[#634e99] rounded-full"
              style={{
                right: `${15 + i * 8}%`,
                top: `${20 + (i % 5) * 15}%`,
                transform: `translateX(${getCasosSlideX() * 0.5}px) scale(${getCasosScale() * (0.8 + i * 0.1)})`,
                opacity: getCasosOpacity() * 0.7,
                animationDelay: `${i * 120}ms`,
                animation: "pulse 2.5s infinite",
              }}
            />
          ))}
        </div>
      )}

      {/* Partículas para TestimoniosClientes - Fase 6 */}
      {phase === "testimonios" && (
        <div className="absolute inset-0 pointer-events-none z-15">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-br from-[#634e99] to-[#e01580] rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                bottom: `${20 + (i % 4) * 20}%`,
                transform: `scale(${getTestimoniosScale() * (0.6 + i * 0.1)}) translateY(${getTestimoniosTranslateY() * 0.5}px)`,
                opacity: getTestimoniosOpacity() * 0.8,
                animationDelay: `${i * 150}ms`,
                animation: "ping 2s infinite",
              }}
            />
          ))}
        </div>
      )}

      {/* Partículas para CTAFinal - Fase 7 */}
      {phase === "cta" && (
        <div className="absolute inset-0 pointer-events-none z-15">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-br from-[#33bce7] via-[#634e99] to-[#e01580] rounded-full"
              style={{
                left: `${5 + (i % 5) * 20}%`,
                top: `${10 + Math.floor(i / 5) * 30}%`,
                transform: `scale(${getCTAScale() * (1 + Math.sin(i) * 0.3)})`,
                opacity: getCTAOpacity() * (0.6 + getCTAGlow() * 0.4),
                animationDelay: `${i * 80}ms`,
                animation: "ping 1.5s infinite",
                filter: `blur(${getCTAGlow() * 0.5}px)`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
