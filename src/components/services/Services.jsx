import React from "react";
import { Link } from "react-scroll";
import WineArrow from "../arrows/WineArrow";
import plantLeftWine from "../../assets/images/plantLeftWine.png";

const Services = () => {
  return (
    <section id="services" className="relative p-20 lg:p-20 md:p-0 sm:p-0">
      <div className=" flex flex-col items-center justify-center">
        <div className=" container">
          <div className=" row-auto">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <WineArrow />
            </Link>
            <h4
              className="font-extralight flex justify-center tpurple-light text-5xl
                lg:text-5xl lg:font-extralight
                md:text-5xl md:font-normal
                sm:text-xl sm:font-normal"
              style={{ fontFamily: "AmsterdamOne" }}
            >
              Pioneros en terapia herbal
            </h4>
            <h5
              className="flex items-center flex-col tpurple font-medium text-4xl mt-6
                lg:text-4xl lg:mt-6
                md:text-4xl
                sm:text-lg sm:mt-1"
            >
              Nuestros productos
            </h5>
          </div>
          <div
            className="row-auto mt-8 text-justify mb-48 flex flex-col items-center
              lg:mb-48
              sm:mb-36"
          >
            <div className=" w-2/3">
              <p
                className="tpurple-light font-normal text-3xl
                lg:text-3xl
                md:text-xl
                sm:text-base"
              >
                Los productos Just se basan en recetas de bienestar que utilizan
                prácticas ancestrales con hierbas medicinales para atender
                necesidades cotidianas, con fórmulas originadas en los
                laboratorios Just en los Alpes Suizos con potentes componentes
                activos que brindan propiedades de bienestar y belleza
                extraordinarias.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 -bottom-28 w-1/4">
        <img src={plantLeftWine} alt="" />
      </div>
    </section>
  );
};

export default Services;
