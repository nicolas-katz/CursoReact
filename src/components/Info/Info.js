import React from 'react';
import './Info.css';
import { AiOutlineCreditCard } from 'react-icons/ai'
import { FiTruck } from 'react-icons/fi'
import { BsLock } from 'react-icons/bs'

const Info = ()=> {

    const InfoDatos = [
        {
            icon: FiTruck,
            titulo: "ENVIAMOS TU COMPRA",
            subtitulo: "Entregas a todo el país" 
        },
        {
            icon: AiOutlineCreditCard,
            titulo: "PAGÁ COMO QUIERAS",
            subtitulo: "Tarjetas de crédito o efectivo" 
        },
        {
            icon: BsLock,
            titulo: "COMPRÁ CON SEGURIDAD",
            subtitulo: "Tus datos siempre protegidos" 
        },
    ]

    return (
        <section className="InfoSection">
            {InfoDatos.map(dato =>{
                return(
                    <div className="InfoContainer">
                        <dato.icon className="InfoIcon" />
                        <div className="InfoText">
                            <h4>{dato.titulo}</h4>
                            <p>{dato.subtitulo}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )

}

export default Info;