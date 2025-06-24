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

      {/* Overlay de transición entre fases con efecto dinámico */}
      {isInTransition && (
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              phase === "banner"
                ? `radial-gradient(circle at center, transparent 0%, rgba(0,0,0,${
                    Math.abs(scrollProgress - 1) * 0.3
                  }) 70%)`
                : phase === "section"
                ? `linear-gradient(to right, transparent 0%, rgba(0,0,0,${
                    Math.abs(scrollProgress - 2) * 0.4
                  }) 100%)`
                : `linear-gradient(to left, transparent 0%, rgba(0,0,0,${
                    (scrollProgress - 2) * 0.3
                  }) 100%)`,
          }}
        />
      )}

      {/* Indicador de scroll en el centro - Banner */}
      {phase === "banner" && !isBannerComplete && (
        <>
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30">
            <div className="text-white/60 text-sm animate-pulse text-center whitespace-nowrap">
              {isAnimating
                ? scrollProgress > 0.2
                  ? "Continúa..."
                  : "Regresando..."
                : "Haz scroll para explorar"}
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30">
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center items-start pt-2 backdrop-blur-sm">
              <div
                className="w-1 h-3 bg-gradient-to-b from-[#33bce7] to-[#e01580] rounded-full animate-bounce"
                style={{
                  transform: `scale(${1 + scrollProgress * 0.5})`,
                }}
              />
            </div>
          </div>
        </>
      )}

      {/* Indicador de scroll en sección QuienesSomos */}
      {phase === "section" && (
        <>
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-30">
            <div className="text-white/60 text-sm animate-pulse text-center whitespace-nowrap">
              {isAnimating
                ? isLateralTransition
                  ? "Deslizando hacia proceso..."
                  : "Navegando..."
                : "Scroll ↑ banner • ↓ proceso"}
            </div>
          </div>

          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-30">
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center items-center backdrop-blur-sm">
              <div
                className="w-1 h-3 bg-gradient-to-r from-[#634e99] to-[#33bce7] rounded-full"
                style={{
                  animation: "pulse 1.5s infinite",
                  transform: `scale(${
                    1.5 - Math.abs(scrollProgress - 1.5) * 2
                  })`,
                }}
              />
            </div>
          </div>

          {/* Indicador adicional abajo para continuar */}
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30">
            <div className="text-white/60 text-sm animate-pulse text-center whitespace-nowrap">
              {scrollProgress > 1.5
                ? isLateralTransition
                  ? "Apareciendo proceso... →"
                  : "Descubriendo proceso..."
                : "Continúa para ver nuestro proceso"}
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30">
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center items-start pt-2 backdrop-blur-sm">
              <div
                className="w-1 h-3 bg-gradient-to-b from-[#e01580] to-[#634e99] rounded-full animate-bounce"
                style={{
                  transform: `scale(${1 + (scrollProgress - 1) * 0.8}) ${
                    isLateralTransition ? "translateX(10px)" : ""
                  }`,
                }}
              />
            </div>
          </div>
        </>
      )}

      {/* Indicador de scroll en sección Proceso */}
      {phase === "proceso" && (
        <>
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-30">
            <div className="text-white/60 text-sm animate-pulse text-center whitespace-nowrap">
              {isAnimating
                ? scrollProgress > 2.5
                  ? "Apareciendo cobertura..."
                  : "Navegando..."
                : "Scroll ↑ sección • ↓ cobertura"}
            </div>
          </div>

          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-30">
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center items-center backdrop-blur-sm">
              <div
                className="w-1 h-3 bg-gradient-to-r from-[#e01580] to-[#33bce7] rounded-full"
                style={{
                  animation: "pulse 1.5s infinite",
                  transform: `scale(${
                    1.5 - Math.abs(scrollProgress - 2.5) * 2
                  })`,
                }}
              />
            </div>
          </div>

          {/* Indicador adicional abajo para continuar a cobertura */}
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30">
            <div className="text-white/60 text-sm animate-pulse text-center whitespace-nowrap">
              {scrollProgress > 2.7
                ? "Haciendo zoom hasta desaparecer..."
                : scrollProgress > 2.5
                ? "Preparando zoom out..."
                : "Continúa para ver nuestra cobertura"}
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30">
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center items-start pt-2 backdrop-blur-sm">
              <div
                className="w-1 h-3 bg-gradient-to-b from-[#33bce7] to-[#634e99] rounded-full animate-bounce"
                style={{
                  transform: `scale(${1 + (scrollProgress - 2) * 0.8})`,
                }}
              />
            </div>
          </div>
        </>
      )}

      {/* Indicador de scroll en sección Cobertura */}
      {phase === "cobertura" && (
        <>
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-30">
            <div className="text-white/60 text-sm animate-pulse text-center whitespace-nowrap">
              {isAnimating
                ? "Explorando el territorio..."
                : "Scroll ↑ proceso • ↓ continuar"}
            </div>
          </div>

          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-30">
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center items-end pb-2 backdrop-blur-sm">
              <div
                className="w-1 h-3 bg-gradient-to-t from-[#10B981] to-[#3B82F6] rounded-full"
                style={{
                  animation: "bounce 1s infinite reverse",
                  transform: `scale(${4 - scrollProgress * 0.5})`,
                }}
              />
            </div>
          </div>
        </>
      )}

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

      {/* Indicador de navegación con teclas */}
      <div className="absolute top-8 right-8 z-50">
        <div className="text-white/40 text-xs text-right">
          <div>↑↓ Teclas de flecha</div>
          <div>🖱️ Rueda del ratón</div>
          <div className="mt-1 text-[10px]">
            {phase === "banner"
              ? "1/4 Banner"
              : phase === "section"
              ? "2/4 Quiénes Somos"
              : phase === "proceso"
              ? "3/4 Nuestro Proceso"
              : "4/4 Cobertura"}
          </div>
          {isLateralTransition && (
            <div className="mt-1 text-[10px] text-[#e01580]">
              ← Slide lateral →
            </div>
          )}
        </div>
      </div>

      {/* Efecto de transición mejorado para diferentes fases */}
      {scrollProgress > 0 && scrollProgress < 4 && (
        <div
          className="absolute inset-0 z-1 pointer-events-none"
          style={{
            background:
              phase === "banner"
                ? `linear-gradient(135deg, rgba(51, 188, 231, ${
                    scrollProgress * 0.1
                  }), rgba(224, 21, 128, ${scrollProgress * 0.05}))`
                : phase === "section"
                ? `linear-gradient(${
                    isLateralTransition ? "90deg" : "180deg"
                  }, rgba(99, 78, 153, ${
                    (scrollProgress - 1) * 0.1
                  }), rgba(51, 188, 231, ${(scrollProgress - 1) * 0.05}))`
                : phase === "proceso"
                ? `linear-gradient(270deg, rgba(224, 21, 128, ${
                    (scrollProgress - 2) * 0.1
                  }), rgba(99, 78, 153, ${(scrollProgress - 2) * 0.05}))`
                : `radial-gradient(circle at center, rgba(16, 185, 129, ${
                    (scrollProgress - 3) * 0.1
                  }), rgba(59, 130, 246, ${(scrollProgress - 3) * 0.05}))`,
          }}
        />
      )}
    </div>
  );
}
