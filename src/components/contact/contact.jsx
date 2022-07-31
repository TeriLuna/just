import React from "react";

export const Contact = () => {
    return(
        <section id="contacto" className="bgContact">
            <div className="contContact">
                <div className="textTestPers">
                <h3 className="text-3xl bold tpurple-light">Pide tu KIT de inicio</h3>
                <h2 className="text-4xl bold tpurple-light">¡HOY MISMO!</h2>

                </div>
                
                <button className="bg-purple buttonWsp text-4xl ">
                    <a
                        href="https://api.whatsapp.com/send/?phone=5491154192505&text=Hola! Deseo ser consultor/a de JUST!"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Contáctanos{" "}
                    </a>
                    <img className="contactWsp" src={require('../../assets/images/icons/icono#1.png')} alt="" />
                </button>
            </div>
        </section>
    )
}