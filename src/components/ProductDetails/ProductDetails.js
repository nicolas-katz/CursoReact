import React, { useState } from 'react';
import './ProductDetails.css';

const ProductDetails = prop=> {
    const [cantidadProducto, setCantidadProducto] = useState(1)
    
    const restarProducto = ()=>{
        cantidadProducto <= 1 ? setCantidadProducto(1) : setCantidadProducto(cantidadProducto - 1)
    }

    const sumarProducto = ()=>{
        cantidadProducto >= 10 ? setCantidadProducto(10) : setCantidadProducto(cantidadProducto + 1)
    }

    return (
        <div className="Contenedor">
            <div className="DetalleDeProducto">
                <div className="ImagenDelProducto">
                    <img src={prop.image} />
                </div>
                <div className="InfoDelProducto">
                    <h3>{prop.name}</h3>
                    <p>{prop.price}</p>
                    <p>Descripcion del producto</p>
                    <div className="CantidadProducto">
                        <span onClick={restarProducto}>-</span>
                        <p>{cantidadProducto}</p>
                        <span onClick={sumarProducto}>+</span>
                    </div>
                    <button>AGREGAR AL CARRITO</button>
                    <p>NO HAY STOCK</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;