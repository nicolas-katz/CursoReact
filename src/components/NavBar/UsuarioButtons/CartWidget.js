import React, { useContext } from "react";
import './CartyFavMenu.css';
import { IoIosArrowForward } from 'react-icons/io';
import CartContext from "../../../Context/CartContext";
import { MdClose } from 'react-icons/md';
import { Link } from "react-router-dom";
import ItemCount from "../../ProductDetails/ItemCount";

const CartWidget = ({show, close})=>{

    const {products, onAdd, onLess, cantidadProducto} = useContext(CartContext);

    return(
        <div className={`CartWidget ${show ? 'active' : ''}`}>
            <div className="CartMenu">
                <div className="CartHeader">
                    <IoIosArrowForward onClick={close} className="CloseCart" />
                    <h1>Carrito</h1>
                </div>
                <div className="CartProducts">
                    {products.map((product)=>{
                        return(
                            <div className="ProductInCart">
                                <div>
                                    <img src={`./assets/products/${product.image}`} />
                                    <div className="ProductData">
                                        <h3>{product.name}</h3>
                                        <h4>{product.price}</h4>
                                        <ItemCount quantity={cantidadProducto} onAdd={onAdd} onLess={onLess} />
                                    </div>
                                </div>
                                <div>
                                    <MdClose className="MdClose" />
                                </div>
                            </div>
                        )
                    })}
                    {products.length < 1 
                    ? 
                        <div className="NoHayProductos">
                            EL CARRITO ESTA VACIO
                        </div> 
                    : 
                        null
                    }
                </div>
                <div className="IrAlCarrito">
                    <Link to="/cart"><button>VER CARRITO</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CartWidget;