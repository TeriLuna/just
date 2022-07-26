import React from 'react'

export const Beneficios = () => {
    return(
        <section id='beneficios '>
            <h2 className=''>Beneficios</h2>
            <h4 className='tpurple text-xl bold'>Como consultor/a</h4>
            <div className='contBenf'>
                <div className='benef'>
                    <div>
                        <img  src={require("../../assets/images/icons/beneficios.png")} alt="" />
                    </div>
                    <div><img></img><p>Obten ganacias del 25-30% del volumen de tus ventas</p></div>
                    <div><img></img><p>Asesoría y acompañamient</p></div>
                    <div><img></img><p>Emprendimiento</p></div>
                    <div><img></img><p>Puedes hacer carrera de liderazgo</p></div>
                    <div><img></img><p>Premios</p></div>
                    <div><img></img><p>Viajes</p></div>
                    <div><img></img><p>Productos Just de regalo</p></div>    
                </div>

                <div className='testimonios'>
                    <div>
                        <h2>Testimonios</h2>
                        <p>Experiencias de consultores reales</p>
                    </div>
                    <div>
                        <div><img></img></div>
                        <div>
                            <h3>Marita, 59 años</h3>
                            <p>Consultora Just en Argentina</p>
                            <div>
                                <img src="" alt="" />
                                <p>me permite crecer a partir de algo que cosidero realmente bueno, llevando salud consciente a otros</p>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                    <div><img></img></div>
                        <div>
                            <h3>Carla, 37 años</h3>
                            <p>Consultora Just en Argentina</p>
                            <div>
                                <img src="" alt="" />
                                <p>me siento en familia porque mis compañeros trabajan en equipo y aportan sus habilidades para el crecimiento de todos</p>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
