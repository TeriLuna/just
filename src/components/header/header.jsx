import React from 'react'
import {Link} from 'react-scroll'

export const Header = () => {
    return (
        <nav className='navJust'>
            <div className='contIzq'>
                <div className="imgHeader">
                    <img  src={require("../../assets/images/logo/just.png")} alt="logo1" />
                </div>
                <div className="imgHeader">
                    <img  src={require("../../assets/images/logo/logo-bienestar.png")} alt="logo2" />
                </div>
                
            </div>
            <div className='contDer'>
            <Link  to='home' spy={true} smooth={true} offset={-50} duration={500} className="tpurple text-xl bold">Home</Link>
            <Link to='services' spy={true} smooth={true} offset={-50} duration={500} className="tpurple text-xl ">¿Qué es JUST?</Link>
            <Link to='iniciacion' spy={true} smooth={true} offset={50} duration={500} className="tpurple text-xl ">¿Cómo iniciar?</Link>
            <Link to='beneficios' spy={true} smooth={true} offset={50} duration={500} className="tpurple text-xl ">Beneficios</Link>
            <Link to='contacto' spy={true} smooth={true} offset={50} duration={500} className="tpurple text-xl ">Contacto</Link>
            </div>
        </nav>
    )
}