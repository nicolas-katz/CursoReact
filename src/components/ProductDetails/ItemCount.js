import React, {useContext, useState} from "react";
import { FiHeart } from "react-icons/fi";
import CartContext from "../../Context/CartContext";

const ItemCount = ({stock, initial = 1, onAdd}) =>{

    const {handleCart} = useContext(CartContext)

    const [count, setCount] = useState(initial)

    const ApretarButton = ()=>{
        onAdd(count)
        handleCart()
        setCount(initial)
    }
    
    return(
       <>
        <div className="CantidadProducto">
            <span onClick={() => {count !== initial ? setCount(count - 1) : setCount(initial)}}>-</span>
			<input value={count >= stock ? stock : count} />
			<span onClick={() =>{count !== stock ? setCount(count + 1) : setCount(stock)}}>+</span>
        </div>
        <div className="Agregar">
            <button onClick={ApretarButton}>AGREGAR AL CARRITO</button>
            <FiHeart className="AgregarFav" />
        </div>
       </>
    )

}

export default ItemCount;