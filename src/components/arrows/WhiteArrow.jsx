import React from "react";
import whiteArrowIcon from "../../assets/images/arrows/flechablanca.png";

const WineArrow = () => {
  return (
    <div
      className="right-52 cursor-pointer z-20 absolute flex
      xl:visible
      lg:invisible
      md:invisible
      sm:invisible
      xs:invisible"
    >
      <div className="inline-flex items-center justify-center">
        <img
          style={{ width: "2rem", height: "2rem" }}
          src={whiteArrowIcon}
          alt="Flecha blanca para scroller hasta la pagina home"
        />
        <span className="text-xl font-medium ml-2 text-white">Home</span>
      </div>
    </div>
  );
};

export default WineArrow;
