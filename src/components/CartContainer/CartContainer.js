import React, { useState } from "react";
import ItemCount from "../ProductDetails/ItemCount";
import './CartContainer.css'

const CartContainer = ()=>{
    
    const [productPrice, setProductPrice] = useState(0);

    return (
        <div className="Carrito">
            <div className="CartProducts">
                <h3>MI CARRITO</h3>
                <div className="ProductsContainer">
                    <div className="InfoProduct">
                        <img />
                        <div className="Data">

                        </div>
                    </div>
                    <div className="Account">
                        <ItemCount />
                        <span>{productPrice * 20}</span>
                    </div>
                </div>
            </div>
            <div className="OrderSummary">
                <h3>RESUMEN DEL PEDIDO</h3>
            </div>
        </div>
    )
}

export default CartContainer;