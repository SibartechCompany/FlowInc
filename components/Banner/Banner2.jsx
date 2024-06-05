"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import { TypeAnimation } from "react-type-animation";

const Banner2 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] bg-black text-white relative">
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
            <h1 className="text-9xl font-bold animate-wave bg-gradient-to-r from-[#E21483] via-[#634E9B] to-[#30BDE7] bg-clip-text text-transparent mb-8">
              FLOWINC
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-9xl font-bold text-white bg-clip-text text-transparent mb-8 text-center">
                {isActive ? (
                  <TypeAnimation
                    omitDeletionAnimation
                    cursor={false}
                    repeat={0}
                    sequence={[
                      "",
                      2500,
                      // Same substring at the start will only be typed out once, initially
                      "Más que agencia",
                      1000,
                      "Somos Flow",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                    ]}
                    wrapper="span"
                    speed={250}
                    className="typeReact"
                  />
                ) : (
                  "Somos Flow"
                )}
              </p>
            </div>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner2;
