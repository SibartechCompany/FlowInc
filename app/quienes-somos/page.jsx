"use client";

import { useScrollAnimation } from "@/components/ui/scroll";
import { Cobertura, QuienesSomos } from "@/components/ui/sections";

export default function QuienesSomosPage() {
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
    <main>
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
    </main>
  );
} 