import React from "react";

const ItemCount = ({quantity, onAdd, onLess}) =>{
    
    return(
        <div className="CantidadProducto">
            <span onClick={onLess}>-</span>
            <input value={quantity} />
            <span onClick={onAdd}>+</span>
        </div>
    )

}

export default ItemCount;