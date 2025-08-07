"use client";

import { AnimatedSection } from "@/components/ui/scroll";
import { useState, useEffect } from "react";

export default function MerchandisingYPOP() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(0);

  // Datos de productos de merchandising
  const productosData = [
    {
      id: 1,
      title: "Camisetas y Gorras",
      description: "Vestimenta que lleva tu marca",
      icon: "👕",
      color: "#33bce7",
      category: "Vestimenta"
    },
    {
      id: 2,
      title: "Termos y Mugs",
      description: "Bebidas con identidad de marca",
      icon: "☕",
      color: "#634e99",
      category: "Bebidas"
    },
    {
      id: 3,
      title: "Libretas y Kits",
      description: "Herramientas de trabajo personalizadas",
      icon: "📓",
      color: "#e01580",
      category: "Oficina"
    },
    {
      id: 4,
      title: "Displays y Stoppers",
      description: "Material POP que detiene miradas",
      icon: "🛍️",
      color: "#33bce7",
      category: "POP"
    },
    {
      id: 5,
      title: "Vinilos y Wobblers",
      description: "Gráfica que transforma espacios",
      icon: "🎨",
      color: "#634e99",
      category: "Gráfica"
    },
    {
      id: 6,
      title: "Empaques Personalizados",
      description: "Identidad visual en cada detalle",
      icon: "📦",
      color: "#e01580",
      category: "Empaque"
    }
  ];

  // Datos del POP en acción
  const popEnAccion = [
    { id: 1, title: "Góndolas Intervenidas", category: "Retail" },
    { id: 2, title: "Puntos de Venta", category: "PDV" },
    { id: 3, title: "Material Gráfico", category: "Gráfica" },
    { id: 4, title: "Branding Visual", category: "Marca" }
  ];

  // Opciones del dropdown
  const dropdownOptions = [
    { name: "Catálogo Corporativo", url: "#" },
    { name: "Catálogo Ecológico", url: "#" },
    { name: "Catálogo Premium", url: "#" }
  ];

  useEffect(() => {
    // Carrusel automático de productos
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % productosData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* 1. Sección Inicial Impactante */}
      <AnimatedSection
        sectionId="hero-merch"
        className="min-h-screen relative flex items-center justify-center overflow-hidden"
        animationType="fade-up"
      >
        {/* Fondo con productos flotantes */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Productos flotantes animados */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-3000"></div>
        </div>

        {/* Productos flotantes específicos */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 text-4xl animate-bounce">👕</div>
          <div className="absolute top-1/3 right-1/4 text-3xl animate-bounce delay-500">☕</div>
          <div className="absolute bottom-1/3 left-1/3 text-5xl animate-bounce delay-1000">📓</div>
          <div className="absolute bottom-1/4 right-1/3 text-4xl animate-bounce delay-1500">🛍️</div>
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="text-white">Merchandising que se queda </span>
            <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              en la mente
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Y en el día a día.
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
            Diseñamos artículos funcionales, estéticos y alineados con el ADN de tu marca.
          </p>

          {/* Botón Ver Merch con Dropdown */}
          <div className="relative inline-block">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-gradient-to-r from-[#33bce7] to-[#e01580] text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#33bce7]/25 flex items-center space-x-2"
            >
              <span>Ver Merch</span>
              <span className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                ⌄
              </span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl z-50">
                {dropdownOptions.map((option, index) => (
                  <a
                    key={index}
                    href={option.url}
                    className="block px-6 py-4 text-white hover:bg-white/10 transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl"
                  >
                    {option.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </AnimatedSection>

      {/* 2. Showroom Visual - Lo que producimos */}
      <AnimatedSection
        sectionId="showroom"
        className="py-24 px-4"
        animationType="fade-up"
        delay={200}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                Lo que producimos
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Artículos que van más allá del producto, se convierten en experiencias de marca
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productosData.map((producto, index) => (
              <div
                key={producto.id}
                className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#33bce7]/50 transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Fondo con patrón */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    background: `radial-gradient(circle at 30% 70%, ${producto.color}20, transparent 50%)`
                  }}
                ></div>

                {/* Contenido */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{producto.icon}</div>
                  <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                    {producto.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {producto.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {producto.description}
                  </p>
                </div>

                {/* Efecto hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${producto.color}10, transparent)`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Storytelling Editorial */}
      <AnimatedSection
        sectionId="storytelling"
        className="py-32 px-4 relative overflow-hidden"
        animationType="fade-left"
        delay={400}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#33bce7]/5 via-[#634e99]/5 to-[#e01580]/5"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Columna de texto */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed">
                  No hacemos artículos promocionales por hacerlos.
                </p>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Pensamos en cómo se integran con la identidad de marca, cómo generan recuerdo y cómo permanecen más allá del primer contacto.
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                    Cada pieza cuenta tu historia.
                  </span>
                </p>
              </div>
            </div>

            {/* Columna visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden relative">
                {/* Mockup de productos */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-1/4 left-1/4 text-6xl opacity-30 animate-pulse">👕</div>
                <div className="absolute top-1/2 right-1/4 text-5xl opacity-30 animate-pulse delay-500">☕</div>
                <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-30 animate-pulse delay-1000">📓</div>
                <div className="absolute bottom-1/4 right-1/3 text-5xl opacity-30 animate-pulse delay-1500">🛍️</div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 4. POP en Acción */}
      <AnimatedSection
        sectionId="pop-accion"
        className="py-24 px-4"
        animationType="fade-right"
        delay={600}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                POP en acción
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Material gráfico que transforma espacios y captura atención
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popEnAccion.map((item, index) => (
              <div
                key={item.id}
                className="group relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Mockup de imagen */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                    {item.id === 1 ? "🏪" : item.id === 2 ? "🛒" : item.id === 3 ? "🎨" : "🏷️"}
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

      {/* 5. CTA Final */}
      <AnimatedSection
        sectionId="cta-final"
        className="py-32 px-4"
        animationType="scale"
        delay={800}
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
                  ¿Quieres un merchandising que represente de verdad tu marca?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Creamos artículos que van más allá del producto, se convierten en experiencias memorables
              </p>
              <button className="bg-gradient-to-r from-[#33bce7] to-[#e01580] text-white px-16 py-8 rounded-full text-2xl font-bold hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-[#33bce7]/25">
                Hablemos de tu próxima idea
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Overlay para cerrar dropdown cuando se hace clic fuera */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}
    </main>
  );
} 