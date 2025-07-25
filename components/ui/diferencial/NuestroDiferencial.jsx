"use client";

import React from "react";
import Image from "next/image";

const diferenciales = [
  {
    title: "Creatividad estratégica",
    description: "Transformamos ideas en experiencias vivas que conectan emocionalmente con el público.",
    icon: "🎨",
    gradient: "from-[#33bce7] to-[#634e99]",
  },
  {
    title: "Producción impecable",
    description: "Ejecutamos cada proyecto con los más altos estándares de calidad y atención al detalle.",
    icon: "⚡",
    gradient: "from-[#634e99] to-[#e01580]",
  },
  {
    title: "Ejecución con cobertura nacional",
    description: "Operamos en más de 18 ciudades del país con la misma excelencia y profesionalismo.",
    icon: "🚀",
    gradient: "from-[#e01580] to-[#33bce7]",
  },
];

export default function NuestroDiferencial({ isInScrollContainer = false }) {
  if (isInScrollContainer) {
    // Versión para ScrollContainer - más compacta
    return (
      <div className="w-full px-4 py-8 sm:px-6 sm:py-12">
        <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto relative z-10">
          {/* Título Principal */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6">
              <span className="text-white">Más que agencia</span>
              <br />
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                SOMOS TU EQUIPO
              </span>
            </h2>
            <div className="w-16 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-[#33bce7] to-[#e01580] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              En Flow Inc no solo diseñamos campañas: creamos experiencias vivas que conectan emocionalmente con el público.
              <br className="hidden sm:block" />
              Somos tu equipo creativo, tu músculo operativo, tu socio estratégico.
            </p>
          </div>

          {/* Grid Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
            {/* Imagen de Equipo */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/team.png"
                    alt="Equipo Flow Inc"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33bce7]/20 to-[#e01580]/20"></div>
                </div>
                {/* Efectos decorativos */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#33bce7] to-[#e01580] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-[#634e99] to-[#33bce7] rounded-full animate-bounce"></div>
              </div>
            </div>

            {/* Tarjetas de Diferenciales */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {diferenciales.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#33bce7]/50 transition-all duration-300 hover:scale-105"
                >
                  {/* Icono */}
                  <div className="text-3xl sm:text-4xl mb-4 text-center">
                    {item.icon}
                  </div>

                  {/* Título */}
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight mb-3 text-center">
                    {item.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-center">
                    {item.description}
                  </p>

                  {/* Línea decorativa */}
                  <div
                    className={`w-12 h-1 rounded-full mx-auto mt-4 bg-gradient-to-r ${item.gradient}`}
                  ></div>

                  {/* Efecto hover */}
                  <div
                    className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${item.gradient} opacity-5`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Versión completa para uso independiente
  return (
    <section className="w-full py-16 bg-black flex flex-col items-center" style={{ minHeight: "80vh" }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Más que agencia</span>
            <br />
            <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              SOMOS TU EQUIPO
            </span>
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#33bce7] to-[#e01580] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            En Flow Inc no solo diseñamos campañas: creamos experiencias vivas que conectan emocionalmente con el público.
            <br />
            Somos tu equipo creativo, tu músculo operativo, tu socio estratégico.
          </p>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen de Equipo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/team.png"
                  alt="Equipo Flow Inc"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#33bce7]/20 to-[#e01580]/20"></div>
              </div>
              {/* Efectos decorativos */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#33bce7] to-[#e01580] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-[#634e99] to-[#33bce7] rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Tarjetas de Diferenciales */}
          <div className="grid grid-cols-1 gap-6">
            {diferenciales.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#33bce7]/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  {/* Icono */}
                  <div className="text-4xl lg:text-5xl">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    {/* Título */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight mb-3">
                      {item.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                      {item.description}
                    </p>

                    {/* Línea decorativa */}
                    <div
                      className={`w-16 h-1 rounded-full mt-4 bg-gradient-to-r ${item.gradient}`}
                    ></div>
                  </div>
                </div>

                {/* Efecto hover */}
                <div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${item.gradient} opacity-5`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 