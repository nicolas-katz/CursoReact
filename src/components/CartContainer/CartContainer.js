import React, { useContext } from "react";
import './CartContainer.css'
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ProductosEnCarrito from "./ProductosEnCarrito";
import {BsLock} from 'react-icons/bs'

const CartContainer = ()=>{

    const {products, removeProduct, price} = useContext(CartContext);

    const removeCart = (prop)=>{
        removeProduct(prop)
    }

    return (
        <div className="Carrito">
            {products.length < 1 
            ? 
            <div className="SeguirComprando">EL CARRITO ESTÁ VACÍO <div><Link to="/products">SEGUIR COMPRANDO</Link></div></div>
            : 
            <>
                <div className="CarritoProductos">
                    <h3>MI CARRITO</h3>
                    <div className="CarritoProducto">
                        {products.map((product) => {
                            return (
                               <ProductosEnCarrito stock={product.product.stock} name={product.product.name} price={product.product.price} count={product.count} removeCart={removeCart}/>
                            );
                        })}
                    </div>
                </div>
                <div className="OrderSummary">
                    <h3>RESUMEN DEL PEDIDO</h3>
                    <div>
                        <h4>SUBTOTAL</h4>
                        <span>${price}</span>
                    </div>
                    <div>
                        <h4>ENVIO</h4>
                        <span>$500</span>
                    </div>
                    <div className="TotalPrice">
                        <h4>TOTAL</h4>
                        <span>${price + 500}</span>
                    </div>
                    <h5>IMPUESTO INCLUIDO</h5>
                    <button> <BsLock /> FINALIZAR COMPRA</button>
                </div>
            </>
            }
        </div>
    )
}

export default CartContainer;