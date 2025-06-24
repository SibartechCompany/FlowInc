"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function useScrollAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [phase, setPhase] = useState("banner");
  const containerRef = useRef(null);
  const accumulatedScrollRef = useRef(0);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Referencias para touch events
  const touchStartRef = useRef({ y: 0, time: 0 });
  const touchMoveRef = useRef({ y: 0, time: 0 });
  const isTouchingRef = useRef(false);

  const handleWheel = useCallback(
    (e) => {
      // Prevenir scroll si estamos en cualquier parte de la animación (0-4)
      if (scrollProgress >= 0 && scrollProgress <= 4) {
        e.preventDefault();

        setIsAnimating(true);
        isScrollingRef.current = true;

        // Acumular el delta del scroll - BIDIRECCIONAL
        const deltaY = e.deltaY;

        // Aplicar cambio bidireccional con velocidad reducida para transiciones más suaves
        accumulatedScrollRef.current += deltaY * 0.001;

        // Limitar entre 0 y 4 - PERMITE IR EN AMBAS DIRECCIONES (4 fases)
        accumulatedScrollRef.current = Math.max(
          0,
          Math.min(4, accumulatedScrollRef.current)
        );

        setScrollProgress(accumulatedScrollRef.current);

        // Determinar en qué fase estamos
        if (accumulatedScrollRef.current <= 1) {
          setPhase("banner");
        } else if (accumulatedScrollRef.current <= 2) {
          setPhase("section");
        } else if (accumulatedScrollRef.current <= 3) {
          setPhase("proceso");
        } else {
          setPhase("cobertura");
        }

        // Limpiar timeout anterior
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // Detectar cuando parar de animar
        scrollTimeoutRef.current = setTimeout(() => {
          setIsAnimating(false);
          isScrollingRef.current = false;

          // Si llegamos al final, permitir scroll normal
          if (accumulatedScrollRef.current >= 4) {
            setTimeout(() => {
              window.scrollTo(0, window.innerHeight);
            }, 300);
          }

          // Si volvemos al inicio, resetear posición
          if (accumulatedScrollRef.current <= 0) {
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 100);
          }
        }, 150);
      }
    },
    [scrollProgress]
  );

  // Nuevo handler para touch events en móvil
  const handleTouchStart = useCallback(
    (e) => {
      if (scrollProgress >= 0 && scrollProgress <= 4) {
        isTouchingRef.current = true;
        touchStartRef.current = {
          y: e.touches[0].clientY,
          time: Date.now(),
        };
        touchMoveRef.current = {
          y: e.touches[0].clientY,
          time: Date.now(),
        };
      }
    },
    [scrollProgress]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (scrollProgress >= 0 && scrollProgress <= 4 && isTouchingRef.current) {
        e.preventDefault();

        const currentY = e.touches[0].clientY;
        const currentTime = Date.now();

        // Calcular la diferencia desde el último movimiento
        const deltaY = touchMoveRef.current.y - currentY;
        const deltaTime = currentTime - touchMoveRef.current.time;

        // Evitar divisiones por cero y movimientos muy pequeños
        if (Math.abs(deltaY) > 2 && deltaTime > 0) {
          setIsAnimating(true);
          isScrollingRef.current = true;

          // Aplicar el movimiento con sensibilidad ajustada para móvil
          const sensitivity = 0.003; // Sensibilidad específica para touch
          accumulatedScrollRef.current += deltaY * sensitivity;

          // Limitar entre 0 y 4
          accumulatedScrollRef.current = Math.max(
            0,
            Math.min(4, accumulatedScrollRef.current)
          );

          setScrollProgress(accumulatedScrollRef.current);

          // Determinar fase
          if (accumulatedScrollRef.current <= 1) {
            setPhase("banner");
          } else if (accumulatedScrollRef.current <= 2) {
            setPhase("section");
          } else if (accumulatedScrollRef.current <= 3) {
            setPhase("proceso");
          } else {
            setPhase("cobertura");
          }
        }

        // Actualizar la referencia del último movimiento
        touchMoveRef.current = {
          y: currentY,
          time: currentTime,
        };

        // Limpiar timeout anterior
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // Detectar cuando parar de animar
        scrollTimeoutRef.current = setTimeout(() => {
          setIsAnimating(false);
          isScrollingRef.current = false;

          // Si llegamos al final, permitir scroll normal
          if (accumulatedScrollRef.current >= 4) {
            setTimeout(() => {
              window.scrollTo(0, window.innerHeight);
            }, 300);
          }

          // Si volvemos al inicio, resetear posición
          if (accumulatedScrollRef.current <= 0) {
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 100);
          }
        }, 200); // Un poco más de tiempo para touch
      }
    },
    [scrollProgress]
  );

  const handleTouchEnd = useCallback(
    (e) => {
      if (scrollProgress >= 0 && scrollProgress <= 4) {
        isTouchingRef.current = false;

        // Calcular velocidad del swipe para inercia opcional
        const touchEndY = e.changedTouches[0].clientY;
        const totalDeltaY = touchStartRef.current.y - touchEndY;
        const totalTime = Date.now() - touchStartRef.current.time;

        // Si fue un swipe rápido, podemos añadir un poco de inercia
        if (totalTime < 300 && Math.abs(totalDeltaY) > 50) {
          const velocity = totalDeltaY / totalTime;
          const inertia = velocity * 0.1; // Factor de inercia

          accumulatedScrollRef.current += inertia;
          accumulatedScrollRef.current = Math.max(
            0,
            Math.min(4, accumulatedScrollRef.current)
          );

          setScrollProgress(accumulatedScrollRef.current);

          // Actualizar fase después del efecto de inercia
          if (accumulatedScrollRef.current <= 1) {
            setPhase("banner");
          } else if (accumulatedScrollRef.current <= 2) {
            setPhase("section");
          } else if (accumulatedScrollRef.current <= 3) {
            setPhase("proceso");
          } else {
            setPhase("cobertura");
          }
        }
      }
    },
    [scrollProgress]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        const direction = e.key === "ArrowDown" ? 1 : -1;

        if (scrollProgress >= 0 && scrollProgress <= 4) {
          accumulatedScrollRef.current += direction * 0.1;
          accumulatedScrollRef.current = Math.max(
            0,
            Math.min(4, accumulatedScrollRef.current)
          );
          setScrollProgress(accumulatedScrollRef.current);

          if (accumulatedScrollRef.current <= 1) {
            setPhase("banner");
          } else if (accumulatedScrollRef.current <= 2) {
            setPhase("section");
          } else if (accumulatedScrollRef.current <= 3) {
            setPhase("proceso");
          } else {
            setPhase("cobertura");
          }
        }
      }
    },
    [scrollProgress]
  );

  useEffect(() => {
    const handleScroll = () => {
      // Si estamos en scroll normal después de la animación
      if (window.scrollY > 0 && scrollProgress >= 4) {
        return;
      }

      // Reset completo si volvemos al top por scroll normal
      if (window.scrollY === 0 && scrollProgress > 0) {
        accumulatedScrollRef.current = 0;
        setScrollProgress(0);
        setPhase("banner");
      }
    };

    // Agregar listeners para desktop
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    // Agregar listeners para móvil
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      // Limpiar listeners de desktop
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);

      // Limpiar listeners de móvil
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [
    handleWheel,
    handleKeyDown,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  ]);

  // Funciones de utilidad para la fase del banner (0-1) - ZOOM BIDIRECCIONAL
  const getBannerScale = (startProgress = 0, endProgress = 1, maxScale = 4) => {
    const bannerProgress = Math.min(1, scrollProgress);
    if (bannerProgress < startProgress) return 1;
    if (bannerProgress > endProgress) return maxScale;

    const range = endProgress - startProgress;
    const progress = (bannerProgress - startProgress) / range;
    const exponentialProgress = Math.pow(progress, 1.5);
    return 1 + exponentialProgress * (maxScale - 1);
  };

  const getBannerOpacity = (startProgress = 0, endProgress = 1) => {
    const bannerProgress = Math.min(1, scrollProgress);
    if (bannerProgress < startProgress) return 1;
    if (bannerProgress > endProgress) return 0;

    const range = endProgress - startProgress;
    const progress = (bannerProgress - startProgress) / range;
    return Math.max(0, 1 - Math.pow(progress, 2));
  };

  const getBannerElementScale = (
    elementIndex = 0,
    startProgress = 0,
    endProgress = 1
  ) => {
    const bannerProgress = Math.min(1, scrollProgress);
    const offset = elementIndex * 0.1;
    const adjustedStart = Math.min(1, startProgress + offset);
    const adjustedEnd = Math.min(1, endProgress + offset);

    if (bannerProgress < adjustedStart) return 1;
    if (bannerProgress > adjustedEnd) return 5;

    const range = adjustedEnd - adjustedStart;
    const progress = (bannerProgress - adjustedStart) / range;
    const exponentialProgress = Math.pow(progress, 1.2);
    return 1 + exponentialProgress * 4;
  };

  const getBannerRotation = (
    elementIndex = 0,
    startProgress = 0,
    endProgress = 1
  ) => {
    const bannerProgress = Math.min(1, scrollProgress);
    if (bannerProgress < startProgress) return 0;
    if (bannerProgress > endProgress) return elementIndex % 2 === 0 ? 15 : -15;

    const range = endProgress - startProgress;
    const progress = (bannerProgress - startProgress) / range;
    const maxRotation = elementIndex % 2 === 0 ? 15 : -15;
    return progress * maxRotation;
  };

  // Funciones de utilidad para la fase de la sección QuienesSomos (1-2)
  const getSectionOpacity = (startProgress = 1, endProgress = 2) => {
    if (scrollProgress < startProgress) return 0;
    if (scrollProgress > endProgress) return 0;

    const range = endProgress - startProgress;
    const progress = (scrollProgress - startProgress) / range;

    if (progress <= 0.8) {
      return progress / 0.8;
    } else {
      return 1 - (progress - 0.8) / 0.2;
    }
  };

  const getSectionScale = (
    startProgress = 1,
    endProgress = 2,
    startScale = 0.8
  ) => {
    if (scrollProgress < startProgress) return startScale;
    if (scrollProgress > endProgress) return 1;

    const range = endProgress - startProgress;
    const progress = (scrollProgress - startProgress) / range;
    return startScale + progress * (1 - startScale);
  };

  const getSectionSlideX = (
    startProgress = 1,
    endProgress = 2,
    maxTranslate = 100
  ) => {
    if (scrollProgress < 1.7) return 0;
    if (scrollProgress >= 2.1) return -maxTranslate;

    const slideProgress = (scrollProgress - 1.7) / 0.4;
    return -slideProgress * maxTranslate;
  };

  // Funciones para Proceso (2-3) - ZOOM BIDIRECCIONAL como el banner
  const getProcesoOpacity = (startProgress = 2, endProgress = 3) => {
    if (scrollProgress <= 1.7) return 0;
    if (scrollProgress >= 3) return 0;

    const phaseProgress = scrollProgress - 1.7;

    if (phaseProgress <= 0.4) {
      // Fase de entrada - fade in lateral
      return phaseProgress / 0.4;
    } else if (scrollProgress >= 2.6) {
      // Fade out más temprano y suave para aliviar la carga
      const fadeProgress = (scrollProgress - 2.6) / 0.4;
      return Math.max(0, 1 - fadeProgress); // Función lineal más simple
    } else {
      return 1;
    }
  };

  const getProcesoSlideX = (
    startProgress = 2,
    endProgress = 3,
    maxTranslate = 100
  ) => {
    if (scrollProgress < 1.7) return maxTranslate;
    if (scrollProgress >= 2.1) {
      // Ya no se mueve lateralmente, solo zoom
      return 0;
    }

    const slideProgress = Math.min(1, (scrollProgress - 1.7) / 0.4);
    return maxTranslate - slideProgress * maxTranslate;
  };

  const getProcesoScale = (
    startProgress = 2,
    endProgress = 3,
    startScale = 0.9
  ) => {
    if (scrollProgress < 1.7) return 0.8;
    if (scrollProgress < 2.5) {
      // Fase de entrada y estabilidad
      const slideProgress = Math.min(1, (scrollProgress - 1.7) / 0.8);
      return 0.8 + slideProgress * 0.2;
    } else {
      // ZOOM OUT OPTIMIZADO - más lineal y menos pesado (2.5-3)
      const zoomProgress = (scrollProgress - 2.5) / 0.5;
      // Reducir el factor de escala máximo y usar función más simple
      const smoothProgress = zoomProgress * zoomProgress; // x² en lugar de Math.pow
      return 1 + smoothProgress * 1.8; // Máximo 2.8x en lugar de 4x
    }
  };

  // Eliminar movimiento hacia arriba - ahora solo zoom
  const getProcesoTranslateY = () => {
    return 0; // Sin movimiento vertical
  };

  // Funciones para Cobertura (3-4) - Fade in como QuienesSomos después del banner
  const getCoberturaOpacity = () => {
    if (scrollProgress <= 2.8) return 0;
    if (scrollProgress >= 4) return 1;

    const phaseProgress = scrollProgress - 2.8;

    if (phaseProgress <= 0.4) {
      // Fade in suave como QuienesSomos
      return phaseProgress / 0.4;
    } else {
      return 1;
    }
  };

  const getCoberturaScale = () => {
    if (scrollProgress <= 2.8) return 0.8;
    if (scrollProgress >= 4) return 1;

    const phaseProgress = scrollProgress - 2.8;

    if (phaseProgress <= 0.4) {
      // Escala desde 0.8 a 1 como QuienesSomos
      return 0.8 + (phaseProgress / 0.4) * 0.2;
    } else {
      return 1;
    }
  };

  const getCoberturaTranslateY = () => {
    // Sin movimiento vertical - aparece en su lugar como QuienesSomos
    return 0;
  };

  const getScrollDirection = () => {
    return isScrollingRef.current
      ? accumulatedScrollRef.current > scrollProgress
        ? "down"
        : "up"
      : "none";
  };

  const reset = () => {
    accumulatedScrollRef.current = 0;
    setScrollProgress(0);
    setPhase("banner");
    setIsAnimating(false);
  };

  const navigateTo = (target) => {
    const targets = { banner: 0, section: 1.5, proceso: 2.5, cobertura: 3.5 };
    if (targets[target] !== undefined) {
      accumulatedScrollRef.current = targets[target];
      setScrollProgress(targets[target]);
      setPhase(target);
    }
  };

  return {
    scrollProgress,
    isAnimating,
    phase,
    containerRef,
    isTransitioning,

    // Banner functions
    getBannerScale,
    getBannerOpacity,
    getBannerElementScale,
    getBannerRotation,

    // Section functions
    getSectionOpacity,
    getSectionScale,
    getSectionSlideX,

    // Proceso functions
    getProcesoOpacity,
    getProcesoSlideX,
    getProcesoScale,
    getProcesoTranslateY,

    // Cobertura functions
    getCoberturaOpacity,
    getCoberturaScale,
    getCoberturaTranslateY,

    // Utility functions
    getScrollDirection,
    reset,
    navigateTo,

    // State flags
    isInTransition: isAnimating,
    isLateralTransition: scrollProgress >= 1.7 && scrollProgress <= 2.4,
    isBannerComplete: scrollProgress >= 1,
    isSectionComplete: scrollProgress >= 2,
    isProcesoComplete: scrollProgress >= 3,
  };
}
