"use client";

import React from "react";

export default function CTAFinal({ isInScrollContainer = false }) {
  const handleContactClick = () => {
    // Scroll a formulario de contacto o abrir modal de contacto
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si no hay sección de contacto, scroll al top para mostrar navbar
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isInScrollContainer) {
    // Versión para ScrollContainer - más compacta
    return (
      <div className="w-full px-4 py-8 sm:px-6 sm:py-12">
        <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto relative z-10">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#33bce7] via-[#634e99] to-[#e01580] p-8 text-center">
            {/* Efectos de fondo */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                ¿Listo para llevar tu marca
                <br />
                al siguiente nivel?
              </h2>
              
              <p className="text-white/90 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                👉 Hablemos de tu próximo proyecto
              </p>

              <button
                onClick={handleContactClick}
                className="inline-flex items-center px-6 py-3 bg-white text-[#634e99] font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contáctanos
                <span className="ml-2">🚀</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Versión completa para uso independiente
  return (
    <section className="w-full py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#33bce7] via-[#634e99] to-[#e01580] p-12 lg:p-16 text-center">
          {/* Efectos de fondo animados */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Partículas decorativas */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Contenido principal */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              ¿Listo para llevar tu marca
              <br />
              al siguiente nivel?
            </h2>
            
            <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              👉 Hablemos de tu próximo proyecto
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleContactClick}
                className="inline-flex items-center px-8 py-4 bg-white text-[#634e99] font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Contáctanos
                <span className="ml-2">🚀</span>
              </button>
              
              <div className="text-white/80 text-sm">
                Respuesta en menos de 24 horas
              </div>
            </div>

            {/* Información de contacto adicional */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
              <div className="flex flex-col items-center">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm">Respuesta inmediata</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-2xl mb-2">✉️</div>
                <div className="font-semibold">Email</div>
                <div className="text-sm">Cotización en 24h</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-2xl mb-2">🇨🇴</div>
                <div className="font-semibold">Cobertura Nacional</div>
                <div className="text-sm">18 ciudades</div>
              </div>
            </div>
          </div>

          {/* Elementos decorativos adicionales */}
          <div className="absolute top-8 right-8 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-8 left-8 w-3 h-3 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/4 left-8 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 right-8 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
} 