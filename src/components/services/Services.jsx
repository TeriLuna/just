import React from "react";
import ListServices from "./ListServices";

const Services = () => {
  return (
    <section id="services" className="relative p-28">
      <div className=" container">
        <div className=" row-auto">
          <h4
            className="tpurple-light text-5xl font-extralight"
            style={{ fontFamily: "AmsterdamOne" }}
          >
            Pioneros en terapia herbal
          </h4>
          <h5 className="tpurple text-4xl">Nuestros productos</h5>
        </div>
        <div className="row-auto mt-8">
          <div className="col-auto">
            <p className=" text-3xl tpurple-light">
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
      <ListServices />
    </section>
  );
};

export default Services;
