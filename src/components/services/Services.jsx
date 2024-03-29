import React from "react";
import { Link } from "react-scroll";
import WineArrow from "../arrows/WineArrow";
import plantLeftWine from "../../assets/images/plantLeftWine.png";

const Services = () => {
  return (
    <section
      id="services"
      className="relative p-20
      lg:p-20
      md:p-10
      sm:p-5
      xs:p-5"
    >
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
                sm:text-2xl sm:font-normal
                xs:text-2xl xs:font-normal"
              style={{ fontFamily: "AmsterdamOne" }}
            >
              Pioneros en terapia herbal
            </h4>
            <h5
              className="flex items-center flex-col tpurple font-medium text-4xl mt-6
                lg:text-4xl lg:mt-6
                md:text-4xl md:mt-4
                sm:text-xl sm:mt-1
                xs:text-xl xs:mt-1"
            >
              Nuestros productos
            </h5>
          </div>
          <div
            className="row-auto mt-8 text-justify mb-48 flex flex-col items-center
              lg:mb-48
              sm:mb-36
              xs:mb-24"
          >
            <div className=" w-2/3">
              <p
                className="tpurple-light font-normal text-3xl
                lg:text-3xl
                md:text-xl
                sm:text-lg
                xs:text-base"
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
      <div
        className="absolute left-0 -bottom-28 w-1/4 
        lg:w-1/4 
        md:w-1/2 
        sm:w-1/2
        xs:w-1/2"
      >
        <img src={plantLeftWine} alt="" />
      </div>
    </section>
  );
};

export default Services;
