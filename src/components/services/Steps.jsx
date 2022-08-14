import React from "react";
import icon3 from "../../assets/images/icons/icono#3.png";
import icon2 from "../../assets/images/icons/icono#2.png";
import icon1 from "../../assets/images/icons/icono#1.png";
import basewithbottles from "../../assets/images/baseconfrascos.png";

const Steps = () => {
  const steps = [
    {
      id: 1,
      name: "Contactanos y registrate",
      icon: icon1,
      alt: "Icono de Whatsapp",
    },
    {
      id: 2,
      name: "Adquirí tu Kit de inicio",
      icon: icon2,
      alt: "Icono de mano con plantas",
    },
    {
      id: 3,
      name: "¡Listo! ya sos consultor/a Just",
      icon: icon3,
      alt: "Icono de gente",
    },
  ];

  return (
    <section
      className="relative pt-24 pb-80 px-24 bg-purple-lighter
      xl:pt-32 xl:pb-80 xl:px-32
      lg:px-32 lg:pb-36 lg:pt-24
      xs:px-2 xs:pb-12 xs:pt-32"
    >
      <div className="container">
        <div className="row-auto">
          <ul
            className=" ml-40
            xl:ml-40
            lg:ml-0
            md:ml-10
            sm:ml-0
            xs:-ml-7"
          >
            {steps.map((step) => (
              <li key={step.id}>
                <span>{step.id}</span>
                {/* " flex flex-col items-center mt-5" */}
                <div
                  className={`flex ${
                    step.id === 1
                      ? "flex flex-col items-center mt-5 xl:mt-9 lg:mt-6 md:mt-5 sm:mt-5 xs:-mt-64"
                      : "flex flex-col items-center mt-5 xl:mt-9 lg:mt-6 md:mt-5 sm:mt-5"
                  }`}
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=5491154192505&text=Hola! Deseo ser consultor/a de JUST!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={step.icon} alt={step.alt} />
                  </a>
                  <p
                    className="font-semibold tpurple mt-5 text-3xl
                  lg:text-2xl
                  md:text-2xl
                  sm:text-lg
                  xs:text-base"
                  >
                    {step.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <img
          src={basewithbottles}
          alt="Frasco de aceite esencial de lavanda Just"
          className="w-1/2 absolute -top-1/4 right-0
              lg:w-1/2 lg:-top-1/4 lg:right-0
              md:w-1/2 md:-top-1/4 md:right-0
              sm:w-1/2 sm:-top-1/4 sm:right-0
              xs:w-3/4 xs:-top-5 xs:-right-2"
        />
      </div>
    </section>
  );
};

export default Steps;
