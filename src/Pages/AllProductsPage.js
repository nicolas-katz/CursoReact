import React, { useState, useEffect } from 'react';
import Product from '../components/Product/Product';
import './CategoryPage.css';
import { Link } from 'react-router-dom';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const AllProductsPage = ()=>{
    const [Productos, setProductos] = useState([]);

    async function getProducts(db) {
        const productsCol = collection(db, 'ListadoDeProductos');
        const productsSnapshot = await getDocs(productsCol);
        const productsList = productsSnapshot.docs.map(doc => doc.data());
        return setProductos(productsList);
    }

    useEffect(()=>{
        getProducts(db)
    },[])

    return(
        <div className="Contenedor">
            <div className="Pagination">
                <Link to="/">Inicio</Link> / <span>Productos</span>
            </div>
            <div className="CategoriasContainer">
                {Productos.map((producto)=>{
                    return (
                        <Product key={producto.id} name={producto.name} price={producto.price} image={producto.img} modal={producto.img} link={`/products/${producto.id}`} />
                    )
                })}
                {Productos.length !== 0 ? null : <div color="Dark" className="CargandoProductos">Cargando productos...</div>}
            </div>
        </div> 
    )
}

export default AllProductsPage;