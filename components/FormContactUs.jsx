"use client";
import React, { useRef } from "react";
import Titulos from "./Titulos/Titulos";

const FormContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <Titulos mainText={"CONTACTO"} secondaryText={"CONTACTO"} />
      <div className="flex justify-center items-center relative">
        <div className="flex max-md:flex-col md:justify-around py-20 w-4/5">
          <div className="max-md:w-full flex justify-center items-center w-2/5">
            <img src="/images/team.png" alt="" />
          </div>
          <div className="max-md:w-full w-3/6 flex flex-col items-center">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col justify-center items-center w-full"
            >
              <input
                placeholder="Nombre"
                type="text"
                name="user_name"
                className="w-full py-5 border-b placeholder:text-[#634E9B] text-[#634E9B] border-[#634E9B] focus:outline-none"
              />
              <input
                placeholder="Nombre de la Empresa"
                name="copr_name"
                type="text"
                className="w-full py-5 border-b placeholder:text-[#634E9B] text-[#634E9B] border-[#634E9B] focus:outline-none"
              />
              <input
                placeholder="Email"
                type="email"
                name="user_email"
                className="w-full py-5 border-b placeholder:text-[#634E9B] text-[#634E9B] border-[#634E9B] focus:outline-none"
              />
              <textarea
                placeholder="¿Cómo Podemos Ayudarte?"
                name="message"
                className="w-full pt-5 pb-8 border-b placeholder:text-[#634E9B] text-[#634E9B] border-[#634E9B] focus:outline-none resize-none"
              />
              <input
                type="submit"
                value="CONTACTANOS"
                className="max-lg:w-full w-2/5 rounded-md py-4 px-8 text-xl text-white font-bold mt-8 bg-gradient-to-r from-[#E21483] from-10% via-[#634E9B] via-30% to-[#30BDE7] to-70% hover:from-[#E21483]/[0.8] from-10% hover:via-[#634E9B]/[0.8] via-30% hover:to-[#30BDE7]/[0.8] to-70%"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContactUs;
