import React, { useContext } from "react";
import './CartyFavMenu.css';
import { IoIosArrowForward } from 'react-icons/io';
import CartContext from "../../../Context/CartContext";
import { MdClose } from 'react-icons/md';
import { Link } from "react-router-dom";
import IMAGES from "../../../assets/IMAGES";
import CustomImage from "../../CustomImage/CustomImage";

const CartWidget = ({show, close})=>{

    const {products, removeProduct} = useContext(CartContext);

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
                    {products.map((product)=>{
                        return(
                            <div className="ProductInCart">
                                <div>
                                    {arrImg && arrImg.map(image => <CustomImage {...image} />)}
                                    <div className="ProductData">
                                        <h3>{product.product.name}</h3>
                                        <h4>{product.product.price}</h4>
                                        <span>{product.count >= product.product.stock ? product.product.stock : product.count }x{product.product.price}</span>
                                    </div>
                                </div>
                                <div>
                                    <MdClose onClick={()=> removeProduct(product.product)} className="MdClose" />
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