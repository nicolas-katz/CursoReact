import React from 'react';
import './Cart.css';
import { BsBag } from "react-icons/bs";
import { IoIosArrowForward } from 'react-icons/io';

const Cart = ()=>{

    const OpenCart = ()=>{
        document.querySelector(".CartMenu").classList.add("active");
    }

    const CloseCart = ()=>{
        document.querySelector(".CartMenu").classList.remove("active");
    }

    return (

        <div className="CartContainer">
            <BsBag onClick={OpenCart} className="Cart" />
            <div className="CartMenu">
                <div className="CartHeader">
                    <IoIosArrowForward onClick={CloseCart} className="CloseCart" />
                    <h1>Carrito</h1>
                </div>
            </div>
        </div>

    )

}

export default Cart;