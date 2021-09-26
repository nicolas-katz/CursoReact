import './Product.css';
import React from 'react';
import { FaHeart } from "react-icons/fa";

const Product = prop => {
    return(
      <div className="CardProduct">
        <img src={`./assets/products/${prop.image}`} />
        <h3>{prop.name}</h3>
        <p>{prop.price}</p>
        <button>Agregar al carrito</button>
        <FaHeart className="ProductFav" />
      </div>
    )
}

export default Product;