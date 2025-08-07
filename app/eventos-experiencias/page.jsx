"use client";

import { AnimatedSection } from "@/components/ui/scroll";
import { useState, useEffect } from "react";

export default function EventosYExperiencias() {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Datos de tipos de eventos
  const tiposEventos = [
    {
      id: 1,
      title: "Lanzamientos de Producto",
      description: "Momentos que marcan el inicio de algo grande",
      icon: "🚀",
      color: "#33bce7"
    },
    {
      id: 2,
      title: "Eventos Empresariales",
      description: "Experiencias que fortalecen la cultura organizacional",
      icon: "💼",
      color: "#634e99"
    },
    {
      id: 3,
      title: "Ferias y Activaciones Itinerantes",
      description: "Presencia que se mueve con tu audiencia",
      icon: "🎪",
      color: "#e01580"
    },
    {
      id: 4,
      title: "Montajes Temáticos",
      description: "Mundos que transportan a realidades únicas",
      icon: "🎭",
      color: "#33bce7"
    },
    {
      id: 5,
      title: "Escenografías Personalizadas",
      description: "Espacios que cuentan tu historia",
      icon: "🎨",
      color: "#634e99"
    },
    {
      id: 6,
      title: "Experiencias Inmersivas de Marca",
      description: "Realidades que sumergen en tu universo",
      icon: "🌟",
      color: "#e01580"
    }
  ];

  // Datos del proceso creativo
  const procesoCreativo = [
    {
      step: "01",
      title: "Creamos ideas",
      description: "Conceptos que emocionan y conectan",
      icon: "💡"
    },
    {
      step: "02",
      title: "Las convertimos en planos",
      description: "Diseños que materializan la visión",
      icon: "📐"
    },
    {
      step: "03",
      title: "Los planos en estructuras",
      description: "Construcción que da vida al concepto",
      icon: "🏗️"
    },
    {
      step: "04",
      title: "Y las estructuras, en emociones colectivas",
      description: "Momentos que transforman audiencias",
      icon: "❤️"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Animación de texto secuencial
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* 1. Apertura Cinemática - Pantalla Completa */}
      <AnimatedSection
        sectionId="hero-cinematic"
        className="min-h-screen relative flex items-center justify-center overflow-hidden"
        animationType="fade-up"
      >
        {/* Fondo cinemático animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Elementos flotantes que simulan luces de evento */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>

        {/* Overlay de partículas que simulan público */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
            <span className="text-white">Creamos momentos que </span>
            <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              el público no olvida
            </span>
          </h1>
        </div>

        {/* CTA discreto */}
        <div className="absolute bottom-12 right-12">
          <button className="text-white/70 hover:text-white transition-colors duration-300 text-lg font-medium">
            Explorar experiencias ↓
          </button>
        </div>
      </AnimatedSection>

      {/* 2. Evento = Emoción - Diseño Editorial */}
      <AnimatedSection
        sectionId="emocion"
        className="py-32 px-4 relative"
        animationType="fade-left"
        delay={200}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Columna de texto */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed">
                  Un evento no empieza en la tarima.
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed">
                  Empieza en la idea.
                </p>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  En el concepto que emociona, en la historia que se construye con montaje, sonido, luces, público, ritmo.
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                    En Flow Inc diseñamos eventos que cuentan historias.
                  </span>
                </p>
              </div>
            </div>

            {/* Columna visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden relative">
                {/* Mockup de escenario */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-full h-32 bg-gradient-to-r from-[#33bce7]/20 to-[#e01580]/20 rounded-2xl backdrop-blur-sm"></div>
                </div>
                {/* Luces de escenario */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-pink-500 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Galería Fluida - Collage Dinámico */}
      <AnimatedSection
        sectionId="galeria-fluida"
        className="py-24 px-4"
        animationType="fade-up"
        delay={400}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Imágenes asimétricas con zoom */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : 
                  index === 3 ? 'md:col-span-2' : 
                  index === 5 ? 'md:row-span-2' : ''
                }`}
                style={{ 
                  aspectRatio: index === 0 ? '16/9' : 
                              index === 3 ? '16/9' : 
                              index === 5 ? '4/5' : '1/1'
                }}
              >
                {/* Mockup de imagen */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-110 transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-2">
                      {index === 0 ? "Escenarios Iluminados" :
                       index === 1 ? "Interacción Pública" :
                       index === 2 ? "Ambientaciones de Marca" :
                       index === 3 ? "Ferias y Festivales" :
                       index === 4 ? "Montajes Temáticos" :
                       "Experiencias Inmersivas"}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {index === 0 ? "Momentos que iluminan" :
                       index === 1 ? "Conexiones reales" :
                       index === 2 ? "Universos de marca" :
                       index === 3 ? "Celebraciones masivas" :
                       index === 4 ? "Realidades alternativas" :
                       "Inmersión total"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Tipos de Eventos - Línea de Tiempo Horizontal */}
      <AnimatedSection
        sectionId="tipos-eventos"
        className="py-32 px-4"
        animationType="fade-right"
        delay={600}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                ¿Qué tipo de eventos hacemos?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiposEventos.map((evento, index) => (
              <div
                key={evento.id}
                className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#33bce7]/50 transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{evento.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {evento.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {evento.description}
                </p>

                {/* Efecto hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${evento.color}10, transparent)`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 5. Detrás del Evento - Storytelling */}
      <AnimatedSection
        sectionId="detras-evento"
        className="py-32 px-4 relative overflow-hidden"
        animationType="scale"
        delay={800}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#33bce7]/5 via-[#634e99]/5 to-[#e01580]/5"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-12">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                Detrás del evento
              </span>
            </h2>
          </div>

          <div className="space-y-12">
            {procesoCreativo.map((paso, index) => (
              <div
                key={paso.step}
                className="flex items-center space-x-8"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Número del paso */}
                <div className="text-6xl md:text-8xl font-black opacity-20 flex-shrink-0">
                  {paso.step}
                </div>

                {/* Contenido */}
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="text-2xl">{paso.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {paso.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {paso.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 6. CTA con Energía */}
      <AnimatedSection
        sectionId="cta-energia"
        className="py-32 px-4"
        animationType="fade-up"
        delay={1000}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#33bce7]/20 via-[#634e99]/20 to-[#e01580]/20 rounded-3xl p-16 border border-white/10 relative overflow-hidden">
            {/* Elementos flotantes de fondo */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-8">
                <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                  ¿Estás listo para que tu marca se escuche en todo el lugar?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Transformamos espacios en experiencias que resuenan en cada persona
              </p>
              <button className="bg-gradient-to-r from-[#33bce7] to-[#e01580] text-white px-16 py-8 rounded-full text-2xl font-bold hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-[#33bce7]/25">
                Diseñemos tu evento juntos
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
} 