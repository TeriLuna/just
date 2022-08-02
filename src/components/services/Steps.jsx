import React from "react";
import bottle from "../../assets/images/frasco.png";
import bottleBase from "../../assets/images/basedefrascos.png";
import icon3 from "../../assets/images/icons/icono#3.png";
import icon2 from "../../assets/images/icons/icono#2.png";
import icon1 from "../../assets/images/icons/icono#1.png";
import bigBottle from "../../assets/images/frascobig.png";
import { Link } from "react-scroll";
import WhiteArrow from "../arrows/WhiteArrow";

const Steps = () => {
  return (
    <section className="relative h-screen pt-24 px-24 bg-purple-lighter">
      <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
        <WhiteArrow />
      </Link>
      <div className="container">
        <div className="row-auto">
          <ul
            className=" ml-40 inline-flex
            xl:ml-40
            lg:ml-0
            md:ml-0
            sm:ml-0 "
          >
            <li>
              <span>1</span>
              <div className=" flex flex-col items-center mt-5">
                <img src={icon1} alt="" />
                <p
                  className="font-semibold tpurple mt-5 text-4xl
                  lg:text-4xl
                  md:text-2xl
                  sm:text-lg"
                >
                  Contáctanos y regístrate
                </p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div className=" flex flex-col items-center mt-5">
                <img src={icon2} alt="" />
                <p
                  className="font-semibold tpurple mt-5 text-4xl
                  lg:text-4xl
                  md:text-2xl
                  sm:text-lg"
                >
                  Adquiere tu Kit de inicio
                </p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div className=" flex flex-col items-center mt-5">
                <img src={icon3} alt="" />
                <p
                  className="font-semibold tpurple mt-5 text-4xl
                  lg:text-4xl
                  md:text-xl
                  sm:text-xs"
                >
                  ¡Listo! ya eres consultor/a Just
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <img
            className="just-big-bottle"
            src={bigBottle}
            alt="Frasco de aceite esencial de lavanda Just"
          />
          <img
            className="just-bottle"
            src={bottle}
            alt="Frasco de aceite esencial de lavanda Just"
          />
          <img className="just-bottle-base" src={bottleBase} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Steps;
