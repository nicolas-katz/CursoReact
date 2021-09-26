import React, { useState } from 'react';

const CartButton = () => {
    const [sumarProducto, setSumarProducto] = useState(0);

    const sumarAlCarrito = ()=>{
        sumarProducto >= 9 ? setSumarProducto(9) : setSumarProducto(sumarProducto + 1)
    }

    return (
        <div>
            <button onClick={sumarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default CartButton;