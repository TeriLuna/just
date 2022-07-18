import React from "react";

export const Hero = () => {
  return (
    <section>
      <div className=" max-w-md mx-auto md:max-w-2xl">
        <div className=" md:flex">
          <div className="md:shrink-0">
            <div className="fullscreen left-0 bg-no-repeat bg-cover bg-center bg-img hero-img absolute"></div>
            <div className="max-w-md mx-auto">
              <div className="absolute flex flex-col w-1/3 top-72 left-64 sm:flex sm:top-0 sm:left-0 md:top-44 md:left-60">
                <span className="tpurple text-5xl md:text-5xl md:tpurple sm:text-xl sm:tpurple-light">
                  Cambia tu vida con
                </span>
                <span className="text-6xl text-white mt-3 md:text-6xl sm:text-3xl">
                  Bienestar para ti y los demás
                </span>
                <button className="bg-purple rounded-lg py-5 px-8 w-96 mt-10 text-4xl">
                  <a
                    href="https://api.whatsapp.com/send/?phone=5491154192505&text=Hola! Deseo ser consultor/a de JUST!"
                    target="_blank"
                  >
                    Contáctanos
                  </a>
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
