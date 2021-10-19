import './Product.css';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomImage from '../CustomImage/CustomImage';
import IMAGES from '../../assets/IMAGES';

const Product = prop => {

    const openModal = ()=> {
      document.querySelector(".ModalContainer").classList.add("openModalContainer");
    }

    const closeModal = ()=> {
      document.querySelector(".ModalContainer").classList.remove("openModalContainer");
    }

    const arrImg = [
      IMAGES.img1,
    ]

    return(
      <div className="CardProduct">
        <Link to={prop.link}>{arrImg && arrImg.map(image => <CustomImage {...image} />)}</Link>
        <h3>{prop.name}</h3>
        <p>${prop.price}</p>
        <div onClick={openModal} className="VistaPrevia">VISTA PREVIA</div>
        <div onClick={closeModal} className="ModalContainer">
          <div className="ModalProduct">
            {arrImg && arrImg.map(image => <CustomImage {...image} />)}
          </div>
        </div>
      </div>
    )
}

export default Product;
