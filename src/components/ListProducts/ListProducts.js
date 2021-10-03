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
        }, 1000)
    }) 

    useEffect(()=>{
        getProducts.then( data=>{
            setProductos(data)
        })
    }, [])

    return (
        <section className="SectionProductos">

            <div className="SectionProductosTitulo">
                <h2>EXPLORA ROOMIFY</h2>
                <h3>PRODUCTOS DESTACADOS</h3>
            </div>

            <div className="CardsContainer">
                {Productos.map((producto)=>{
                    return (
                        producto.homePage === "Yes" ? <Product key={producto.id} name={producto.name} price={producto.price} image={producto.img} modal={producto.img} /> : null
                    )
                })}
                {Productos.length !== 0 ? null : <div color="Dark" className="CargandoProductos">Cargando productos...</div>}
            </div> 

            <div className="TodosLosProductos">
                <Link to="/allproducts"><button>CONOCER TODOS LOS PRODUCTOS</button></Link>
            </div>

        </section>
    )
}

export default ListProducts;