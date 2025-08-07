"use client";

import { useRef, useEffect, useState } from "react";
import { useScrollAnimation } from "./ScrollAnimationProvider";

export default function AnimatedSection({ 
  children, 
  sectionId, 
  className = "",
  animationType = "fade-up", // fade-up, fade-left, fade-right, scale
  delay = 0 
}) {
  const sectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const { registerSection, isSectionVisible, isClient } = useScrollAnimation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (sectionRef.current && isMounted && isClient) {
      registerSection(sectionId, sectionRef.current);
    }
  }, [sectionId, registerSection, isMounted, isClient]);

  const isVisible = isSectionVisible(sectionId);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";
    
    // Durante SSR o antes de montar, mostrar sin animación
    if (!isMounted || !isClient) {
      return `${baseClasses} opacity-100 translate-y-0`;
    }
    
    switch (animationType) {
      case "fade-up":
        return `${baseClasses} ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-12"
        }`;
      case "fade-left":
        return `${baseClasses} ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 -translate-x-12"
        }`;
      case "fade-right":
        return `${baseClasses} ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-12"
        }`;
      case "scale":
        return `${baseClasses} ${
          isVisible 
            ? "opacity-100 scale-100" 
            : "opacity-0 scale-95"
        }`;
      default:
        return `${baseClasses} ${
          isVisible 
            ? "opacity-100" 
            : "opacity-0"
        }`;
    }
  };

  return (
    <div
      ref={sectionRef}
      data-section-id={sectionId}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
