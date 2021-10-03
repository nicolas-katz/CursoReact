import React, { useState } from 'react';
import './ProductDetails.css';
import { FiHeart, FiMinus } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const ProductDetails = prop=> {
    const [cantidadProducto, setCantidadProducto] = useState(1)
    
    const restarProducto = ()=>{
        cantidadProducto <= 1 ? setCantidadProducto(1) : setCantidadProducto(cantidadProducto - 1)
    }

    const sumarProducto = ()=>{
        cantidadProducto >= prop.stock ? setCantidadProducto(prop.stock) : setCantidadProducto(cantidadProducto + 1)
    }

    const abrirDescription = ()=> {
        document.querySelector(".DescripcionBody").classList.toggle("active");
    }

    return (
        <div className="Contenedor">
            <div className="DetalleDeProducto">
                <div className="ImagenDelProducto">
                    <img src={prop.image} />
                </div>
                <div className="InfoDelProducto">
                    <div className="Pagination">
                        <Link to="/">Inicio</Link> / <Link to={prop.link}>{prop.category}</Link> / <span>{prop.name}</span>
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
                    <div className="CantidadProducto">
                        <input value={cantidadProducto} />
                        <div className="SumarYRestar">
                            <span onClick={sumarProducto}>+</span>
                            <span onClick={restarProducto}>-</span>
                        </div>
                    </div>
                    <div className="Agregar">
                        <button>AGREGAR AL CARRITO</button>
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
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;