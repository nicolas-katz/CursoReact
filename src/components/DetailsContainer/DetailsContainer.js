import React, { useState, useEffect } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import './DetailsContainer.css';
import ListadoDeProductos from '../ListadoDeProductos/ListadoDeProductos';
import { useParams } from 'react-router';

const DetailsContainer = ()=>{
    
    const {productId} = useParams()
    const [Productos, setProductos] = useState([]);

    const getProducts = new Promise( resolve=>{
        setTimeout(()=>{
            resolve(ListadoDeProductos)
        }, 1000)
    }) 

    useEffect(()=>{
        getProducts.then( data=>{
            setProductos(data)
        })
    }, [productId])

    const ProductId = parseInt(productId);

    return(
        <div className="DetailsContainer">
           {Productos.map((producto)=>{
                    return (
                        ProductId === producto.id ? <ProductDetails key={producto.id} name={producto.name} price={producto.price} image={producto.img} modal={producto.img} /> : null
                    )
                })}
                {Productos.length !== 0 ? null : <div color="Dark" className="CargandoProductos">Cargando productos...</div>}
        </div>
    )

}

export default DetailsContainer;