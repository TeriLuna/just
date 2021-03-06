import React from "react";
import wineArrowIcon from "../../assets/images/arrows/flechatinto.png";

const WineArrow = () => {
  return (
    <div className="right-52 cursor-pointer z-20 absolute sm:z-0">
      <div className="inline-flex items-center justify-center">
        <img
          style={{ width: "2rem", height: "2rem" }}
          src={wineArrowIcon}
          alt="Flecha vinotinto para scrollear hasta la pagina home"
        />
        <span className="text-xl font-medium tpurple ml-2">Home</span>
      </div>
    </div>
  );
};

export default WineArrow;
