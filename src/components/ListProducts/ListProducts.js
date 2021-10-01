import './ListProducts.css';
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import ListadoDeProductos from '../ListadoDeProductos/ListadoDeProductos';

const ListProducts = ()=> {
    const [Productos, setProductos] = useState([]);

    const getProducts = new Promise( resolve=>{
        setTimeout(()=>{
            resolve(ListadoDeProductos)
        }, 3000)
    }) 

    useEffect(()=>{
        getProducts.then( data=>{
            setProductos(data)
        })
    }, [])

    return (
        <section className="SectionProductos">
            <div className="SectionProductosTitulo">
                <h2>ELIGE, PAGA Y RECIBE TU PEDIDO <strong>SIN MOVERTE DE TU CASA.</strong></h2>
            </div>
            <div className="CardsContainer">
                {Productos.map((producto)=>{
                    return (
                        producto.homePage === "Yes" ? <Product key={producto.id} name={producto.name} price={producto.price} image={producto.img} modal={producto.img} link={`/products/${producto.id}`} /> : null
                    )
                })}
                {Productos.length !== 0 ? null : <div color="Dark" className="CircularProgress">Cargando productos...</div>}
            </div> 
            <div className="TodosLosProductos">
                <Link to="/allproducts"><button>Ver más &rarr;</button></Link>
            </div>
        </section>
    )
}

export default ListProducts;