import './Product.css';
import React from 'react';
import { FaHeart } from "react-icons/fa";
import { MdOpenWith } from "react-icons/md";
import CartButton from './CartButton';

const Product = prop => {

    const openModal = ()=> {
      document.querySelector(".ModalContainer").classList.add("openModalContainer");
    }

    const closeModal = ()=> {
      document.querySelector(".ModalContainer").classList.remove("openModalContainer");
    }

    return(
      <div className="CardProduct">
        <img onClick={openModal} src={`./assets/products/${prop.image}`} />
        <h3>{prop.name}</h3>
        <p>{prop.price}</p>
        <CartButton />
        <div onClick={closeModal} className="ModalContainer">
          <div className="ModalProduct">
            <img src={`./assets/products/${prop.image}`} />
          </div>
        </div>
      </div>
    )
}

export default Product;
