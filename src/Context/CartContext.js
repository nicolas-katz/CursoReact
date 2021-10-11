import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext({});

const CartProvider = ({children})=>{

    const isInCart = (product)=>{
        return products && products.some(element => element.product.id === product.id)
    }

    //  Agrego productos al carrito
    const [products , setProducts] = useState([])

    const addProduct = (product, count) => {
        let cartElement = {product, count}
        let cartAux = []
        if(isInCart(product)){
            cartElement = products.find(element => element.product.id === product.id)
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
            const CartProducts = products.filter(element => element.product.id !== product.id) || []
            setProducts([...CartProducts])
        }
    }

    // Borro todos los productos
    const clear = () => {
        return setProducts([])
      }

    // Item count
    const [cantidadProducto, setCantidadProducto] = useState(1)
    
    const onLess = ()=>{
        cantidadProducto <= 1 ? setCantidadProducto(1) : setCantidadProducto(cantidadProducto - 1)
    }

    const onAdd = ()=>{
        cantidadProducto >= 10 ? setCantidadProducto(10) : setCantidadProducto(cantidadProducto + 1)
    }

    // Enviar context a la aplicación
    const data = {
        products,
        addProduct,
        onAdd,
        onLess,
        cantidadProducto,
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