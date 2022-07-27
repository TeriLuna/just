import React from "react";
import imgServices from "../../assets/images/bg/bg-services.jpg";
import icon3 from "../../assets/images/icons/icon1.png";
import icon1 from "../../assets/images/icons/icon2.png";
import icon2 from "../../assets/images/icons/icon3.png";
import icon4 from "../../assets/images/icons/icon4.png";

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

  console.log(services);
  return (
    <section className="bg-purple w-screen h-screen">
      <img
        className=" rounded-lg w-2/4"
        style={{ translatey: "-200px" }}
        src={imgServices}
        alt="Imagen de componentes esenciales de Just"
      />
      <div className=" container">
        <div>
          <h2 className=" text-4xl">Cubriendo cada necesidad</h2>
        </div>
        <div className="m-6">
          {services.map((service) => (
            <div className="bg-purple-light flex p-5" key={service.id}>
              <div className=" col-span-2">
                <img src={service.icon} alt="" />
              </div>
              <div className=" col-auto">
                <span className=" tpurple text-4xl">{service.title}</span>
                <span className=" text-3xl">{service.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListServices;
