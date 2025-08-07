"use client";

import { AnimatedSection } from "./AnimatedSection";

export default function AnimationExamples() {
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-16">
          <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
            TIPOS DE ANIMACIONES
          </span>
        </h2>

        {/* Fade Up Animation */}
        <AnimatedSection 
          sectionId="fade-up-example" 
          className="mb-32"
          animationType="fade-up"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Fade Up</h3>
            <p className="text-gray-300">
              La sección aparece deslizándose hacia arriba con un efecto de desvanecimiento.
            </p>
          </div>
        </AnimatedSection>

        {/* Fade Left Animation */}
        <AnimatedSection 
          sectionId="fade-left-example" 
          className="mb-32"
          animationType="fade-left"
          delay={200}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Fade Left</h3>
            <p className="text-gray-300">
              La sección aparece deslizándose desde la izquierda con un efecto de desvanecimiento.
            </p>
          </div>
        </AnimatedSection>

        {/* Fade Right Animation */}
        <AnimatedSection 
          sectionId="fade-right-example" 
          className="mb-32"
          animationType="fade-right"
          delay={400}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Fade Right</h3>
            <p className="text-gray-300">
              La sección aparece deslizándose desde la derecha con un efecto de desvanecimiento.
            </p>
          </div>
        </AnimatedSection>

        {/* Scale Animation */}
        <AnimatedSection 
          sectionId="scale-example" 
          className="mb-32"
          animationType="scale"
          delay={600}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Scale</h3>
            <p className="text-gray-300">
              La sección aparece con un efecto de escala, creciendo desde un tamaño más pequeño.
            </p>
          </div>
        </AnimatedSection>

        {/* Grid de ejemplos */}
        <AnimatedSection 
          sectionId="grid-example" 
          className="mb-32"
          animationType="fade-up"
          delay={800}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className="bg-gradient-to-br from-[#33bce7]/20 to-[#e01580]/20 rounded-xl p-6 border border-white/10 hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-2">
                  Elemento {item}
                </h4>
                <p className="text-gray-300 text-sm">
                  Cada elemento puede tener su propia animación y timing.
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
