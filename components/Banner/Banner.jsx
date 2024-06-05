"use client";
import React, { useEffect, useRef, useState } from "react";

const Banner = () => {
  const [text, setText] = useState("");
  const typingRef = useRef(null);

  useEffect(() => {
    const phrases = ["Más que agencia", "Somos Flow"];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;

    const type = () => {
      const phrase = phrases[currentPhraseIndex];
      if (currentCharIndex < phrase.length) {
        setText(phrase.slice(0, currentCharIndex + 1));
        currentCharIndex++;
        typingRef.current = setTimeout(type, 100); // Ajusta la velocidad de escritura
      } else {
        clearTimeout(typingRef.current);
        setTimeout(() => {
          currentCharIndex = 0;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          type();
        }, 2000); // Ajusta el tiempo de espera entre frases
      }
    };

    type();

    return () => clearTimeout(typingRef.current);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[90vh] bg-black text-white">
      <h1 className="text-9xl font-bold animate-wave bg-gradient-to-r from-[#E21483] via-[#634E9B] to-[#30BDE7] bg-clip-text text-transparent mb-8">
        FLOWINC
      </h1>
      <p className="text-2xl md:text-lg">{text}</p>

      <style jsx>{`
        @keyframes wave {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-wave {
          animation: wave 5s ease-in-out infinite;
          background-size: 300% 300%;
        }

        /* Estilos para pantallas medianas */
        @media screen and (max-width: 768px) {
          .text-9xl {
            font-size: 6rem; /* Ajusta el tamaño del texto para pantalla mediana */
          }
        }

        /* Estilos para pantallas pequeñas (celulares) */
        @media screen and (max-width: 480px) {
          .text-9xl {
            font-size: 4rem; /* Ajusta el tamaño del texto para celular */
          }
          .text-2xl {
            font-size: 1.5rem; /* Ajusta el tamaño del texto para celular */
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
