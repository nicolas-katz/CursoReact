import React, { useContext } from "react";
import ItemCount from "../ProductDetails/ItemCount";
import './CartContainer.css'
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import IMAGES from "../../assets/IMAGES";
import CustomImage from "../CustomImage/CustomImage";

const CartContainer = ()=>{

    const {products, removeProduct, clear} = useContext(CartContext);

    const arrImg = [
        IMAGES.img1,
    ]

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
                                        {arrImg && arrImg.map(image => <CustomImage {...image} />)}
                                        <div className="ProductosDatos">
                                            <h3>{product.product.name}</h3>
                                            <h4>{product.product.price}</h4>
                                            <span>x{product.count}</span>
                                        </div>
                                    </div>
                                    <div className="ContadorYPrecio">
                                        <ItemCount stock={product.product.stock} />
                                        <span>{product.count * product.product.price}</span>
                                        <MdClose onClick={()=> removeProduct(product.product)} />
                                    </div>
                                </div>
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