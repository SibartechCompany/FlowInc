"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navigationItems = [
  { title: "ACTIVACIONES", href: "/activaciones" },
  { title: "EVENTOS Y EXPERIENCIAS", href: "/eventos-experiencias" },
  { title: "MERCHANDISING Y POP", href: "/merchandising-pop" },
  { title: "DOTACIONES", href: "/dotaciones" },
  { title: "CREATIVIDAD", href: "/creatividad" },
  { title: "PUBLICIDAD EXTERIOR", href: "/publicidad-exterior" },
  { title: "LOGÍSTICA Y DISTRIBUCIÓN", href: "/logistica-distribucion" },
  { title: "QUIENES SOMOS", href: "/quienes-somos" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? "bg-black/20 backdrop-blur-2xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="text-3xl font-black tracking-tight">
                <span className="text-white group-hover:text-white/80 transition-colors duration-300">
                  Flow
                </span>
                <span className="bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] bg-clip-text text-transparent">
                  Inc
                </span>
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#33bce7] to-[#e01580] group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center">
            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-xl rounded-full px-2 py-2 border border-white/10">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="relative px-4 py-2.5 text-xs font-medium text-white/70 hover:text-white transition-all duration-300 rounded-full group"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="relative z-10">{item.title}</span>
                  {hoveredItem === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#33bce7]/20 via-[#634e99]/20 to-[#e01580]/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contacto"
              className="group relative px-8 py-3 bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#33bce7]/25"
            >
              <span className="relative z-10">Contacto</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#e01580] via-[#634e99] to-[#33bce7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden relative w-10 h-10 flex flex-col justify-center items-center group"
          >
            <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-screen opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-white/10 p-6 mt-4">
            <div className="space-y-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-6 py-4 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium text-sm border border-transparent hover:border-white/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <Link
                href="/contacto"
                className="block w-full px-6 py-4 bg-gradient-to-r from-[#33bce7] via-[#634e99] to-[#e01580] text-white font-semibold rounded-xl text-center hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
