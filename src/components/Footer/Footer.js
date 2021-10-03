import React from 'react';
import './Footer.css';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';

const Footer = ()=> {

    return (

        <footer>
            <div className="Redes">
                <h4>REDES SOCIALES</h4>
                <div>
                    <AiOutlineInstagram className="IG" />
                    <AiOutlineFacebook />
                </div>
            </div>
            <div className="Suscripcion">
                <h4>SUSCRIBITE PARA MÁS INFORMACIÓN</h4>
                <div>
                    <input type="email" placeholder="Ingresa tu email" />
                    <button className="SuscripcionInput">SUSCRIBIRME</button>
                </div>
            </div>
            <div className="Contacto">
                <h4>CONTACTO</h4>
                <div>
                    <p>AV. LIBERTADOR 4545,</p>
                    <p>NUÑEZ, CABA, ARGENTINA</p>
                    <p>54 9 1122334455</p>
                    <p>SUPORT@ROOMIFY.COM.AR</p>
                </div>
            </div>
        </footer>

    )

}

export default Footer;