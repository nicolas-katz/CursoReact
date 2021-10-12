import React, { useContext, useState } from 'react';
import './CartyFavMenu.css';
import { BsBag } from "react-icons/bs";
import CartWidget from './CartWidget';
import CartContext from '../../../Context/CartContext';

const Cart = ()=>{

    const [showCart, setShowCart] = useState(false);
    
    const handleCart = ()=>{
        !showCart && products.length >= 1 ? setShowCart(true) : setShowCart(false);
    }

    const {products} = useContext(CartContext)

    return (

        <div className="CartContainer">
            <BsBag onClick={handleCart} className="Cart" />
            <CartWidget show={showCart} close={handleCart} />
        </div>

    )

}

export default Cart;