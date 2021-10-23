import React, { useContext } from 'react';
import './Cart.css';
import { BsBag } from "react-icons/bs";
import CartWidget from './CartWidget';
import CartContext from '../../../Context/CartContext';

const Cart = ()=>{

    const {handleCart, showCart, suma} = useContext(CartContext)

    return (

        <div className="CartContainer">
            <BsBag onClick={handleCart} className="Cart" />
            <label>{suma}</label>
            <CartWidget show={showCart} close={handleCart} />
        </div>

    )

}

export default Cart;