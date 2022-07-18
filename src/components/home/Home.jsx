// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Home = () => {
  return (
    <section>
      <div className=" max-w-md mx-auto md:max-w-2xl">
        <div className=" md:flex">
          <div className="md:shrink-0">
            <div className="fullscreen left-0 bg-no-repeat bg-cover bg-center bg-img hero-img absolute"></div>
            <div className="max-w-md mx-auto">
              <div className="absolute flex flex-col w-1/3 top-72 left-64 sm:flex sm:top-0 sm:left-0 md:top-44 md:left-60">
                <span className="tpurple font-normal text-5xl sm:tpurple-light">
                  Cambia tu vida con
                </span>
                <span className=" text-6xl font-normal text-white mt-3 sm:text-3xl">
                  Bienestar para ti y los demás
                </span>
                <button className="bg-purple rounded-lg py-5 px-2 w-96 mt-10 text-4xl">
                  Contáctanos
                </button>
                <span className="text-white mt-40 text-5xl">
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
