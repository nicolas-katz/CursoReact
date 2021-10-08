import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext({});

const CartProvider = ({children})=>{

    //  Agrego productos al carrito
    const [products , setProducts] = useState([])

    const addProduct = (product) => {
        setProducts([...products, product])
    }

    // Item count
    const [cantidadProducto, setCantidadProducto] = useState(1)
    
    const onLess = ()=>{
        cantidadProducto <= 1 ? setCantidadProducto(1) : setCantidadProducto(cantidadProducto - 1)
    }

    const onAdd = ()=>{
        cantidadProducto >= 10 ? setCantidadProducto(10) : setCantidadProducto(cantidadProducto + 1)
    }

    const data = {
        products,
        addProduct,
        onAdd,
        onLess,
        cantidadProducto
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;