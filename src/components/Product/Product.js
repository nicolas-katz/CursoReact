import './Product.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = prop => {

    const openModal = ()=> {
      document.querySelector(".ModalContainer").classList.add("openModalContainer");
    }

    const closeModal = ()=> {
      document.querySelector(".ModalContainer").classList.remove("openModalContainer");
    }

    return(
      <div className="CardProduct">
        <Link to={prop.link}><img src={`./assets/products/${prop.image}`} /></Link>
        <h3>{prop.name}</h3>
        <p>{prop.price}</p>
        <div onClick={openModal} className="VistaPrevia">VISTA PREVIA</div>
        <div onClick={closeModal} className="ModalContainer">
          <div className="ModalProduct">
            <img src={`./assets/products/${prop.image}`} />
          </div>
        </div>
      </div>
    )
}

export default Product;
