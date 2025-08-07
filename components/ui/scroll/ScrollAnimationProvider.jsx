"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";

const ScrollAnimationContext = createContext();

export function ScrollAnimationProvider({ children }) {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [isClient, setIsClient] = useState(false);
  const sectionRefs = useRef({});
  const observerRef = useRef(null);

  // Verificar que estamos en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Crear el observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.dataset.sectionId;
          if (entry.isIntersecting && sectionId) {
            setVisibleSections((prev) => new Set([...prev, sectionId]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observar elementos existentes
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref && observerRef.current) {
        observerRef.current.observe(ref);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isClient]);

  const registerSection = (sectionId, ref) => {
    if (sectionId && ref) {
      sectionRefs.current[sectionId] = ref;
      
      // Observar el elemento inmediatamente si el observer ya existe
      if (observerRef.current && isClient) {
        observerRef.current.observe(ref);
      }
    }
  };

  const isSectionVisible = (sectionId) => {
    if (!isClient) return false;
    return visibleSections.has(sectionId);
  };

  const value = {
    registerSection,
    isSectionVisible,
    isClient,
  };

  return (
    <ScrollAnimationContext.Provider value={value}>
      {children}
    </ScrollAnimationContext.Provider>
  );
}

export function useScrollAnimation() {
  const context = useContext(ScrollAnimationContext);
  if (!context) {
    throw new Error("useScrollAnimation must be used within ScrollAnimationProvider");
  }
  return context;
}
