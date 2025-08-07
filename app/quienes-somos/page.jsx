"use client";

import { AnimatedSection } from "@/components/ui/scroll";
import { QuienesSomos, Cobertura } from "@/components/ui/sections";

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <AnimatedSection 
        sectionId="hero" 
        className="min-h-screen flex items-center justify-center"
        animationType="fade-up"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8">
            <span className="text-white">¿</span>
            <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              QUIÉNES SOMOS
            </span>
            <span className="text-white">?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4">
            Somos una agencia creativa que transforma ideas en experiencias memorables
          </p>
        </div>
      </AnimatedSection>

      {/* QuienesSomos Section */}
      <AnimatedSection 
        sectionId="quienes-somos" 
        className="py-20"
        animationType="fade-up"
        delay={200}
      >
        <QuienesSomos />
      </AnimatedSection>

      {/* Cobertura Section */}
      <AnimatedSection 
        sectionId="cobertura" 
        className="py-20"
        animationType="fade-up"
        delay={400}
      >
        <Cobertura />
      </AnimatedSection>
    </main>
  );
} 