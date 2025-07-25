"use client";

import React, { useState } from "react";
import Image from "next/image";

const casosExito = [
  {
    id: 1,
    titulo: "Activación Samsung Galaxy",
    categoria: "Activaciones",
    descripcion: "Experiencia inmersiva en centros comerciales con realidad aumentada y pruebas de producto.",
    imagen: "/images/vector_info.png", // Usamos las imágenes disponibles como placeholder
    tags: ["Tecnología", "Experiencial", "Nationwide"],
    gradiente: "from-[#33bce7] to-[#634e99]",
  },
  {
    id: 2,
    titulo: "Evento Lanzamiento Visa",
    categoria: "Eventos",
    descripcion: "Gala corporativa con más de 500 asistentes, producción completa y experiencias VIP.",
    imagen: "/images/team.png",
    tags: ["Corporativo", "Premium", "Bogotá"],
    gradiente: "from-[#634e99] to-[#e01580]",
  },
  {
    id: 3,
    titulo: "Merchandising Huawei",
    categoria: "Merchandising",
    descripcion: "Kit de productos promocionales y POP para 18 ciudades del país con diseño innovador.",
    imagen: "/images/vector_info.png",
    tags: ["Nacional", "Retail", "Innovación"],
    gradiente: "from-[#e01580] to-[#33bce7]",
  },
  {
    id: 4,
    titulo: "Campaña Exterior Ebay",
    categoria: "Publicidad Exterior",
    descripcion: "Intervención urbana creativa en principales avenidas con elementos interactivos.",
    imagen: "/images/team.png",
    tags: ["OOH", "Creativo", "Multi-ciudad"],
    gradiente: "from-[#33bce7] via-[#634e99] to-[#e01580]",
  },
];

export default function CasosExito({ isInScrollContainer = false }) {
  const [casoActivo, setCasoActivo] = useState(0);

  if (isInScrollContainer) {
    // Versión para ScrollContainer - más compacta
    return (
      <div className="w-full px-4 py-8 sm:px-6 sm:py-12">
        <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto relative z-10">
          {/* Título Principal */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                CASOS DE ÉXITO
              </span>
            </h2>
            <div className="w-16 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-[#33bce7] to-[#e01580] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Proyectos que transformaron marcas y conectaron con audiencias en todo el país.
            </p>
          </div>

          {/* Carrusel/Slider Compacto */}
          <div className="relative">
            {/* Caso Principal */}
            <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {/* Imagen */}
                <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
                  <Image
                    src={casosExito[casoActivo].imagen}
                    alt={casosExito[casoActivo].titulo}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${casosExito[casoActivo].gradiente} opacity-20`}></div>
                </div>

                {/* Contenido */}
                <div className="flex flex-col justify-center">
                  <div className="text-sm text-[#33bce7] font-semibold mb-2">
                    {casosExito[casoActivo].categoria}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {casosExito[casoActivo].titulo}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {casosExito[casoActivo].descripcion}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {casosExito[casoActivo].tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 text-xs text-white rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navegación */}
            <div className="flex justify-center space-x-2">
              {casosExito.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCasoActivo(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === casoActivo
                      ? "bg-[#33bce7] scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Versión completa para uso independiente
  return (
    <section className="w-full py-16 bg-black" style={{ minHeight: "90vh" }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              CASOS DE ÉXITO
            </span>
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#33bce7] to-[#e01580] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Proyectos que transformaron marcas y conectaron con audiencias en todo el país.
          </p>
        </div>

        {/* Grid de Casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {casosExito.map((caso, index) => (
            <div
              key={caso.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-[#33bce7]/50 transition-all duration-300 hover:scale-105"
            >
              {/* Imagen */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <Image
                  src={caso.imagen}
                  alt={caso.titulo}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${caso.gradiente} opacity-30`}></div>
                
                {/* Overlay con categoría */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                    {caso.categoria}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[#33bce7] transition-colors">
                  {caso.titulo}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {caso.descripcion}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {caso.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/10 text-xs text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Línea decorativa */}
                <div className={`w-16 h-1 rounded-full bg-gradient-to-r ${caso.gradiente}`}></div>
              </div>

              {/* Efecto hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${caso.gradiente} opacity-5 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-[#33bce7] to-[#e01580] text-white font-bold rounded-full hover:scale-105 transition-transform duration-300">
            Ver Más Proyectos
          </button>
        </div>
      </div>
    </section>
  );
} 