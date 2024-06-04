import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import { IconBase } from "react-icons";
import ArrowsIcon from "@/public/assets/icons/ArrowsIcon";
import PercentageIcon from "@/public/assets/icons/PercentageIcon";
import PersonsIcon from "@/public/assets/icons/PersonsIcon";

const SwiperCasos = ({ data }) => {
  const demoData = [
    {
      icon: <ArrowsIcon />,
      text: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <PercentageIcon />,
      text: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <PersonsIcon />,
      text: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper bg-white w-full !flex"
    >
      <SwiperSlide className="p-8">
        <div className="flex justify-between h-full">
          <div className="bg-primario w-[40%] h-full rounded-md"></div>
          <div className="w-[60%] h-full flex flex-col p-8 gap-6 justify-center">
            <h4 className="font-bold text-rosa text-4xl text-center">
              TITULO CASO DE ÉXITO
            </h4>
            <p className="text-xl text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-8">
        <div className="w-full h-full flex flex-col justify-center p-8 gap-8">
          <div>
            <p className="text-2xl text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="grid grid-cols-3 place-items-center">
            {demoData.map((data, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {data.icon}
                <p className="text-lg font-bold">{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCasos;
