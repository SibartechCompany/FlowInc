"use client";

import { AnimatedSection } from "@/components/ui/scroll";
import TypewriterBanner from "@/components/ui/hero/TypewriterBanner";
import { 
  QuienesSomos, 
  NuestroProceso, 
} from "@/components/ui/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section - Limpio y centrado */}
      <AnimatedSection 
        sectionId="hero" 
        className="min-h-screen flex items-center justify-center px-4"
        animationType="fade-up"
      >
        <TypewriterBanner />
      </AnimatedSection>

      {/* Quienes Somos Section - Espaciado adecuado */}
      <AnimatedSection 
        sectionId="quienes-somos" 
        className="py-24 px-4"
        animationType="fade-up"
        delay={200}
      >
        <QuienesSomos />
      </AnimatedSection>

      {/* Nuestro Proceso Section - Separado claramente */}
      <AnimatedSection 
        sectionId="nuestro-proceso" 
        className="py-24 px-4"
        animationType="fade-left"
        delay={400}
      >
        <NuestroProceso />
      </AnimatedSection>

      {/* CTA Section - Call to action limpio */}
      <AnimatedSection 
        sectionId="cta" 
        className="py-24 px-4"
        animationType="scale"
        delay={200}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              ¿LISTO PARA TRANSFORMAR TU MARCA?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Únete a más de 100 empresas que ya confían en nosotros para crear experiencias memorables
          </p>
          <button className="bg-gradient-to-r from-[#33bce7] to-[#e01580] text-white px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
            Contáctanos
          </button>
        </div>
      </AnimatedSection>

      {/* Footer Section */}
   
    </main>
  );
}
