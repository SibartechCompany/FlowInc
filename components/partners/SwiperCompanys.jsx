"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import VisaIcon from "@/public/assets/iconsCompany/VisaIcon";
import Ebay from "@/public/assets/iconsCompany/Ebay";
import HuaweiIcon from "@/public/assets/iconsCompany/HuaweiIcon";
import SamsungIcon from "@/public/assets/iconsCompany/SamsungIcon";

const SwiperCompanys = () => {
  const companys = [
    {
      name: "Visa",
      icon: <VisaIcon />,
    },
    {
      name: "Ebay",
      icon: <Ebay />,
    },
    {
      name: "Huawei",
      icon: <HuaweiIcon />,
    },
    {
      name: "Samsung",
      icon: <SamsungIcon />,
    },
    {
      name: "Visa",
      icon: <VisaIcon />,
    },
    {
      name: "Ebay",
      icon: <Ebay />,
    },
    {
      name: "Huawei",
      icon: <HuaweiIcon />,
    },
    {
      name: "Samsung",
      icon: <SamsungIcon />,
    },
    {
      name: "Visa",
      icon: <VisaIcon />,
    },
    {
      name: "Ebay",
      icon: <Ebay />,
    },
    {
      name: "Huawei",
      icon: <HuaweiIcon />,
    },
    {
      name: "Samsung",
      icon: <SamsungIcon />,
    },
    {
      name: "Visa",
      icon: <VisaIcon />,
    },
    {
      name: "Ebay",
      icon: <Ebay />,
    },
    {
      name: "Huawei",
      icon: <HuaweiIcon />,
    },
    {
      name: "Samsung",
      icon: <SamsungIcon />,
    },
  ];

  return (
    <>
      <Swiper
        freeMode={true}
        loop={true}
        allowTouchMove={false}
        speed={5000}
        slidesPerView={4}
        centeredSlides
        spaceBetween={5}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper py-6"
        loopAddBlankSlides={true}
        loopAdditionalSlides={2}
      >
        {companys.map((item) => (
          <SwiperSlide
            key={item.name}
            className="max-w-[400px] !flex justify-center"
          >
            {item.icon}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperCompanys;
