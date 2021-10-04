import React from "react";

const ItemCount = prop =>{

    return(
        <div className="CantidadProducto">
            <input value={prop.quantity} />
            <div className="SumarYRestar">
                <span onClick={prop.onAdd}>+</span>
                <span onClick={prop.onLess}>-</span>
            </div>
        </div>
    )

}

export default ItemCount;