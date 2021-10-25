import React, { useContext } from "react";
import './Cart.css';
import { IoIosArrowForward } from 'react-icons/io';
import CartContext from "../../../Context/CartContext";
import { IoCloseCircleOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";
import IMAGES from "../../../assets/IMAGES";
import CustomImage from "../../CustomImage/CustomImage";
import { BsLock, BsBag } from "react-icons/bs";

const CartWidget = ({show, close})=>{

    const {products, removeProduct, price, handleCart} = useContext(CartContext);

    const arrImg = [
        IMAGES.img1,
    ]

    return(
        <div className={`CartWidget ${show ? 'active' : ''}`}>
            <div className="CartMenu">
                <div className="CartHeader">
                    <IoIosArrowForward onClick={close} className="CloseCart" />
                    <h1>Carrito</h1>
                </div>
                <div className="CartProducts">
                    <div className="CartProductsContainer">
                        {products.map((product)=>{
                            return(
                                <div className="ProductInCart">
                                    <div className="ProductDataContainer">
                                        {arrImg && arrImg.map(image => <Link to={`/products/${product.product.id}`} onClick={handleCart}><CustomImage {...image} /></Link>)}
                                        <div className="ProductData">
                                            <h3>{product.product.name}</h3>
                                            <h4>${product.product.price}</h4>
                                            <h4>x{product.count}</h4>
                                        </div>
                                    </div>
                                    <div className="removeIconContainer">
                                        <IoCloseCircleOutline onClick={()=> removeProduct(product.product)} className="removeIcon" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {products.length < 1 
                    ? 
                        <div className="NoHayProductos">
                            EL CARRITO ESTA VACIO
                        </div> 
                    : 
                        <div className="IrAlCarrito">
                            <span>SUBTOTAL: ${price}</span>
                            <Link to="/cart"><button onClick={handleCart}><BsBag /> VER CARRITO</button></Link>
                            <Link to="/endPurchase"><button onClick={handleCart}><BsLock /> FINALIZAR COMPRA</button></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CartWidget;