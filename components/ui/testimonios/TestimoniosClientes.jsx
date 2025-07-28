"use client";

import React from "react";
import SamsungIcon from "@/public/assets/iconsCompany/SamsungIcon.jsx";
import VisaIcon from "@/public/assets/iconsCompany/VisaIcon.jsx";
import HuaweiIcon from "@/public/assets/iconsCompany/HuaweiIcon.jsx";
import EbayIcon from "@/public/assets/iconsCompany/Ebay.jsx";

const testimonios = [
  {
    id: 1,
    nombre: "María González",
    cargo: "Directora de Marketing",
    empresa: "Samsung Colombia",
    testimonio: "Flow Inc transformó nuestra visión en experiencias reales. Su capacidad de ejecución en múltiples ciudades es impresionante.",
    rating: 5,
    gradiente: "from-[#33bce7] to-[#634e99]",
  },
  {
    id: 2,
    nombre: "Carlos Rodríguez",
    cargo: "Gerente de Marca",
    empresa: "Visa Latin America",
    testimonio: "Más que proveedores, son socios estratégicos. Cada proyecto supera nuestras expectativas en calidad y creatividad.",
    rating: 5,
    gradiente: "from-[#634e99] to-[#e01580]",
  },
  {
    id: 3,
    nombre: "Ana Martínez",
    cargo: "Head of Events",
    empresa: "Huawei Technologies",
    testimonio: "Su equipo entiende perfectamente nuestras necesidades. La cobertura nacional y la atención personalizada son excepcionales.",
    rating: 5,
    gradiente: "from-[#e01580] to-[#33bce7]",
  },
];

const clientes = [
  {
    iconType: "samsung",
    nombre: "Samsung",
  },
  {
    iconType: "visa", 
    nombre: "Visa",
  },
  {
    iconType: "huawei",
    nombre: "Huawei",
  },
  {
    iconType: "ebay",
    nombre: "Ebay",
  },
];

function ClienteIcon({ iconType }) {
  const iconClass = "w-20 h-20 text-white opacity-70 hover:opacity-100 transition-opacity";
  
  switch(iconType) {
    case "samsung":
      return <SamsungIcon className={iconClass} />;
    case "visa":
      return <VisaIcon className={iconClass} />;
    case "huawei":
      return <HuaweiIcon className={iconClass} />;
    case "ebay":
      return <EbayIcon className={iconClass} />;
    default:
      return <SamsungIcon className={iconClass} />;
  }
}

export default function TestimoniosClientes({ isInScrollContainer = false }) {
  if (isInScrollContainer) {
    // Versión para ScrollContainer - más compacta
    return (
      <div className="w-full px-4 py-8 sm:px-6 sm:py-12">
        <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto relative z-10">
          {/* Título Principal */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6">
              <span className="text-white">Marcas que</span>
              <br />
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                CONFÍAN EN NOSOTROS
              </span>
            </h2>
            <div className="w-16 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-[#33bce7] to-[#e01580] mx-auto rounded-full"></div>
          </div>

          {/* Logos de Clientes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 items-center justify-items-center">
            {clientes.map((cliente, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#33bce7]/50 transition-all duration-300 hover:scale-110"
              >
                <ClienteIcon iconType={cliente.iconType} />
              </div>
            ))}
          </div>

          {/* Testimonio Destacado */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#33bce7] text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-300 text-lg italic mb-4 leading-relaxed">
              &ldquo;{testimonios[0].testimonio}&rdquo;
            </p>
            <div className="text-white font-semibold">
              {testimonios[0].nombre}
            </div>
            <div className="text-[#33bce7] text-sm">
              {testimonios[0].cargo} • {testimonios[0].empresa}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Versión completa para uso independiente
  return (
    <section className="w-full py-16 bg-black" style={{ minHeight: "80vh" }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Marcas que</span>
            <br />
            <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
              CONFÍAN EN NOSOTROS
            </span>
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#33bce7] to-[#e01580] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Construimos relaciones duraderas con las marcas más reconocidas del mercado.
          </p>
        </div>

        {/* Logos de Clientes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 items-center justify-items-center">
          {clientes.map((cliente, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#33bce7]/50 transition-all duration-300 hover:scale-110"
            >
              <ClienteIcon iconType={cliente.iconType} />
            </div>
          ))}
        </div>

        {/* Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div
              key={testimonio.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-[#33bce7]/50 transition-all duration-300 hover:scale-105"
            >
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonio.rating)].map((_, i) => (
                  <span key={i} className="text-[#33bce7] text-xl">★</span>
                ))}
              </div>

              {/* Testimonio */}
              <p className="text-gray-300 text-center italic mb-6 leading-relaxed">
                &ldquo;{testimonio.testimonio}&rdquo;
              </p>

              {/* Autor */}
              <div className="text-center">
                <div className="text-white font-semibold text-lg mb-1">
                  {testimonio.nombre}
                </div>
                <div className="text-[#33bce7] text-sm">
                  {testimonio.cargo}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonio.empresa}
                </div>
              </div>

              {/* Línea decorativa */}
              <div className={`w-16 h-1 rounded-full mx-auto mt-6 bg-gradient-to-r ${testimonio.gradiente}`}></div>

              {/* Efecto hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${testimonio.gradiente} opacity-5 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Estadística de satisfacción */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 px-8 py-6">
            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#33bce7] to-[#e01580] bg-clip-text text-transparent mb-2">
              98% Satisfacción
            </div>
            <div className="text-gray-400">
              De nuestros clientes recomiendan nuestros servicios
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 