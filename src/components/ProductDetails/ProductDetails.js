import React, { useState, useContext } from 'react';
import './ProductDetails.css';
import { FiMinus, FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { FaPinterestP, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import ItemCount from './ItemCount'
import CartContext from '../../Context/CartContext';
import IMAGES from '../../assets/IMAGES';
import CustomImage from '../CustomImage/CustomImage';

const ProductDetails = prop=> {

    const abrirDescription = ()=> {
        document.querySelector(".DescripcionBody").classList.toggle("active");
    }

    const {addProduct} = useContext(CartContext)

    const handleOnAdd = count => {
        addProduct(prop, count)
    }
    
    const arrImg = [
        IMAGES.img1,
    ]

    const {name, price, link, category, image, description, stock} = prop

    return (
        <div className="Contenedor">
            <div className="DetalleDeProducto">
                <div className="ImagenDelProducto">
                    {arrImg && arrImg.map(image => <CustomImage {...image} />)}
                </div>
                <div className="InfoDelProducto">
                    <div className="Pagination">
                        <Link to="/">Inicio</Link> / <Link to="/products">Productos</Link> / <Link to={link}>{category}</Link> / <span>{name}</span>
                    </div>
                    <h3>{name}</h3>
                    <h4>{price}</h4>
                    <h5>COLORES</h5>
                    <select>
                        <option className="Elegir">ELEGIR</option>
                        <option>WHITE</option>
                    </select>
                    <ItemCount stock={stock} onAdd={handleOnAdd} />
                    <div className="Descripcion">
                        <div onClick={abrirDescription} className="DescripcionHeader">
                            <h5>DESCRIPCIÓN</h5>
                            <FiMinus className="Icon" />
                        </div>
                        <div className="DescripcionBody">
                            <h5>{description}</h5>
                        </div>
                    </div>  
                    <div className="RedesSociales">
                        <FaInstagram className="Ig" />
                        <FaFacebookF className="Fb" />
                        <FaTwitter className="Tw" />
                        <FaPinterestP className="Pt" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;