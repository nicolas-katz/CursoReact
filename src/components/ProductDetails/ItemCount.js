import React, {useState} from "react";
import { FiHeart } from "react-icons/fi";

const ItemCount = ({stock, initial = 1, onAdd, total}) =>{
    const [count, setCount] = useState(initial)
    
    return(
       <>
        <div className="CantidadProducto">
            <span onClick={() => {count !== initial ? setCount(count - 1) : setCount(initial)}}>-</span>
			<input value={stock === 0 ? 'SIN STOCK' : count} />
			<span onClick={() =>{count !== stock ? setCount(count + 1) : setCount(stock)}}>+</span>
        </div>
        <span className="totalPrice">{total * count}</span>
        <div className="Agregar">
            <button onClick={()=> onAdd(count)}>AGREGAR AL CARRITO</button>
            <FiHeart className="AgregarFav" />
        </div>
       </>
    )

}

export default ItemCount;