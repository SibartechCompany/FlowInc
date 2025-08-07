"use client";

import { AnimatedSection } from "@/components/ui/scroll";
import { useState, useEffect } from "react";

export default function Dotaciones() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Datos de categorías de dotación
  const categoriasDotacion = [
    {
      id: 1,
      title: "Camisetas Personalizadas",
      description: "Prendas que llevan tu identidad en cada hilo",
      icon: "👕",
      color: "#33bce7",
      image: "uniforme-1"
    },
    {
      id: 2,
      title: "Uniformes para Staff de Eventos",
      description: "Elegancia y funcionalidad para tu equipo",
      icon: "🎭",
      color: "#634e99",
      image: "uniforme-2"
    },
    {
      id: 3,
      title: "Chaquetas, Chalecos y Accesorios",
      description: "Completamos el look de tu marca",
      icon: "🧥",
      color: "#e01580",
      image: "uniforme-3"
    },
    {
      id: 4,
      title: "Dotación Operativa y Corporativa",
      description: "Profesionalismo que se ve y se siente",
      icon: "💼",
      color: "#33bce7",
      image: "uniforme-4"
    }
  ];

  // Datos del proceso
  const procesoData = [
    {
      step: "01",
      title: "Diseñamos",
      description: "Prendas alineadas a tu marca",
      icon: "✏️",
      color: "#33bce7"
    },
    {
      step: "02",
      title: "Personalizamos",
      description: "Colores, detalles, acabados únicos",
      icon: "🎨",
      color: "#634e99"
    },
    {
      step: "03",
      title: "Entregamos",
      description: "Volumen, tiempos y calidad asegurada",
      icon: "📦",
      color: "#e01580"
    }
  ];

  // Imágenes del carrusel
  const carruselImages = [
    { id: 1, title: "Uniforme Corporativo", category: "Ejecutivo" },
    { id: 2, title: "Staff de Eventos", category: "Operativo" },
    { id: 3, title: "Equipo Técnico", category: "Especializado" },
    { id: 4, title: "Personal de Atención", category: "Servicio" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Carrusel automático
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carruselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* 1. Inicio tipo catálogo fullscreen - Layout de dos columnas */}
      <AnimatedSection
        sectionId="hero-catalogo"
        className="min-h-screen relative flex"
        animationType="fade-up"
      >
        {/* Columna izquierda (80%) - Imagen grande */}
        <div className="w-4/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
            {/* Mockup de uniforme principal */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-96 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden">
                {/* Simulación de uniforme */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-8xl opacity-30 animate-pulse">
                  👔
                </div>
                <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-6xl opacity-20 animate-pulse delay-1000">
                  👕
                </div>
                <div className="absolute top-1/2 right-1/4 text-5xl opacity-25 animate-pulse delay-2000">
                  🧥
                </div>
              </div>
            </div>

            {/* Indicadores de carrusel */}
            <div className="absolute bottom-8 left-8 flex space-x-2">
              {carruselImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage ? 'bg-white' : 'bg-white/30'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Columna derecha (20%) - Título y descripción */}
        <div className="w-1/5 flex flex-col justify-center items-center px-8 relative">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                DOTACIONES CON IDENTIDAD
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Uniformes que representan lo que tu marca significa.
            </p>

            <button className="text-white/70 hover:text-white transition-colors duration-300 text-lg font-medium mt-8">
              Explorar tipos ↓
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* 2. Sección en columna central - Scroll secuencial */}
      <AnimatedSection
        sectionId="categorias"
        className="py-24 px-4"
        animationType="fade-up"
        delay={200}
      >
        <div className="max-w-6xl mx-auto space-y-32">
          {categoriasDotacion.map((categoria, index) => (
            <div
              key={categoria.id}
              className={`flex items-center space-x-16 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Imagen grande centrada */}
              <div className="flex-1">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden relative group">
                  {/* Mockup de uniforme */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-1/4 left-1/4 text-8xl opacity-30 group-hover:opacity-50 transition-opacity">
                    {categoria.icon}
                  </div>
                  <div className="absolute bottom-1/4 right-1/4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity delay-500">
                    👔
                  </div>
                </div>
              </div>

              {/* Contenido flotante */}
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
                  <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                    {categoria.title}
                  </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  {categoria.description}
                </p>

                {/* Línea decorativa */}
                <div
                  className="w-24 h-1 rounded-full"
                  style={{ backgroundColor: categoria.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* 3. Sección gráfica de procesos */}
      <AnimatedSection
        sectionId="procesos"
        className="py-32 px-4 relative overflow-hidden"
        animationType="fade-left"
        delay={400}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#33bce7]/5 via-[#634e99]/5 to-[#e01580]/5"></div>
        
        {/* Líneas vectoriales de conexión */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M20,50 Q50,20 80,50"
              stroke="url(#gradient)"
              strokeWidth="0.5"
              fill="none"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#33bce7" />
                <stop offset="50%" stopColor="#634e99" />
                <stop offset="100%" stopColor="#e01580" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {procesoData.map((paso, index) => (
              <div
                key={paso.step}
                className="text-center space-y-6 group"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Número del paso */}
                <div className="text-8xl md:text-9xl font-black opacity-20 group-hover:opacity-40 transition-opacity">
                  {paso.step}
                </div>

                {/* Icono */}
                <div className="text-6xl mb-4">{paso.icon}</div>

                {/* Contenido */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {paso.title}
                </h3>
                
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  {paso.description}
                </p>

                {/* Línea decorativa */}
                <div
                  className="w-16 h-1 rounded-full mx-auto"
                  style={{ backgroundColor: paso.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Sección visual de composición - Collage creativo */}
      <AnimatedSection
        sectionId="composicion"
        className="py-24 px-4"
        animationType="fade-right"
        delay={600}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                Detalles que marcan la diferencia
              </span>
            </h2>
          </div>

          <div className="relative h-96 bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden">
            {/* Elementos flotantes */}
            <div className="absolute top-1/4 left-1/4 text-4xl animate-bounce">🧵</div>
            <div className="absolute top-1/3 right-1/4 text-3xl animate-bounce delay-500">🏷️</div>
            <div className="absolute bottom-1/3 left-1/3 text-5xl animate-bounce delay-1000">👔</div>
            <div className="absolute bottom-1/4 right-1/3 text-4xl animate-bounce delay-1500">👕</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl animate-pulse">🎨</div>

            {/* Paleta de colores flotante */}
            <div className="absolute top-8 right-8 flex space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 animate-pulse"></div>
              <div className="w-6 h-6 rounded-full bg-purple-500 animate-pulse delay-300"></div>
              <div className="w-6 h-6 rounded-full bg-pink-500 animate-pulse delay-600"></div>
            </div>

            {/* Texto flotante */}
            <div className="absolute bottom-8 left-8 text-white/80 text-sm">
              <p>Costuras perfectas</p>
              <p>Etiquetas personalizadas</p>
              <p>Acabados premium</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 5. CTA final disruptivo */}
      <AnimatedSection
        sectionId="cta-disruptivo"
        className="py-32 px-4"
        animationType="scale"
        delay={800}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#33bce7]/10 via-[#634e99]/10 to-[#e01580]/10 rounded-3xl p-16 border border-white/10 relative overflow-hidden">
            {/* Elementos flotantes de fondo */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                  Tu marca no solo se ve en redes.
                </span>
              </h2>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black mb-12">
                <span className="text-white">
                  También se lleva puesta.
                </span>
              </h3>
              
              <button className="bg-gradient-to-r from-[#33bce7] to-[#e01580] text-white px-16 py-8 rounded-full text-2xl font-bold hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-[#33bce7]/25">
                Diseñemos tu dotación
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
} 