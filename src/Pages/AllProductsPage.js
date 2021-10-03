import React, { useState, useEffect } from 'react';
import Product from '../components/Product/Product';
import ListadoDeProductos from '../components/ListadoDeProductos/ListadoDeProductos';
import './CategoryPage.css';
import { Link } from 'react-router-dom';

const AllProductsPage = ()=>{
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
    }, [])

    return(
        <div className="Contenedor">
            <div className="Pagination">
                <Link to="/">Inicio</Link><span> / All Products</span>
            </div>
            <div className="CategoriasContainer">
                {Productos.map((producto)=>{
                    return (
                        <Product key={producto.id} name={producto.name} price={producto.price} image={producto.img} modal={producto.img} link={`/products/${producto.id}`} />
                    )
                })}
                {Productos.length !== 0 ? null : <div color="Dark" className="CircularProgress">Cargando productos...</div>}
            </div>
        </div> 
    )
}

export default AllProductsPage;