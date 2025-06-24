"use client";

import { useState, useEffect } from "react";

const colors = ["#33bce7", "#634e99", "#e01580"];

export default function MouseTrail() {
  const [mouseTrail, setMouseTrail] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Efecto de rastro del mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const newTrail = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 6 + 3,
        opacity: 1,
      };

      setMouseTrail((prev) => {
        const updated = [...prev, newTrail];
        // Mantener solo las últimas 12 partículas
        return updated.slice(-12);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Limpiar partículas viejas
  useEffect(() => {
    const interval = setInterval(() => {
      setMouseTrail((prev) =>
        prev.filter((particle) => {
          const age = Date.now() - particle.id;
          return age < 800; // Mantener partículas por 0.8 segundos
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {mouseTrail.map((particle) => {
        const age = Date.now() - particle.id;
        const opacity = Math.max(0, 1 - age / 800);
        const scale = Math.max(0.2, 1 - age / 800);

        return (
          <div
            key={particle.id}
            className="absolute rounded-full blur-sm transition-all duration-75"
            style={{
              left: particle.x - particle.size / 2,
              top: particle.y - particle.size / 2,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: opacity * 0.5,
              transform: `scale(${scale})`,
              boxShadow: `0 0 ${particle.size * 1.5}px ${particle.color}30`,
            }}
          />
        );
      })}

      {/* Aura del cursor personalizado */}
      {mousePosition.x > 0 && (
        <div
          className="absolute pointer-events-none transition-all duration-150"
          style={{
            left: mousePosition.x - 15,
            top: mousePosition.y - 15,
            width: 30,
            height: 30,
            background:
              "radial-gradient(circle, rgba(51,188,231,0.1) 0%, rgba(99,78,153,0.1) 50%, rgba(224,21,128,0.1) 100%)",
            borderRadius: "50%",
            filter: "blur(8px)",
            animation: "pulse 2s infinite",
          }}
        />
      )}
    </div>
  );
}
