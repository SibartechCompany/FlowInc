"use client";

import PercentageIcon from "@/public/assets/icons/PercentageIcon.jsx";
import PersonsIcon from "@/public/assets/icons/PersonsIcon.jsx";
import ArrowsIcon from "@/public/assets/icons/ArrowsIcon.jsx";
import React, { useEffect, useRef } from "react";

const logros = [
  {
    iconType: "persons",
    label: "+500,000 clientes impactados",
    value: 500000,
    suffix: "+",
  },
  {
    iconType: "arrows",
    label: "+7 años de experiencia",
    value: 7,
    suffix: "+",
  },
  {
    iconType: "percentage",
    label: "+100 marcas acompañadas",
    value: 100,
    suffix: "+",
  },
  {
    iconType: "persons",
    label: "Presencia en más de 18 ciudades",
    value: 18,
    suffix: "+",
  },
];

function useCountUp(end, duration = 1500) {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
  }, [end]);
  return count;
}

function LogroItem({ iconType, label, value, suffix }) {
  const count = useCountUp(value);
  
  const renderIcon = () => {
    const iconClass = "w-10 h-10 text-[#33bce7]";
    switch(iconType) {
      case "persons":
        return <PersonsIcon className={iconClass} />;
      case "arrows":
        return <ArrowsIcon className={iconClass} />;
      case "percentage":
        return <PercentageIcon className={iconClass} />;
      default:
        return <PersonsIcon className={iconClass} />;
    }
  };

  return (
    <div className="flex flex-col items-center glass-effect p-6 rounded-xl hover-lift transition-all duration-300">
      <div className="mb-4">{renderIcon()}</div>
      <div className="text-3xl font-bold gradient-text">
        {count}
        {suffix}
      </div>
      <div className="text-center mt-2 text-lg font-medium">
        {label}
      </div>
    </div>
  );
}

export default function ResumenLogros({ isInScrollContainer = false }) {
  if (isInScrollContainer) {
    // Versión para ScrollContainer - más compacta
    return (
      <div className="w-full px-4 py-8 sm:px-6 sm:py-12">
        <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                RESULTADOS QUE HABLAN POR NOSOTROS
              </span>
            </h2>
            <div className="w-16 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-[#33bce7] to-[#e01580] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {logros.map((logro, idx) => (
              <LogroItem key={idx} {...logro} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Versión completa para uso independiente
  return (
    <section className="w-full py-16 bg-black flex flex-col items-center" style={{ minHeight: "60vh" }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 gradient-text text-center">
        Resultados que hablan por nosotros
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
        {logros.map((logro, idx) => (
          <LogroItem key={idx} {...logro} />
        ))}
      </div>
    </section>
  );
} 