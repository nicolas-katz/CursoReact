import React, {useContext, useState} from "react";
import { FiHeart } from "react-icons/fi";
import CartContext from "../../Context/CartContext";

const ItemCount = ({stock, initial = 1, onAdd, onRemove, input}) =>{

    const {handleCart} = useContext(CartContext)

    const [count, setCount] = useState(initial)

    const ApretarButton = ()=>{
        onAdd(count)
        setCount(initial)
        handleCart()
    }

    const addCartCount = ()=>{
        onAdd(count)
    }

    const removeCartCount = ()=>{
        onRemove(count)
    }
    
    return(
       <>
        <div className="CantidadProducto">
            <div className="removeOne">
                <span onClick={() => {count !== initial ? setCount(count - 1) : setCount(initial)}}>-</span>
                <span className="CartCount" onClick={removeCartCount}>-</span>
            </div>
			<input value={count >= stock ? stock : count} />
            <h4>{input}</h4>
            <div className="addOne">
                <span onClick={()=> count !== stock ? setCount(count + 1) : setCount(stock)}>+</span>
                <span className="CartCount" onClick={addCartCount}>+</span>
            </div>
        </div>
        <div className="Agregar">
            <button onClick={ApretarButton}>AGREGAR AL CARRITO</button>
            <FiHeart className="AgregarFav" />
        </div>
       </>
    )

}

export default ItemCount;