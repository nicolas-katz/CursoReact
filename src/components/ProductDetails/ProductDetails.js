import React, { useState } from 'react';
import './ProductDetails.css';
import portada from '../../assets/portada.jpg';
import CartButton from '../Product/CartButton';

const ProductDetails = ()=> {
    const [cantidadProducto, setCantidadProducto] = useState(0)
    
    const restarProducto = ()=>{
        cantidadProducto <= 0 ? setCantidadProducto(0) : setCantidadProducto(cantidadProducto - 1)
    }

    const sumarProducto = ()=>{
        cantidadProducto >= 10 ? setCantidadProducto(10) : setCantidadProducto(cantidadProducto + 1)
    }

    return (
        <div className="DetalleDeProducto">
            <div className="ImagenDelProducto">
                <img src={portada} />
            </div>
            <div className="InfoDelProducto">
                <h3>Nombre del producto</h3>
                <p>Precio del producto</p>
                <p>Descripcion del producto</p>
                <div className="CantidadProducto">
                    <span onClick={restarProducto}>-</span>
                    <p>{cantidadProducto}</p>
                    <span onClick={sumarProducto}>+</span>
                </div>
                <CartButton />
                <p>Stock disponible</p>
                <p>Marca del producto</p>
                <p>Tipo de producto</p>
            </div>
        </div>
    )
}

export default ProductDetails;