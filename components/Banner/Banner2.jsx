"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import { TypeAnimation } from "react-type-animation";
import ServicesElement from "../Atoms/ServicesElement";

const Banner2 = () => {
  const sections = [
    {
      name: "Quienes Somos",
      icon: (
        <svg
          width={40}
          height={40}
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.625 4.5A2.636 2.636 0 0 0 6 7.125 2.636 2.636 0 0 0 8.625 9.75a2.636 2.636 0 0 0 2.625-2.625A2.636 2.636 0 0 0 8.625 4.5Zm6.75 0a2.636 2.636 0 0 0-2.625 2.625 2.636 2.636 0 0 0 2.625 2.625A2.636 2.636 0 0 0 18 7.125 2.636 2.636 0 0 0 15.375 4.5ZM8.625 6c.63 0 1.125.495 1.125 1.125S9.255 8.25 8.625 8.25 7.5 7.755 7.5 7.125 7.995 6 8.625 6Zm6.75 0c.63 0 1.125.495 1.125 1.125s-.495 1.125-1.125 1.125-1.125-.495-1.125-1.125S14.745 6 15.375 6ZM5.25 9c-1.65 0-3 1.35-3 3 0 .835.357 1.588.914 2.133A3.777 3.777 0 0 0 1.5 17.25H3A2.24 2.24 0 0 1 5.25 15a2.24 2.24 0 0 1 2.25 2.25H9c0-1.29-.665-2.44-1.664-3.117A2.984 2.984 0 0 0 8.25 12c0-1.65-1.35-3-3-3ZM9 17.25a3.768 3.768 0 0 0-.75 2.25h1.5A2.24 2.24 0 0 1 12 17.25a2.24 2.24 0 0 1 2.25 2.25h1.5a3.768 3.768 0 0 0-1.664-3.117A2.984 2.984 0 0 0 15 14.25c0-1.65-1.35-3-3-3s-3 1.35-3 3c0 .835.357 1.588.914 2.133-.351.237-.66.527-.914.867Zm6 0h1.5A2.24 2.24 0 0 1 18.75 15 2.24 2.24 0 0 1 21 17.25h1.5c0-1.29-.665-2.44-1.664-3.117A2.984 2.984 0 0 0 21.75 12c0-1.65-1.35-3-3-3s-3 1.35-3 3c0 .835.357 1.588.914 2.133A3.777 3.777 0 0 0 15 17.25ZM5.25 10.5c.838 0 1.5.662 1.5 1.5s-.662 1.5-1.5 1.5-1.5-.662-1.5-1.5.662-1.5 1.5-1.5Zm13.5 0c.838 0 1.5.662 1.5 1.5s-.662 1.5-1.5 1.5-1.5-.662-1.5-1.5.662-1.5 1.5-1.5ZM12 12.75c.838 0 1.5.662 1.5 1.5s-.662 1.5-1.5 1.5-1.5-.662-1.5-1.5.662-1.5 1.5-1.5Z" />
        </svg>
      ),
      href: "#aboutus",
    },
    {
      name: "Branding y Publicidad",
      icon: (
        <svg
          width={40}
          height={40}
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m10.945 3-.234.21-8.25 8.25-.516.54.516.54 6.75 6.75.539.515.54-.516 8.25-8.25.21-.234V3h-7.805Zm.633 1.5h5.672v5.672l-7.5 7.5L4.078 12l7.5-7.5Zm7.922.75v1.5h.75v6.117l-7.125 7.078-.938-.937-1.054 1.055 1.453 1.476.539.516.516-.516 7.898-7.805.211-.234V5.25H19.5ZM15 6a.751.751 0 0 0-.75.75c0 .413.337.75.75.75s.75-.337.75-.75A.751.751 0 0 0 15 6Z" />
        </svg>
      ),
      href: "",
    },
    {
      name: "Eventos y Experiencias",
      icon: (
        <svg
          width={40}
          height={40}
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.75 3v.75h-3v16.5h16.5V3.75h-3V3h-1.5v.75h-7.5V3h-1.5Zm-1.5 2.25h1.5V6h1.5v-.75h7.5V6h1.5v-.75h1.5v1.5H5.25v-1.5Zm0 3h13.5v10.5H5.25V8.25Zm4.5 1.5v1.5h1.5v-1.5h-1.5Zm3 0v1.5h1.5v-1.5h-1.5Zm3 0v1.5h1.5v-1.5h-1.5ZM12 12v3h3v-3h-3Zm-5.25.75v1.5h1.5v-1.5h-1.5Zm3 0v1.5h1.5v-1.5h-1.5Zm6 0v1.5h1.5v-1.5h-1.5Zm-9 3v1.5h1.5v-1.5h-1.5Zm3 0v1.5h1.5v-1.5h-1.5Zm3 0v1.5h1.5v-1.5h-1.5Z" />
        </svg>
      ),
      href: "",
    },
    {
      name: "Publicidad Exterior",
      icon: (
        <svg
          width={40}
          height={40}
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m6.656 2.695-.539.516-2.883 2.906-.539.54.54.515 4.312 4.336-.492.492L12 16.945l.492-.492 4.313 4.336.539.516.539-.516 2.906-2.93.54-.515-5.087-5.086a3.511 3.511 0 0 0-.797-3.703 3.5 3.5 0 0 0-2.484-1.008c-.416 0-.826.09-1.219.234l-4.547-4.57-.539-.516Zm0 2.11 3.797 3.797-1.851 1.851-3.797-3.797 1.851-1.851Zm6.305 4.218a2.002 2.002 0 0 1 1.43 3.422l-2.18 2.157-.211.21L9.187 12l2.274-2.273.094-.118c.052-.052.108-.093.164-.14l.14-.117a2 2 0 0 1 1.102-.329ZM6.328 12.75 5.25 13.805l4.945 4.945 1.055-1.078-4.922-4.922Zm9.07.797 3.797 3.797-1.851 1.851-3.797-3.797 1.851-1.851Z" />
        </svg>
      ),
      href: "",
    },
    {
      name: "Logística y Distribución",
      icon: (
        <svg
          width={40}
          height={40}
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 4.5V6h14.25v11.25H9.633C9.299 15.96 8.139 15 6.75 15s-2.549.96-2.883 2.25H3V13.5H1.5v5.25h2.367C4.201 20.04 5.361 21 6.75 21s2.549-.96 2.883-2.25h6.234c.334 1.29 1.494 2.25 2.883 2.25s2.549-.96 2.883-2.25H24v-6.117l-.047-.117-1.5-4.5-.164-.516H15.75v-3H0Zm.75 3V9H7.5V7.5H.75Zm15 1.5h5.46l1.29 3.844v4.406h-.867C21.299 15.96 20.139 15 18.75 15s-2.549.96-2.883 2.25h-.117V9ZM1.5 10.5V12H6v-1.5H1.5Zm5.25 6c.838 0 1.5.662 1.5 1.5s-.662 1.5-1.5 1.5-1.5-.662-1.5-1.5.662-1.5 1.5-1.5Zm12 0c.838 0 1.5.662 1.5 1.5s-.662 1.5-1.5 1.5-1.5-.662-1.5-1.5.662-1.5 1.5-1.5Z" />
        </svg>
      ),
      href: "",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-[90vh] bg-black text-white relative">
      <div className="flex flex-col h-[90%] justify-center gap-6">
        <div className="relative h-1/2">
          <span className="w-full h-full absolute z-10" />
          <Swiper
            loop
            effect={"cube"}
            grabCursor={true}
            speed={5000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            cubeEffect={{
              shadow: false,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={false}
            modules={[EffectCube, Pagination, Autoplay]}
            className="swiperBanner"
          >
            <SwiperSlide>
              <div className="w-full h-full flex justify-center items-center">
                <h1 className="titlesF text-9xl font-bold animate-wave bg-gradient-to-r from-[#E21483] via-[#634E9B] to-[#30BDE7] bg-clip-text text-transparent mb-8">
                  FLOWINC.
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <div className="w-full h-full flex justify-center items-center">
                  <p className="titlesF text-9xl font-bold text-white bg-clip-text text-transparent mb-8 text-center">
                    {isActive ? (
                      <TypeAnimation
                        omitDeletionAnimation
                        cursor={false}
                        repeat={0}
                        sequence={[
                          "",
                          2500,
                          // Same substring at the start will only be typed out once, initially
                          "MÁS QUE AGENCIA",
                          1000,
                          "SOMOS FLOW",
                          1000, // wait 1s before replacing "Mice" with "Hamsters"
                        ]}
                        wrapper="span"
                        speed={250}
                        className="typeReact"
                      />
                    ) : (
                      "SOMOS FLOW"
                    )}
                  </p>
                </div>
              )}
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="grid grid-cols-2 xl:grid-flow-col xl:auto-cols-max gap-12">
          {sections.map(({ icon, name, href }) => (
            <ServicesElement name={name} icon={icon} key={name} href={href} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner2;
