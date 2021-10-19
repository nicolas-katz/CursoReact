import React, { useContext } from "react";
import CustomImage from "../CustomImage/CustomImage";
import IMAGES from "../../assets/IMAGES";
import { IoCloseCircleOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";
import CartCount from "./CartCount";
import CartContext from "../../Context/CartContext";

const ProductosEnCarrito = (prop)=>{

    const arrImg = [
        IMAGES.img1,
    ]

    const {changeCount} = useContext(CartContext)

    return(
        <div className="ProductoEnCarrito">
            <div className="Producto">
                {arrImg && arrImg.map(image => <Link to={`/products/${prop.id}`}><CustomImage {...image} /></Link>)}
                <div className="ProductosDatos">
                    <h3>{prop.name}</h3>
                    <h4>${prop.price}</h4>
                    <span>x{prop.count}</span>
                </div>
            </div>
            <div className="CartCountContainer">
                <CartCount count={prop.count} stock={prop.stock} changeCount={changeCount} />
            </div>
            <div className="ContadorYPrecio">
                <IoCloseCircleOutline onClick={()=> prop.removeCart(prop)} />
            </div>
        </div>
    )
}

export default ProductosEnCarrito