import React, { useState, useEffect } from 'react';
import Product from '../components/Product/Product';
import { useParams } from 'react-router';
import './CategoryPage.css';
import ListadoDeProductos from '../components/ListadoDeProductos/ListadoDeProductos'
import { Link } from 'react-router-dom';
// import db from '../Firebase';
// import { collection, getDocs } from 'firebase/firestore';

const CategoryPage = ()=>{
    const [Productos, setProductos] = useState([]);
    const {catId} = useParams();

    const getProducts = new Promise( resolve=>{
        setTimeout(()=>{
            resolve(ListadoDeProductos)
        }, 1000)
    }) 

    useEffect(()=>{
        
        getProducts.then( data=>{
            setProductos(data)
        })
    }, [catId])

    // async function getProducts(db) {
    //     const productsCol = collection(db, 'ListadoDeProductos');
    //     const productsSnapshot = await getDocs(productsCol);
    //     const productsList = productsSnapshot.docs.map(doc => doc.data());
    //     return setProductos(productsList);
    // }

    // useEffect(()=>{
    //     getProducts(db)
    // },[])

    const ProductCategory = catId;

    return(
        <div className="Contenedor">
            <div className="Pagination">
                <Link to="/">Inicio</Link> / <Link to="/products">PRODUCTOS</Link> / <span>{ProductCategory}</span>
            </div>
            <div className="CategoriasContainer">
                {Productos.map((producto)=>{
                    return (
                        ProductCategory === producto.category ? <Product key={producto.id} name={producto.name} price={producto.price} image={producto.img} modal={producto.img} link={`/products/${producto.id}`} />  : null
                    )
                })}
                {Productos.length !== 0 ? null : <div className="CargandoProductos">Cargando productos...</div>}
            </div>
        </div> 
    )
}

export default CategoryPage;