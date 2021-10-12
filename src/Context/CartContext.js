import React, { createContext, useState } from "react";

const CartContext = createContext({});

const CartProvider = ({children})=>{

    const isInCart = (product)=>{
        return products && products.some(element => element.product.name === product.name)
    }

    //  Agrego productos al carrito
    const [products , setProducts] = useState([])

    const addProduct = (product, count) => {
        let cartElement = {product, count}
        let cartAux = []
        if(isInCart(product)){
            cartElement = products.find(element => element.product.name === product.name)
            cartElement.count = cartElement.count + count
            cartAux = [...products]
        } else{
            cartAux = [cartElement, ...products]
        }
        setProducts(cartAux)
    }

    // Borro producto del carrito
    const removeProduct = (product)=>{
        if(isInCart(product)) {
            const CartProducts = products.filter(element => element.product.name !== product.name) || []
            setProducts([...CartProducts])
        }
    }

    // Borro todos los productos
    const clear = () => {
        setProducts([])
    }

    // Enviar context a la aplicación
    const data = {
        products,
        addProduct,
        removeProduct,
        isInCart,
        clear
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;