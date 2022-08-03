import React from "react";
import wpIcon from "../../assets/images/icons/icono#1.png";

const Hero = () => {
  return (
    <section id="home" className="fullscreen bg-img hero-img">
      <div
        className=" container mx-auto p-0 
        lg:pt-18
        md:pt-14
        sm:pt-52"
      >
        <div className="flex md:flex sm:flex">
          <div className="shrink-0 md:shrink-0 sm:shrink-0">
            <div
              className="w-2/5 ml-40 
              lg:w-2/5 lg:ml-20
              md:ml-16  md:w-1/2
              sm:ml-4 sm:w-screen"
            >
              <div className="relative flex flex-col top-72  sm:flex sm:top-0 md:top-44 sm:ml-3">
                <span className="tpurple text-5xl lg:text-5xl md:text-4xl md:tpurple sm:text-4xl sm:tpurple-light">
                  Cambia tu vida con
                </span>
                <span className="text-6xl text-white mt-3 lg:text-6xl md:text-4xl sm:text-5xl">
                  Bienestar para tí y los demás
                </span>
                <button
                  className="bg-purple rounded-lg py-5 px-8 w-96 mt-10 text-4xl inline-flex justify-center items-center hover:bg-purple-dark hover:text-10xl
                lg:text-4xl lg:w-96 lg:px-8 lg:mt-10
                md:mt-16
                sm:text-3xl sm:w-80 sm:px-4 sm:mt-40"
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=5491154192505&text=Hola! Deseo ser consultor/a de JUST!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contáctanos
                  </a>
                  <img
                    className="ml-4 w-14 lg:w-14 lg:ml-4 sm:w-11 sm:ml-1"
                    src={wpIcon}
                    alt="Icono de WhatsApp"
                  />
                </button>
                <span
                  className="flex text-white mt-24 text-5xl font-semibold 
                lg:text-5xl lg:mt-24
                md:mt-8 md:text-3xl 
                sm:text-4xl sm:mt-20"
                >
                  Obtén ingresos extra como consultor/a Just ¡AHORA!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
