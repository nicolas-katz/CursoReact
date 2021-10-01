import React from 'react';
import './Footer.css';
import Logo from '../../assets/logo.png';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlinePhone } from 'react-icons/ai';
import { FaCcVisa, FaCcDinersClub, FaCcMastercard, FaMapPin } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import { CgMail } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Footer = ()=> {

    const categories = [
        {
            id: "1",
            address: "/categories/relojes",
            name: "Relojes",
        },
        {
            id: "2",
            address: "/categories/celulares",
            name: "Celulares",
        },
        {
            id: "3",
            address: "/categories/tablets",
            name: "Tablets",
        },
        {
            id: "4",
            address: "/categories/laptops",
            name: "Laptops",
        },
    ]

    return (
        <footer>
            <div className="FooterContainer">
                <div className="FooterLogo">
                    <img src={Logo} />
                </div>
                <div className="FooterNav">
                    <h5>Navegación</h5>
                    {categories.map(categorie=>{
                        return(
                            <Link to={categorie.address}>{categorie.name}</Link>
                        )
                    })}
                </div>
                <div className="FooterMediosDePago">
                    <h5>Medios de pago</h5>
                    <div className="FooterMediosDePagoIcons">
                        <FaCcVisa className="MDP" />
                        <FaCcMastercard className="MDP" />
                        <FaCcMastercard className="MDP" />
                        <FaCcDinersClub className="MDP" />
                        <FaCcVisa className="MDP" />
                        <FaCcVisa className="MDP" />
                        <FaCcMastercard className="MDP" />
                        <FaCcDinersClub className="MDP" />
                        <FaCcDinersClub className="MDP" />
                        <FaCcMastercard className="MDP" />
                    </div>
                </div>
                <div className="FooterContacto">
                    <div className="Redes">
                        <h5>Redes sociales</h5>
                        <AiOutlineInstagram className="RS" />
                        <AiOutlineFacebook className="RS" />
                    </div>
                    <div className="Suscripcion">
                        <h5>Newsletter</h5>
                        <div className="SuscripcionInput">
                            <input type="email" placeholder="Email" />
                            <RiSendPlaneLine className="SendEmail" />
                        </div>
                    </div>
                </div>
                <div className="FooterInfo">
                    <h5>Contacto</h5>
                    <div>
                        <CgMail className="InfoIcon" />
                        <p>roomify@gmail.com</p>
                    </div>
                    <div>
                        <AiOutlinePhone className="InfoIcon" />
                        <p>4444-4444</p>
                    </div>
                    <div>
                        <FaMapPin className="InfoIcon" />
                        <p>Calle 123</p>
                    </div>
                </div>
            </div>
            <div className="FooterCopyright">
                <h6>CREADO POR NICOLAS KATZ</h6>
                <h6>PROYECTO FINAL DEL CURSO DE REACT DE CODERHOUSE</h6>
            </div>
        </footer>
    )

}

export default Footer;