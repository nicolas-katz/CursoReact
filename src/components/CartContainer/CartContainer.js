import React, { useContext } from "react";
import './CartContainer.css'
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ProductosEnCarrito from "./ProductosEnCarrito";

const CartContainer = ()=>{

    const {products, clear, removeProduct} = useContext(CartContext);

    const removeCart = (prop)=>{
        removeProduct(prop)
    }

    return (
        <div className="Carrito">
            {products.length < 1 
            ? 
            <div>NO HAY PRODUCTOS <div><Link to="/products">SEGUIR COMPRANDO</Link></div></div>
            : <><div className="CarritoProductos">
                    <h3>MI CARRITO</h3>
                    <div className="CarritoProducto">
                        {products.map((product) => {
                            return (
                               <ProductosEnCarrito stock={product.product.stock} name={product.product.name} price={product.product.price} count={product.count} removeCart={removeCart}/>
                            );
                        })}
                    </div>
                </div><div className="OrderSummary">
                        <h3>RESUMEN DEL PEDIDO</h3>
                    </div>
                    <button onClick={()=> clear()}>BORRAR TODOS</button>
                    </>
            }
        </div>
    )
}

export default CartContainer;