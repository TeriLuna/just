import React from "react";
import WhiteArrow from "../arrows/WhiteArrow";

const Consult = () => {
  return (
    <div
      id="iniciacion"
      className="container mt-32 p-20
      lg:mt-32
      sm:mt-14"
    >
      <WhiteArrow />
      <div className=" row-auto flex flex-col items-center justify-center">
        <h1
          className="tpurple-lither text-7xl font-normal
          lg:text-7xl
          sm:text-5xl"
          style={{ fontFamily: "AmsterdamOne" }}
        >
          Ser consultor/a
        </h1>
        <h3
          className=" font-medium text-5xl mt-10
          lg:text-5xl
          sm:text-3xl"
        >
          es muy sencillo...
        </h3>
        <p
          className=" font-normal text-4xl text-white mt-14 w-3/4 text-center
          lg:text-4xl lg:w-2/3
          sm:text-xl sm:w-4/5"
        >
          Puedes realizarlo a tiempo completo o simplemente hacerlo como una
          actividad extra para obtener un ingreso adicional, brindando bienestar
          para tí y los demás.
        </p>
      </div>
    </div>
  );
};

export default Consult;
