import React, { useContext, useState } from "react";
import CustomImage from "../CustomImage/CustomImage";
import IMAGES from "../../assets/IMAGES";
import { IoCloseCircleOutline } from 'react-icons/io5';
import { Link, useParams } from "react-router-dom";
import ItemCount from '../ProductDetails/ItemCount'
import CartContext from "../../Context/CartContext";

const ProductosEnCarrito = (prop)=>{

    const arrImg = [
        IMAGES.img1,
    ]

    const {productId} = useParams()

    const {addProduct, removeOneProduct} = useContext(CartContext)

    const handleOnAdd = count => {
        addProduct(prop, count)
    }

    const handleOnRemove = count => {
        removeOneProduct(prop, count)
    }

    return(
        <div className="ProductoEnCarrito">
            <div className="Producto">
                {arrImg && arrImg.map(image => <CustomImage {...image} />)}
                <div className="ProductosDatos">
                    <h3>{prop.name}</h3>
                    <h4>${prop.price}</h4>
                </div>
            </div>
            <ItemCount stock={prop.stock} onAdd={handleOnAdd} onRemove={handleOnRemove} input={prop.count} />
            <div className="ContadorYPrecio">
                <IoCloseCircleOutline onClick={()=> prop.removeCart(prop)} />
            </div>
        </div>
    )
}

export default ProductosEnCarrito