import React, { useState } from 'react';
import './CartyFavMenu.css';
import { BsBag } from "react-icons/bs";
import CartWidget from './CartWidget';

const Cart = (prop, count)=>{

    const [showCart, setShowCart] = useState(false);
    
    const handleCart = ()=>{
        !showCart ? setShowCart(true) : setShowCart(false);
    }

    return (

        <div className="CartContainer">
            <BsBag onClick={handleCart} className="Cart" />
            <CartWidget show={showCart} close={handleCart} prop={prop} count={count} />
        </div>

    )

}

export default Cart;