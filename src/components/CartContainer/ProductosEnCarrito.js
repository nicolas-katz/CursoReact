import React, {useContext} from "react";
import CustomImage from "../CustomImage/CustomImage";
import IMAGES from "../../assets/IMAGES";
import CartContext from "../../Context/CartContext";
import { IoCloseCircleOutline } from 'react-icons/io5';

const ProductosEnCarrito = (prop)=>{

    const {addProduct} = useContext(CartContext);

    const handleOnAdd = count => {
        addProduct(prop, count)
    }

    const arrImg = [
        IMAGES.img1,
    ]

    return(
        <div className="ProductoEnCarrito">
            <div className="Producto">
                {arrImg && arrImg.map(image => <CustomImage {...image} />)}
                <div className="ProductosDatos">
                    <h3>{prop.name}</h3>
                    <h4>${prop.price}</h4>
                    <span>x{prop.count}</span>
                </div>
            </div>
            <div className="ContadorYPrecio">
                <IoCloseCircleOutline onClick={()=> prop.removeCart(prop)} />
            </div>
        </div>
    )
}

export default ProductosEnCarrito