"use client";

import { AnimatedSection } from "@/components/ui/scroll";
import { useState, useEffect } from "react";

export default function Creatividad() {
  const [currentText, setCurrentText] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Datos de servicios creativos
  const serviciosCreativos = [
    {
      id: 1,
      title: "Diseño Gráfico",
      description: "Identidad visual que conecta",
      icon: "🎨",
      color: "#33bce7",
      position: { x: 20, y: 30 }
    },
    {
      id: 2,
      title: "Piezas para Redes",
      description: "Contenido que viraliza",
      icon: "📱",
      color: "#634e99",
      position: { x: 70, y: 20 }
    },
    {
      id: 3,
      title: "Diseño POP",
      description: "Material que vende",
      icon: "🛍️",
      color: "#e01580",
      position: { x: 80, y: 60 }
    },
    {
      id: 4,
      title: "Presentaciones Impactantes",
      description: "Ideas que convencen",
      icon: "📊",
      color: "#33bce7",
      position: { x: 30, y: 70 }
    },
    {
      id: 5,
      title: "Audiovisual",
      description: "Historias en movimiento",
      icon: "🎬",
      color: "#634e99",
      position: { x: 60, y: 80 }
    },
    {
      id: 6,
      title: "Edición de Video",
      description: "Momentos que emocionan",
      icon: "🎥",
      color: "#e01580",
      position: { x: 15, y: 50 }
    },
    {
      id: 7,
      title: "Motion Graphics",
      description: "Animación que hipnotiza",
      icon: "✨",
      color: "#33bce7",
      position: { x: 75, y: 40 }
    },
    {
      id: 8,
      title: "Modelado 3D",
      description: "Realidades virtuales",
      icon: "🧊",
      color: "#634e99",
      position: { x: 45, y: 15 }
    },
    {
      id: 9,
      title: "Stands y Exhibidores",
      description: "Espacios que impactan",
      icon: "🏗️",
      color: "#e01580",
      position: { x: 85, y: 75 }
    },
    {
      id: 10,
      title: "Visualizaciones Arquitectónicas",
      description: "Futuros que se ven",
      icon: "🏢",
      color: "#33bce7",
      position: { x: 25, y: 85 }
    }
  ];

  // Datos de motion y 3D
  const motion3DData = [
    {
      id: 1,
      title: "Motion Graphics",
      description: "Animaciones que cuentan historias",
      icon: "✨",
      color: "#33bce7",
      examples: ["Logo animado", "Transiciones", "Efectos visuales"]
    },
    {
      id: 2,
      title: "3D & Modelado",
      description: "Realidades que cobran vida",
      icon: "🧊",
      color: "#e01580",
      examples: ["Productos 3D", "Entornos virtuales", "Animaciones 3D"]
    }
  ];

  // Galería de trabajos
  const galeriaTrabajos = [
    { id: 1, title: "Post Redes", category: "Social Media" },
    { id: 2, title: "Mockup Stand", category: "Exhibición" },
    { id: 3, title: "Material POP", category: "Punto de Venta" },
    { id: 4, title: "Render 3D", category: "Visualización" },
    { id: 5, title: "Motion Graphics", category: "Animación" },
    { id: 6, title: "Diseño Gráfico", category: "Identidad" }
  ];

  useEffect(() => {
    // Animación de texto secuencial
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* 1. Intro animada - Diseño 100% visual */}
      <AnimatedSection
        sectionId="intro-animada"
        className="min-h-screen relative flex items-center justify-center overflow-hidden"
        animationType="fade-up"
      >
        {/* Fondo con elementos flotantes 3D */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Elementos flotantes animados */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-3000"></div>
        </div>

        {/* Trazos animados */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M10,50 Q30,20 50,50 T90,50"
              stroke="url(#gradient)"
              strokeWidth="0.5"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M10,30 Q50,10 90,30 T10,70"
              stroke="url(#gradient2)"
              strokeWidth="0.3"
              fill="none"
              className="animate-pulse delay-1000"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#33bce7" />
                <stop offset="50%" stopColor="#634e99" />
                <stop offset="100%" stopColor="#e01580" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e01580" />
                <stop offset="50%" stopColor="#33bce7" />
                <stop offset="100%" stopColor="#634e99" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
            <span className="text-white">Ideas que </span>
            <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent animate-pulse">
              impactan
            </span>
          </h1>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 leading-tight">
            <span className="bg-gradient-to-r from-[#e01580] via-[#634e99] to-[#33bce7] bg-clip-text text-transparent">
              Diseños que se sienten
            </span>
          </h2>

          <button className="text-white/70 hover:text-white transition-colors duration-300 text-xl font-medium mt-16 animate-bounce">
            ↓ Explorar servicios creativos
          </button>
        </div>
      </AnimatedSection>

      {/* 2. Mapa creativo interactivo */}
      <AnimatedSection
        sectionId="mapa-creativo"
        className="py-32 px-4 relative overflow-hidden"
        animationType="fade-up"
        delay={200}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                Mapa Creativo
              </span>
            </h2>
          </div>

          {/* Contenedor del mapa interactivo */}
          <div className="relative h-96 md:h-[600px] bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden">
            {/* Líneas de conexión */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {serviciosCreativos.map((service, index) => {
                const nextService = serviciosCreativos[(index + 1) % serviciosCreativos.length];
                return (
                  <line
                    key={`line-${index}`}
                    x1={`${service.position.x}%`}
                    y1={`${service.position.y}%`}
                    x2={`${nextService.position.x}%`}
                    y2={`${nextService.position.y}%`}
                    stroke={service.color}
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                    opacity="0.3"
                    className="animate-pulse"
                  />
                );
              })}
            </svg>

            {/* Servicios flotantes */}
            {serviciosCreativos.map((service, index) => (
              <div
                key={service.id}
                className="absolute group cursor-pointer transition-all duration-500 hover:scale-125"
                style={{
                  left: `${service.position.x}%`,
                  top: `${service.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                  transitionDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => handleServiceClick(service)}
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-3xl transition-all duration-300 ${
                    hoveredService === service.id ? 'scale-150' : 'scale-100'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                    border: `2px solid ${service.color}40`,
                    boxShadow: hoveredService === service.id ? `0 0 30px ${service.color}40` : 'none'
                  }}
                >
                  {service.icon}
                </div>

                {/* Tooltip */}
                {hoveredService === service.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 bg-black/90 text-white text-sm rounded-lg whitespace-nowrap z-20">
                    <div className="font-bold">{service.title}</div>
                    <div className="text-gray-300 text-xs">{service.description}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Bloque tipo manifiesto - Storytelling creativo */}
      <AnimatedSection
        sectionId="manifiesto"
        className="py-32 px-4 relative overflow-hidden"
        animationType="fade-left"
        delay={400}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#33bce7]/5 via-[#634e99]/5 to-[#e01580]/5"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <p className="text-3xl md:text-5xl lg:text-6xl text-white font-light leading-relaxed">
              La creatividad no es un servicio.
            </p>
            <p className="text-3xl md:text-5xl lg:text-6xl text-white font-light leading-relaxed">
              Es una forma de ver el mundo.
            </p>
            <p className="text-2xl md:text-4xl lg:text-5xl text-gray-300 leading-relaxed">
              Aquí no hacemos cosas bonitas.
            </p>
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                Hacemos cosas que cuentan historias.
              </span>
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Experiencia visual expandida - Mural interactivo creativo */}
      <AnimatedSection
        sectionId="galeria-mural"
        className="py-24 px-4"
        animationType="fade-right"
        delay={600}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                Nuestro Trabajo
              </span>
            </h2>
          </div>

          {/* Mural interactivo - Grid asimétrico */}
          <div className="relative h-[800px] md:h-[1000px] bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden">
            {/* Elementos flotantes de fondo */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

            {/* Grid asimétrico de trabajos */}
            <div className="absolute inset-0 p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
                {/* Trabajo 1 - Grande, rotado */}
                <div className="group relative col-span-1 row-span-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden hover:scale-110 hover:rotate-3 transition-all duration-700 cursor-pointer transform rotate-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-40 group-hover:opacity-60 transition-opacity animate-bounce">📱</div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">Post Redes</h3>
                    <p className="text-gray-300 text-sm">Social Media</p>
                  </div>
                  {/* Efecto de partículas */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div className="absolute top-4 right-4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-300"></div>
                    <div className="absolute bottom-4 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-600"></div>
                  </div>
                </div>

                {/* Trabajo 2 - Pequeño, flotante */}
                <div className="group relative col-span-1 row-span-1 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl overflow-hidden hover:scale-125 hover:-rotate-2 transition-all duration-700 cursor-pointer transform -rotate-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse">🏗️</div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="text-white font-bold text-sm">Mockup Stand</h3>
                    <p className="text-gray-300 text-xs">Exhibición</p>
                  </div>
                </div>

                {/* Trabajo 3 - Mediano, diagonal */}
                <div className="group relative col-span-1 row-span-1 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-2xl overflow-hidden hover:scale-110 hover:rotate-6 transition-all duration-700 cursor-pointer transform rotate-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl opacity-40 group-hover:opacity-60 transition-opacity animate-bounce delay-500">🛍️</div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="text-white font-bold text-sm">Material POP</h3>
                    <p className="text-gray-300 text-xs">Punto de Venta</p>
                  </div>
                </div>

                {/* Trabajo 4 - Grande, centrado */}
                <div className="group relative col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl overflow-hidden hover:scale-105 hover:-rotate-1 transition-all duration-700 cursor-pointer transform -rotate-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse delay-1000">🧊</div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl">Render 3D</h3>
                    <p className="text-gray-300 text-base">Visualización</p>
                  </div>
                  {/* Líneas animadas */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M10,50 Q50,20 90,50" stroke="white" strokeWidth="0.5" fill="none" className="animate-pulse"/>
                      <path d="M10,30 Q50,10 90,30" stroke="white" strokeWidth="0.3" fill="none" className="animate-pulse delay-500"/>
                    </svg>
                  </div>
                </div>

                {/* Trabajo 5 - Pequeño, flotante alto */}
                <div className="group relative col-span-1 row-span-1 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl overflow-hidden hover:scale-125 hover:rotate-4 transition-all duration-700 cursor-pointer transform rotate-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-40 group-hover:opacity-60 transition-opacity animate-bounce delay-300">✨</div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="text-white font-bold text-sm">Motion Graphics</h3>
                    <p className="text-gray-300 text-xs">Animación</p>
                  </div>
                </div>

                {/* Trabajo 6 - Mediano, rotado */}
                <div className="group relative col-span-1 row-span-1 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl overflow-hidden hover:scale-110 hover:-rotate-3 transition-all duration-700 cursor-pointer transform -rotate-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse delay-700">🎨</div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="text-white font-bold text-sm">Diseño Gráfico</h3>
                    <p className="text-gray-300 text-xs">Identidad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Líneas de conexión animadas */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M20,30 Q50,50 80,30" stroke="url(#muralGradient)" strokeWidth="0.3" fill="none" className="animate-pulse"/>
                <path d="M30,70 Q60,40 90,70" stroke="url(#muralGradient2)" strokeWidth="0.2" fill="none" className="animate-pulse delay-1000"/>
                <path d="M10,50 Q40,20 70,50" stroke="url(#muralGradient3)" strokeWidth="0.4" fill="none" className="animate-pulse delay-2000"/>
                <defs>
                  <linearGradient id="muralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#33bce7" />
                    <stop offset="50%" stopColor="#634e99" />
                    <stop offset="100%" stopColor="#e01580" />
                  </linearGradient>
                  <linearGradient id="muralGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e01580" />
                    <stop offset="50%" stopColor="#33bce7" />
                    <stop offset="100%" stopColor="#634e99" />
                  </linearGradient>
                  <linearGradient id="muralGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#634e99" />
                    <stop offset="50%" stopColor="#e01580" />
                    <stop offset="100%" stopColor="#33bce7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Texto flotante */}
            <div className="absolute top-8 left-8 text-white/60 text-sm font-light">
              <p>Explora nuestro universo creativo</p>
            </div>
            <div className="absolute bottom-8 right-8 text-white/60 text-sm font-light">
              <p>Hover para descubrir</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 5. Motion y 3D - Sección inmersiva */}
      <AnimatedSection
        sectionId="motion-3d"
        className="py-32 px-4 relative overflow-hidden"
        animationType="scale"
        delay={800}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#33bce7]/10 via-[#634e99]/10 to-[#e01580]/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                Motion y 3D
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Hacemos que las ideas se muevan, que los productos cobren vida antes de existir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {motion3DData.map((item, index) => (
              <div
                key={item.id}
                className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-[#33bce7]/50 transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => handleServiceClick(item)}
              >
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  {item.description}
                </p>
                
                <div className="space-y-2">
                  {item.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-current"></div>
                      <span>{example}</span>
                    </div>
                  ))}
                </div>

                {/* Efecto hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}10, transparent)`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 6. CTA final estilo manifiesto */}
      <AnimatedSection
        sectionId="cta-manifiesto"
        className="py-32 px-4"
        animationType="fade-up"
        delay={1000}
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
                  ¿Y si diseñamos algo juntos?
                </span>
              </h2>
              
              <button className="bg-gradient-to-r from-[#33bce7] to-[#e01580] text-white px-16 py-8 rounded-full text-2xl font-bold hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-[#33bce7]/25">
                Explora lo que podemos crear
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Modal para servicios */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-3xl p-8 max-w-md w-full border border-white/10">
            <div className="text-center space-y-6">
              <div className="text-4xl">{selectedService.icon}</div>
              <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
              <p className="text-gray-300">{selectedService.description}</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gradient-to-r from-[#33bce7] to-[#e01580] text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 