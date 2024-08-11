"use client";
import React from "react";
import ImageNext from "../Atoms/ImageNext";
import SwiperCompanys from "./SwiperCompanys";
import SwiperCasos from "./SwiperCasos";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

const Partners = () => {
  return (
    <div className="bg-black flex flex-col items-center py-6 gap-6 relative min-h-screen">
      <span id="aboutus" className="mt-[-20px] absolute opacity-0 absolute" />
      <div className="flex items-center">
        <h3 className="text-rosa font-bold text-4xl">
          Más de 500.000+ clientes confían en
        </h3>
        <div className="w-[200px]">
          <ImageNext
            src="/assets/img/logo.webp"
            width={1000}
            height={1000}
            alt={"Logo FlowInc"}
          />
        </div>
      </div>
      <p className="text-white text-xl text-center">
        con Flow-inc no se requieren dependencias de forma predeterminada y se
        integra <br /> perfectamente con todos los marcos de desarrollo
        populares. Mejore sus estrategias de marketing con facilidad.
      </p>
      <div className="w-[80%] my-6">
        <SwiperCompanys />
      </div>
      <div className="max-h-[515px] flex w-[80%] rounded-lg overflow-hidden">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper aaaa w-full"
        >
          <SwiperSlide className="!flex">
            <SwiperCasos />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
