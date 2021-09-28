import React, { useState } from 'react';

const CartButton = () => {
    const [sumarProducto, setSumarProducto] = useState(0);

    const sumarAlCarrito = ()=>{
        sumarProducto >= 9 ? setSumarProducto(9) : setSumarProducto(sumarProducto + 1)
    }

    return (
        <div className="CartButtonContainer">
            <button onClick={sumarAlCarrito}>COMPRAR</button>
            <button>VER</button>
        </div>
    )
}

export default CartButton;