import React, { useContext } from 'react';
import './Cart.css';
import { BsBag } from "react-icons/bs";
import CartWidget from './CartWidget';
import CartContext from '../../../Context/CartContext';

const Cart = ()=>{

    const {handleCart, showCart, products} = useContext(CartContext)

    let cantProductos = products.map(product=>product.count)

    let suma = null

    if(cantProductos.length >= 1)  {
        suma = cantProductos.reduce((acumulador, numero) => acumulador + numero);
        if(suma > 9) {
            document.querySelector("label").classList.add("active")
        } else {
            document.querySelector("label").classList.remove("active")
        }
    } else {
        suma = 0
    }

    return (

        <div className="CartContainer">
            <BsBag onClick={handleCart} className="Cart" />
            <label>{suma}</label>
            <CartWidget show={showCart} close={handleCart} />
        </div>

    )

}

export default Cart;