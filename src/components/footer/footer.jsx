import React from "react";
import { Link } from "react-scroll";

export const Footer = () => {
    return(
        <section className="contFooter">
            <div className="contInfoFooter">
                <div className="contLogFoot mt-5">
                    <img className="imgHeader"src={require('../../assets/images/logo/logo-bienestar-bco.png')} alt="" />
                    <div className="redesF">
                        <a href="https://api.whatsapp.com/send/?phone=5491154192505&text=Hola! Deseo ser consultor/a de JUST!"
                        target="_blank"
                        rel="noopener noreferrer">
                            <img className="contactF" src={require('../../assets/images/icons/icono#1.png')} alt="" />
                        </a>
                        <a href="https://www.instagram.com/bienestar.y.buen.vivir/" target="_blank" rel="noopener noreferrer">
                            <img className="contactF" src={require('../../assets/images/icons/icono-ig.png')} alt="" />
                        </a>
                    </div>
                </div>
                <div className="contNavF">
                    <div className="navFooter">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className=" text-xl bold cPointer mt-5"
                            >
                            Home
                        </Link>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className=" text-xl cPointer mt-5 "
                            >
                            ¿Qué es JUST?
                        </Link>
                        <Link
                            to="iniciacion"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className=" text-xl cPointer mt-5"
                            >
                            ¿Cómo iniciar?
                        </Link>
                    </div>
                    <div className="navFooter">
                        <Link
                            to="beneficios"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            className=" text-xl cPointer mt-5"
                            >
                            Beneficios
                        </Link>
                        <Link
                            to="contacto"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            className=" text-xl cPointer mt-5"
                            >
                            Contacto
                        </Link>
                    </div>
                </div>
                <div className="contInfoContactFoot mt-5">
                    <div className="contactFoot ">
                        <img className="contactWsp" src={require('../../assets/images/icons/tel.png')} alt="" />
                        <h3>+54 91154192505</h3>
                    </div>
                    <div className="contactFoot mt-5">
                        <img className="contactWsp" src={require('../../assets/images/icons/mail.png')} alt="" />
                        <h3>bienestarybuenvivir@gmail.com</h3>
                    </div>
                    <div className="contactFoot mt-5">
                        <img className="contactWsp" src={require('../../assets/images/icons/ubicacion.png')} alt="" />
                        <h3>Villa Urquiza, Buenos Aires, Argentina</h3>
                    </div>
                </div>
            </div>
            <div className="contCopy mt-5 mb-5">
                <h4>Copyright | 2022 | Bienestar y Buen Vivir | Todos los derechos reservados</h4>
            </div>
        </section>
    )
}