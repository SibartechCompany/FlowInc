"use client";

import { useRef, useEffect } from "react";
import { useScrollAnimation } from "./useScrollAnimation";

export default function AnimatedSection({ 
  children, 
  sectionId, 
  className = "",
  animationType = "fade-up", // fade-up, fade-left, fade-right, scale
  delay = 0 
}) {
  const sectionRef = useRef(null);
  const { registerSection, isSectionVisible } = useScrollAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      registerSection(sectionId, sectionRef.current);
    }
  }, [sectionId, registerSection]);

  const isVisible = isSectionVisible(sectionId);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";
    
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
