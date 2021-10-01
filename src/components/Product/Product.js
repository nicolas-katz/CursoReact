import './Product.css';
import React , { useState } from 'react';
import { Link } from 'react-router-dom';

const Product = prop => {

    const openModal = ()=> {
      document.querySelector(".ModalContainer").classList.add("openModalContainer");
    }

    const closeModal = ()=> {
      document.querySelector(".ModalContainer").classList.remove("openModalContainer");
    }

    const [sumarProducto, setSumarProducto] = useState(0);

    const sumarAlCarrito = ()=>{
        sumarProducto >= 9 ? setSumarProducto(9) : setSumarProducto(sumarProducto + 1)
    }

    return(
      <div className="CardProduct">
        <img onClick={openModal} src={`./assets/products/${prop.image}`} />
        <h3>{prop.name}</h3>
        <p>{prop.price}</p>
        <div className="CartButtonContainer">
            <button onClick={sumarAlCarrito}>COMPRAR</button>
            <Link to={prop.link}><button>VER</button></Link>
        </div>
        <div onClick={closeModal} className="ModalContainer">
          <div className="ModalProduct">
            <img src={`./assets/products/${prop.image}`} />
          </div>
        </div>
      </div>
    )
}

export default Product;
