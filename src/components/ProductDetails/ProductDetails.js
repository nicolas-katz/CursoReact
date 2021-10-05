import React, { useState } from 'react';
import './ProductDetails.css';
import { FiMinus, FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { FaPinterestP, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import ItemCount from './ItemCount'

const ProductDetails = prop=> {
    const abrirDescription = ()=> {
        document.querySelector(".DescripcionBody").classList.toggle("active");
    }

    const [cantidadProducto, setCantidadProducto] = useState(1)
    
    const onLess = ()=>{
        cantidadProducto <= 1 ? setCantidadProducto(1) : setCantidadProducto(cantidadProducto - 1)
    }

    const onAdd = ()=>{
        cantidadProducto >= prop.stock ? setCantidadProducto(prop.stock) : setCantidadProducto(cantidadProducto + 1)
    }

    return (
        <div className="Contenedor">
            <div className="DetalleDeProducto">
                <div className="ImagenDelProducto">
                    <img scr={prop.image} />
                </div>
                <div className="InfoDelProducto">
                    <div className="Pagination">
                        <Link to="/">Inicio</Link> / <Link to="/products">Productos</Link> / <Link to={prop.link}>{prop.category}</Link> / <span>{prop.name}</span>
                    </div>
                    <h3>{prop.name}</h3>
                    <h4>{prop.price}</h4>
                    <h5>COLORES</h5>
                    <select>
                        <option className="Elegir">ELEGIR</option>
                        <option>WHITE</option>
                        <option>BLACK</option>
                        <option>GREY</option>
                        <option>LIGHT</option>
                    </select>
                    <ItemCount stock={prop.stock} quantity={cantidadProducto} onAdd={onAdd} onLess={onLess} />
                    <div className="Agregar">
                        <Link to="/cart"><button>AGREGAR AL CARRITO</button></Link>
                        <FiHeart className="AgregarFav" />
                    </div>
                    <div className="Descripcion">
                        <div onClick={abrirDescription} className="DescripcionHeader">
                            <h5>DESCRIPCIÓN</h5>
                            <FiMinus className="Icon" />
                        </div>
                        <div className="DescripcionBody">
                            <h5>{prop.description}</h5>
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