"use client";

import { useState, useEffect, useRef } from "react";

export function useScrollAnimation() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.dataset.sectionId;
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, sectionId]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const registerSection = (sectionId, ref) => {
    sectionRefs.current[sectionId] = ref;
  };

  const isSectionVisible = (sectionId) => visibleSections.has(sectionId);

  return {
    registerSection,
    isSectionVisible,
  };
}
