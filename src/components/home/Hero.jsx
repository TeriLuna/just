import React from "react";
import wpIcon from "../../assets/images/icons/icono#1.png";

const Hero = () => {
  return (
    <section id="home" className="fullscreen bg-img hero-img">
      <div
        className=" container mx-auto p-0
        xl:pt-20
        lg:pt-7
        md:pt-14
        sm:pt-52
        xs:pt-20"
      >
        <div className="flex md:flex sm:flex">
          <div className="shrink-0 md:shrink-0 sm:shrink-0 xs:shrink-0">
            <div
              className="w-2/5 ml-40
              lg:w-1/2 lg:ml-16
              md:ml-16  md:w-1/2
              sm:ml-4 sm:w-1/2
              xs:-ml-20 xs:w-screen"
            >
              <div
                className="relative flex flex-col top-72
              xs:top-44 xs:ml-20
              sm:flex sm:top-26 sm:ml-3
              md:top-44 "
              >
                <span
                  className="tpurple text-5xl
                  lg:text-4xl
                  md:text-4xl md:tpurple
                  sm:text-4xl sm:tpurple-light
                  xs:text-2xl xs:tpurple-light
                  "
                >
                  Cambia tu vida{" "}
                  <span
                    className="tpurple
                    xl:tpurple
                    lg:tpurple
                    md:tpurple
                    sm:tpurple
                    xs:tpurple-light"
                  >
                    con
                  </span>
                </span>
                <span
                  className="text-6xl text-white mt-3
                  lg:text-4xl
                  md:text-4xl
                  sm:text-5xl
                  xs:text-2xl
                  "
                >
                  Bienestar para tí y los demás
                </span>
                <button
                  className="bg-purple rounded-lg py-5 px-8 w-96 mt-10 text-4xl inline-flex justify-center items-center
                lg:text-3xl lg:w-80 lg:px-8 lg:mt-10
                md:mt-16
                sm:text-3xl sm:w-80 sm:px-4 sm:mt-40
                xs:text-2xl xs:w-60 xs:px-2 xs:mt-20"
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=5491154192505&text=Hola! Deseo ser consultor/a de JUST!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contactanos
                  </a>
                  <img
                    className="ml-4 w-14
                    lg:w-12 lg:ml-4
                    sm:w-11 sm:ml-2
                    xs:w-5 xs:ml-2"
                    src={wpIcon}
                    alt="Icono de WhatsApp"
                  />
                </button>
                <span
                  className="flex text-white mt-24 text-5xl font-semibold
                lg:text-3xl lg:mt-10
                md:mt-8 md:text-3xl
                sm:text-4xl sm:mt-20
                xs:text-2xl xs:mt-6 xs:px-2"
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
