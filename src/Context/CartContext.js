import React, { createContext, useState, useEffect } from "react";

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

    // Subtotal
    const [price, setPrice] = useState(0)

    useEffect(()=>{
        setPrice(handleTotalPrice())
    },[products])

    const handleTotalPriceByItem = () => {
        let newCartItems = products
        const test = newCartItems.map(element => {
          return {
            ...element,
            price: element.product.price * element.count
          }
        })    
        return test
    } 

    const handleTotalPrice = () => {
        const cartAux = handleTotalPriceByItem()
        const initialValue = 0
        return (
          cartAux &&
          cartAux.reduce(
            (accumulator, currentValue) => {          
              return accumulator + currentValue.price                              
            },
            initialValue
          )    
        )
    }

    // Abrir CartView
    const [showCart, setShowCart] = useState(false);
    
    const handleCart = ()=>{
        !showCart ? setShowCart(true) : setShowCart(false);
    }

    // Cartcount
    const changeCount = (counter)=>{
        
    }

    // Enviar context a la aplicación
    const data = {
        products,
        addProduct,
        removeProduct,
        isInCart,
        handleTotalPriceByItem,
        price,
        showCart,
        handleCart,
        changeCount
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;