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
                               <ProductosEnCarrito stock={product.product.stock} name={product.product.name} price={product.product.price} count={product.count} removeCart={removeCart} id={product.product.id} />
                            );
                        })}
                    </div>
                </div>
                <div className="OrderSummaryContainer">
                    <div className="OrderSummary">
                        <h3>RESUMEN DEL PEDIDO</h3>
                        <div>
                            <h4>SUBTOTAL</h4>
                            <span>${price}</span>
                        </div>
                        <div>
                            <h4>ENVIO</h4>
                            <span>GRATIS</span>
                        </div>
                        <div className="TotalPrice">
                            <h4>TOTAL</h4>
                            <span>${price}</span>
                        </div>
                        <h5>IMPUESTO INCLUIDO</h5>
                        <Link to="/endPurchase"><button><BsLock /> FINALIZAR COMPRA</button></Link>
                    </div>
                </div>
            </>
            }
        </div>
    )
}

export default CartContainer;