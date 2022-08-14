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
      lg:px-32
      xs:px-2"
    >
      <div className="container">
        <div className="row-auto">
          <ul
            className=" ml-40 inline-flex
            xl:ml-40 xl:inline-flex
            lg:ml-0 lg:inline-flex
            md:ml-10 md:inline-flex
            sm:ml-0 sm:inline-flex
            xs:ml-0 xs:block"
          >
            {steps.map((step) => (
              <li key={step.id}>
                <span>{step.id}</span>
                <div className=" flex flex-col items-center mt-5">
                  <img src={step.icon} alt={step.alt} />
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
               xs:w-3/4 xs:-top-24 xs:-right-2"
        />
      </div>
    </section>
  );
};

export default Steps;
