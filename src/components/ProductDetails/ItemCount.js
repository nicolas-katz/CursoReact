import React from "react";

const ItemCount = ({quantity, onAdd, onLess}) =>{
    
    return(
        <div className="CantidadProducto">
            <input value={quantity} />
            <div className="SumarYRestar">
                <span onClick={onAdd}>+</span>
                <span onClick={onLess}>-</span>
            </div>
        </div>
    )

}

export default ItemCount;