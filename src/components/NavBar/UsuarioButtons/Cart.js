import React, { useContext, useState } from 'react';
import './Cart.css';
import { BsBag } from "react-icons/bs";
import CartWidget from './CartWidget';
import CartContext from '../../../Context/CartContext';

const Cart = ()=>{

    const {handleCart, showCart, products} = useContext(CartContext)

    return (

        <div className="CartContainer">
            <BsBag onClick={handleCart} className="Cart" />
            <label>{products.map(p=>p.count) >= 1 ? products.map(p=>p.count) : 0}</label>
            <CartWidget show={showCart} close={handleCart} />
        </div>

    )

}

export default Cart;