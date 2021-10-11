import React, { useContext } from "react";
import ItemCount from "../ProductDetails/ItemCount";
import './CartContainer.css'
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

const CartContainer = ()=>{

    const {products, onAdd, onLess, cantidadProducto, removeProduct, clear} = useContext(CartContext);
    
    const removeCart = ()=>{
        removeProduct(products)
    }

    const clearAll = ()=>{
        clear()
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
                                <div className="ProductoEnCarrito">
                                    <div className="Producto">
                                        <img src={`./assets/products/${product.image}`} />
                                        <div className="ProductosDatos">
                                            <h3>{product.name}</h3>
                                            <h4>{product.price}</h4>
                                        </div>
                                    </div>
                                    <div className="ContadorYPrecio">
                                        <ItemCount quantity={cantidadProducto} onAdd={onAdd} onLess={onLess} />
                                        <span>Total</span>
                                        <MdClose onClick={removeCart} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div><div className="OrderSummary">
                        <h3>RESUMEN DEL PEDIDO</h3>
                    </div>
                    <button onClick={clearAll}>BORRAR TODOS</button>
                    </>
            }
        </div>
    )
}

export default CartContainer;