import React from "react";

const Hero = () => {
  const WhatsappIcon = () => {
    return (
      <svg
        width="53"
        height="53"
        viewBox="0 0 53 53"
        display="inline-block"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2_15)">
          <path
            d="M0 53L3.8125 38.8147C1.65625 34.9488 0.53125 30.5841 0.53125 26.1882C0.53125 11.7535 12.3125 0 26.7812 0C41.25 0 53.0312 11.7535 53.0312 26.1882C53.0312 40.6229 41.25 52.3765 26.7812 52.3765C22.4375 52.3765 18.1562 51.2853 14.3125 49.1965L0 53ZM15 43.8653L15.9063 44.3953C19.2188 46.3594 22.9687 47.3882 26.7812 47.3882C38.5312 47.3882 48.0625 37.8482 48.0625 26.1571C48.0625 14.4659 38.5 4.92588 26.7812 4.92588C15.0312 4.92588 5.5 14.4659 5.5 26.1571C5.5 30.0229 6.5625 33.8265 8.625 37.1624L9.1875 38.0665L7.0625 45.9853L15 43.8653Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.5312 29.8359C35.4375 29.1812 34.0312 28.4641 32.7812 28.9941C31.8125 29.3994 31.1875 30.9271 30.5625 31.7065C30.25 32.1118 29.8438 32.1741 29.3438 31.9559C25.6563 30.4906 22.8438 28.0588 20.8438 24.6918C20.5 24.1618 20.5625 23.7565 20.9688 23.2576C21.5938 22.5406 22.3437 21.73 22.5 20.7635C22.6562 19.7971 22.2188 18.6747 21.8125 17.8018C21.3125 16.7106 20.7188 15.1206 19.625 14.4971C18.5938 13.9359 17.2812 14.2476 16.375 14.9959C14.8125 16.2741 14.0625 18.2382 14.0625 20.2335C14.0625 20.7947 14.125 21.3559 14.2813 21.8859C14.5938 23.1953 15.1875 24.4112 15.875 25.5647C16.375 26.4376 16.9375 27.2794 17.5313 28.09C19.5 30.74 21.9375 33.0471 24.75 34.7929C26.1563 35.6659 27.6875 36.4141 29.25 36.9441C31 37.5365 32.5937 38.1288 34.5 37.7547C36.5 37.3806 38.4688 36.1335 39.25 34.2318C39.4688 33.6706 39.5938 33.0159 39.4688 32.4235C39.2188 31.1765 37.5312 30.4282 36.5312 29.8359Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_15">
            <rect width="53" height="53" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };

  return (
    <div id="home" className=" relative">
      <div className=" container max-w-md mx-auto md:max-w-2xl">
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
                <button className="bg-purple rounded-lg py-5 px-8 w-96 mt-10 text-4xl inline-block">
                  <a
                    href="https://api.whatsapp.com/send/?phone=5491154192505&text=Hola! Deseo ser consultor/a de JUST!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contáctanos{" "}
                  </a>
                  <WhatsappIcon />
                </button>
                <span className="text-white mt-40 text-5xl">
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
