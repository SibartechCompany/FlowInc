"use client";

import { AnimatedSection } from "@/components/ui/scroll";
import { useState, useEffect } from "react";

export default function Activaciones() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // Datos de las cards de servicios
  const serviciosData = [
    {
      id: 1,
      title: "Carros Vallas Móviles",
      description: "Publicidad en movimiento que captura miradas",
      icon: "🚗",
      color: "#33bce7",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(51, 188, 231, 0.1) 0%, transparent 50%)"
    },
    {
      id: 2,
      title: "Pendones y Pasacalles",
      description: "Presencia visual que domina el espacio urbano",
      icon: "🏙️",
      color: "#634e99",
      bgPattern: "radial-gradient(circle at 80% 20%, rgba(99, 78, 153, 0.1) 0%, transparent 50%)"
    },
    {
      id: 3,
      title: "Activaciones Móviles",
      description: "Equipos en calle que generan interacción directa",
      icon: "🎯",
      color: "#e01580",
      bgPattern: "radial-gradient(circle at 40% 60%, rgba(224, 21, 128, 0.1) 0%, transparent 50%)"
    },
    {
      id: 4,
      title: "Intervenciones Urbanas",
      description: "Experiencias que transforman espacios públicos",
      icon: "🎨",
      color: "#33bce7",
      bgPattern: "radial-gradient(circle at 60% 40%, rgba(51, 188, 231, 0.1) 0%, transparent 50%)"
    },
    {
      id: 5,
      title: "Publicidad No Convencional",
      description: "Formatos creativos que rompen esquemas",
      icon: "💡",
      color: "#634e99",
      bgPattern: "radial-gradient(circle at 30% 70%, rgba(99, 78, 153, 0.1) 0%, transparent 50%)"
    },
    {
      id: 6,
      title: "Formatos Personalizados",
      description: "Soluciones únicas para cada marca",
      icon: "⚡",
      color: "#e01580",
      bgPattern: "radial-gradient(circle at 70% 30%, rgba(224, 21, 128, 0.1) 0%, transparent 50%)"
    }
  ];

  // Datos del proceso
  const procesoData = [
    {
      step: "01",
      title: "Planeación Creativa",
      description: "Estudiamos el entorno, el público y el mensaje",
      icon: "🎯",
      color: "#33bce7"
    },
    {
      step: "02", 
      title: "Diseño de la Experiencia",
      description: "Creamos ideas visuales que impactan en vivo",
      icon: "🎨",
      color: "#634e99"
    },
    {
      step: "03",
      title: "Producción y Ejecución", 
      description: "Coordinamos personal, montaje, equipos y permisos",
      icon: "⚙️",
      color: "#e01580"
    },
    {
      step: "04",
      title: "Evaluación y Resultados",
      description: "Medimos visibilidad, interacción y alcance",
      icon: "📊",
      color: "#33bce7"
    }
  ];

  // Galería de imágenes (mockups)
  const galeriaData = [
    { id: 1, title: "Activación Urbana", category: "Intervención" },
    { id: 2, title: "Carro Valla Móvil", category: "Movilidad" },
    { id: 3, title: "Pendón Corporativo", category: "Exterior" },
    { id: 4, title: "Equipo en Calle", category: "Activación" },
    { id: 5, title: "Intervención Creativa", category: "Innovación" },
    { id: 6, title: "Publicidad No Convencional", category: "Creatividad" }
  ];

  useEffect(() => {
    // Animación de typing para el hero
    setIsTyping(true);
    
    // Carrusel automático de imágenes
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galeriaData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section - Impactante */}
      <AnimatedSection
        sectionId="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        animationType="fade-up"
      >
        {/* Fondo animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Contenido del Hero */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="text-white">Activaciones que </span>
            <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              mueven marcas
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Creamos experiencias en la calle que nadie quiere ignorar.
          </p>

          <button className="bg-gradient-to-r from-[#33bce7] to-[#e01580] text-white px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#33bce7]/25">
            Ver nuestro trabajo
          </button>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </AnimatedSection>

      {/* Show Visual - Lo que hacemos */}
      <AnimatedSection
        sectionId="servicios"
        className="py-24 px-4"
        animationType="fade-up"
        delay={200}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                Lo que hacemos
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Formatos innovadores que transforman espacios públicos en experiencias memorables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviciosData.map((servicio, index) => (
              <div
                key={servicio.id}
                className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#33bce7]/50 transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{
                  background: servicio.bgPattern,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Fondo con patrón */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-30"
                  style={{ background: servicio.bgPattern }}
                ></div>

                {/* Contenido */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{servicio.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {servicio.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {servicio.description}
                  </p>
                </div>

                {/* Efecto hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${servicio.color}10, transparent)`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Bloque emocional */}
      <AnimatedSection
        sectionId="frase-poderosa"
        className="py-32 px-4 relative overflow-hidden"
        animationType="scale"
        delay={400}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#33bce7]/10 via-[#634e99]/10 to-[#e01580]/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-white">En las calles es donde </span>
            <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              una marca se vuelve inolvidable
            </span>
          </h2>
        </div>
      </AnimatedSection>

      {/* Detalle del servicio */}
      <AnimatedSection
        sectionId="proceso"
        className="py-24 px-4"
        animationType="fade-left"
        delay={600}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                ¿Cómo diseñamos una activación?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procesoData.map((paso, index) => (
              <div
                key={paso.step}
                className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#33bce7]/50 transition-all duration-500 hover:scale-105"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Número del paso */}
                <div className="text-6xl font-black mb-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  {paso.step}
                </div>

                {/* Icono */}
                <div className="text-3xl mb-4">{paso.icon}</div>

                {/* Contenido */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {paso.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {paso.description}
                </p>

                {/* Línea decorativa */}
                <div
                  className="w-full h-1 rounded-full mt-4"
                  style={{ backgroundColor: paso.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Galería de activaciones */}
      <AnimatedSection
        sectionId="galeria"
        className="py-24 px-4"
        animationType="fade-right"
        delay={800}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                Nuestro trabajo
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galeriaData.map((item, index) => (
              <div
                key={item.id}
                className="group relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Mockup de imagen */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                    📸
                  </div>
                </div>

                {/* Overlay con información */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white font-bold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Final */}
      <AnimatedSection
        sectionId="cta"
        className="py-24 px-4"
        animationType="scale"
        delay={1000}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#33bce7]/10 via-[#634e99]/10 to-[#e01580]/10 rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                ¿Listo para llevar tu marca al mundo real?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Transformamos ideas en experiencias que la gente no puede ignorar
            </p>
            <button className="bg-gradient-to-r from-[#33bce7] to-[#e01580] text-white px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#33bce7]/25">
              Hablemos de tu próxima activación
            </button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
} 