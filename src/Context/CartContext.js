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
            cartElement.count = cartElement.count >= cartElement.product.stock ? cartElement.product.stock : cartElement.count + count
            if (cartElement.count > cartElement.product.stock) {cartElement.count = cartElement.product.stock}
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

    // Remuevo elementos del carrito
    const removeOneProduct = product => {
        if (isInCart(product)) {
          let cartElement = products.find(element => element.product.name === product.name)
          if (cartElement.count !== 1) {
            let cart = products
            cart.map(element => {
              if (element.product.name === product.name) {
                element.count = element.count - 1
              }
              return element
            })
            setProducts([...cart])
          }
        } 
    }

    // Vaciar carrito
    const clear = ()=>{
      setProducts([])
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
        removeOneProduct,
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