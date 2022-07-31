import React from "react";
import wpIcon from "../../assets/images/icons/icono#1.png";

const Hero = () => {
  return (
    <div id="home" className="fullscreen bg-img hero-img">
      <div className=" container mx-auto">
        <div className=" md:flex">
          <div className="md:shrink-0">
            <div className="max-w-mdx w-2/5">
              <div className="relative flex flex-col top-72  sm:flex sm:top-0 md:top-44">
                <span className="tpurple text-5xl md:text-5xl md:tpurple sm:text-xl sm:tpurple-light">
                  Cambia tu vida con
                </span>
                <span className="text-6xl text-white mt-3 md:text-6xl sm:text-3xl">
                  Bienestar para tí y los demás
                </span>
                <button className="bg-purple rounded-lg py-5 px-8 w-96 mt-10 text-4xl inline-flex justify-center items-center hover:bg-purple-dark hover:text-10xl">
                  <a
                    href="https://api.whatsapp.com/send/?phone=5491154192505&text=Hola! Deseo ser consultor/a de JUST!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contáctanos
                  </a>
                  <img
                    className="ml-4 w-14"
                    src={wpIcon}
                    alt="Icono de WhatsApp"
                  />
                </button>
                <span className="flex text-white mt-40 text-5xl font-semibold md:mt-8">
                  Obtén ingresos extra como consultor/a Just ¡AHORA!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
