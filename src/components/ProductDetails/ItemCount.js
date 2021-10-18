import React, {useState} from "react";
import { FiHeart } from "react-icons/fi";

const ItemCount = ({stock, initial = 1, onAdd}) =>{
    const [count, setCount] = useState(initial)

    const ApretarButton = ()=>{
        onAdd(count)
        document.querySelector(".AñadirProducto").style.display="flex";
        closeToast()
    }

    const closeToast = ()=>{
        setTimeout(()=>{
            document.querySelector(".AñadirProducto").style.display="none";
        }, 1500)
    }
    
    return(
       <>
       <div className="AñadirProducto">Se ha añadido un producto a tu carrito</div>
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