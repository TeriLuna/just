import React from "react";
import imgServices from "../../assets/images/bg/bg-services.jpg";
import icon1 from "../../assets/images/icons/icon1.png";
import icon2 from "../../assets/images/icons/icon2.png";
import icon3 from "../../assets/images/icons/icon3.png";
import icon4 from "../../assets/images/icons/icon4.png";
import Consult from "./Consult";
import plantRight from "../../assets/images/plantRight.png";
import plantLeft from "../../assets/images/plantLeft.png";

const ListServices = () => {
  const services = [
    {
      id: 1,
      title: "Aromaterapia",
      description:
        "Aceites escenciales puros, blends de aceites escenciales y aromaterapia vehícular",
      icon: icon1,
    },
    {
      id: 2,
      title: "Bienestar emocional y mental",
      description: "Armonía, relajación, vitalidad, plenitud, amor y pasión",
      icon: icon2,
    },
    {
      id: 3,
      title: "Bienestar físico",
      description:
        "Cuidados frecuentes, cuidados femeninos, respiración plena y confort invernal, movimiento y actividad física",
      icon: icon3,
    },
    {
      id: 4,
      title: "Bienestar dermo-cosmético",
      description:
        "Cuidado de rostro, labios y boca, cuerpo, manos, pies y piernas, cuidado del bebé y cuidado del cabello",
      icon: icon4,
    },
  ];

  return (
    <section className="bg-purple flex flex-col items-center justify-center relative">
      <img
        className="absolute rounded-lg w-2/4 -top-[14rem]
        lg:-top-[7rem] lg:w-2/4
        sm:w-3/4 sm:-top-28"
        src={imgServices}
        alt="Imagen de componentes esenciales de Just"
      />
      <div className=" container flex flex-col items-center justify-center">
        <div className=" mt-80 lg:mt-40 sm:mt-32">
          <h2
            className=" text-4xl mb-16 font-medium
            lg:text-4xl lg:mb-16
            md:text-3xl
            sm:text-lg sm:mb-6"
          >
            Cubriendo cada necesidad
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          {services.map((service) => (
            <div
              className="bg-purple-light flex justify-around py-10 px-24 rounded-xl m-6 w-3/4
              lg:px-24 lg:w-3/4 lg:py-10 lg:m-6
              md:px-5 md:w-10/12
              sm:px-10 sm:w-11/12 sm:py-6 sm:m-2"
              key={service.id}
            >
              <div className="grid grid-flow-row-dense grid-cols-6 items-center justify-center">
                <div className=" w-3/4 lg:w-3/4 md:w-full">
                  <img src={service.icon} alt="" />
                </div>
                <div className="col-span-5 ml-10">
                  <span
                    className="tpurple text-4xl mb-4 font-semibold
                    lg:text-4xl
                    md:text-3xl
                    sm:text-lg"
                  >
                    {service.title}
                  </span>
                  <span
                    className="text-3xl
                    lg:text-3xl
                    md:text-2xl
                    sm:text-xl"
                  >
                    {service.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Consult />

      <div
        className="absolute right-0 top-60 w-2/6
        lg:top-60 lg:right-0
        sm:top-4 sm:right-0"
      >
        <img src={plantRight} alt="" />
      </div>
      <div
        className="absolute left-0 bottom-0 w-2/6
        lg:w-2/6
        sm:w-1/2"
      >
        <img src={plantLeft} alt="" />
      </div>
    </section>
  );
};

export default ListServices;
