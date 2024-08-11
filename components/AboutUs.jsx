"use client"; // This is a client component

import React, { useRef } from "react";
import Titulos from "./Titulos/Titulos";
import emailjs from "@emailjs/browser";

const AboutUs = () => (
  <div>
    <Titulos mainText={"¿POR QUÉ?"} secondaryText={"FLOW INC"} />
    <div className="flex justify-center items-center relative">
      <div className="max-md:flex-col-reverse flex justify-around py-20 w-4/5">
        <div className="max-md:w-full max-md:pt-10 content-center w-2/4">
          <p className="font-sans text-2xl max-md:text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="max-md:w-full flex justify-center items-center w-2/5">
          <img src="/images/vector_info.png" alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
