import React from 'react'
import { Link } from 'react-scroll'

export const Beneficios = () => {
    return(
        <section id='beneficios' className='relative '>
            <Link to="home"spy={true} smooth={true} offset={-50} duration={500} className=" text-xl bold cPointer mt-5 btnHome " >
                <img className="iconHome"src={require('../../assets/images/icons/home-bco.png')} alt="" />
            </Link>
            <div className='titleSection'>
                <h2 className='text-5xl titleBenef' style={{ fontFamily: "AmsterdamOne" }}>Beneficios</h2>
                <h4 className='tpurple text-4xl'  >Como consultor/a</h4>
            </div>
            <div className='contBenf'>
                <div className='benef'>
                    <div className='contBenefIcon'>
                        <img  className='benefIcon' src={require("../../assets/images/icons/beneficios.png")} alt="" />
                    </div>
                    <div className='benefItem'><img className='checkIcon' src={require("../../assets/images/icons/check1.png")} alt=""/><p className='text-l titleBenef'>Obten ganacias del 25-30% del volumen de tus ventas</p></div>
                    <div className='benefItem'><img className='checkIcon' src={require("../../assets/images/icons/check1.png")} alt=""/><p className='text-l titleBenef'>Asesoría y acompañamient</p></div>
                    <div className='benefItem'><img className='checkIcon' src={require("../../assets/images/icons/check1.png")} alt=""/><p className='text-l titleBenef'>Emprendimiento</p></div>
                    <div className='benefItem'><img className='checkIcon' src={require("../../assets/images/icons/check1.png")} alt=""/><p className='text-l titleBenef'>Puedes hacer carrera de liderazgo</p></div>
                    <div className='benefItem'><img className='checkIcon' src={require("../../assets/images/icons/check1.png")} alt=""/><p className='text-l titleBenef'>Premios</p></div>
                    <div className='benefItem'><img className='checkIcon' src={require("../../assets/images/icons/check1.png")} alt=""/><p className='text-l titleBenef'>Viajes</p></div>
                    <div className='benefItem'><img className='checkIcon' src={require("../../assets/images/icons/check1.png")} alt=""/><p className='text-l titleBenef'>Productos Just de regalo</p></div>    
                </div>

        <div className="testimonios">
          <div className="contTestimonio">
            <h2 className="tpurple text-4xl titleBenef bold">Testimonios</h2>
            <p className="tpurple-lither">Experiencias de consultores reales</p>
          </div>
          <div className="contTestPers">
            <div className="contImgTest">
              <img
                className="testImg"
                src={require("../../assets/images/testimonio/FotoTESTIMONIO_MARITA.jpeg")}
                alt=""
              />
            </div>
            <div className="textTestPers">
              <h3 className="text-l tpurple bold">Marita, 59 años</h3>
              <p className="text-sm tpurple-light">
                Consultora Just en Argentina
              </p>
              <div className="contT">
                <img
                  className="comillaIcon"
                  src={require("../../assets/images/icons/comilla INICIO.png")}
                  alt=""
                />
                <p className="text-sm m-2 tpurple ">
                  me permite crecer a partir de algo que cosidero realmente
                  bueno, llevando salud consciente a otros
                </p>
                <img
                  className="comillaIcon"
                  src={require("../../assets/images/icons/comilla FINAL.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="contTestPers">
            <div className="contImgTest">
              <img
                className="testImg"
                src={require("../../assets/images/testimonio/Testimonio2.png")}
                alt=""
              />
            </div>
            <div className="textTestPers">
              <h3 className="text-l tpurple bold">Carla, 37 años</h3>
              <p className="text-sm tpurple-light">
                Consultora Just en Argentina
              </p>
              <div className="contT">
                <img
                  className="comillaIcon"
                  src={require("../../assets/images/icons/comilla INICIO.png")}
                  alt=""
                />
                <p className="text-sm m-2 tpurple ">
                  me siento en familia porque mis compañeros trabajan en equipo
                  y aportan sus habilidades para el crecimiento de todos
                </p>
                <img
                  className="comillaIcon"
                  src={require("../../assets/images/icons/comilla FINAL.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
