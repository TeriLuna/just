import React from "react";

export const Contact = () => {
    return(
        <section id="contacto" className="bgContact">
            <div className="contContact">
                <div className="textContact">
                <h3 className=" bold tpurple-light">Pide tu KIT de inicio</h3>
                <h2 className=" bold tpurple-light">¡HOY MISMO!</h2>

                </div>
                
                <button className="bg-purple buttonWsp ">
                    <a
                        href="https://api.whatsapp.com/send/?phone=5491154192505&text=Hola! Deseo ser consultor/a de JUST!"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Contactanos{" "}
                    </a>
                    <img className="contactWsp" src={require('../../assets/images/icons/icono#1.png')} alt="" />
                </button>
            </div>
        </section>
    )
}