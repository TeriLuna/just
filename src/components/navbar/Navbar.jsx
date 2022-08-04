import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "¿Qué es JUST?", link: "services" },
    { name: "¿Cómo iniciar?", link: "iniciacion" },
    { name: "Beneficios", link: "beneficios" },
    { name: "Contacto", link: "contacto" },
  ];
  let [open, setOpen] = useState(false);

  const Logos = () => {
    return (
      <div className="contIzq">
        <div className="imgHeader">
          <img src={require("../../assets/images/logo/just.png")} alt="logo1" />
        </div>
        <div className="imgHeader">
          <img
            src={require("../../assets/images/logo/logo-bienestar.png")}
            alt="logo2"
          />
        </div>
      </div>
    );
  };

  return (
    <div className=" w-full absolute top-0 left-0 z-10">
      <div className="navJust md:flex py-4 md:px-10 px-7">
        <div className="text-2xl cursor-pointer flex items-center left-0">
          <span className="text-3xl mr-1 pt-2">
            <Logos name="logo-ionic"></Logos>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-1/2 md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-32" : ("top-[-490px]", "bg-transparent")
          }`}
        >
          {Links.map((link) => (
            <div key={link.name} className="md:ml-8 text-2xl my-2 md:my-0 ">
              <Link
                to={link.link}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className={`tpurple  cPointer duration-500 ${
                  link.link === "home" ? "bold" : ""
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
