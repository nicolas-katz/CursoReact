import React, { useState, useEffect } from 'react';
import Product from '../components/Product/Product';
import ListadoDeProductos from '../components/ListadoDeProductos/ListadoDeProductos';
import { useParams } from 'react-router';
import './CategoryPage.css';
import { Link } from 'react-router-dom';

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

    const ProductCategorie = catId;

    return(
        <div className="Contenedor">
             <div className="Pagination">
                <Link to="/">Inicio</Link><span> / {ProductCategorie}</span>
            </div>
            <div className="CategoriasContainer">
                {Productos.map((producto)=>{
                    return (
                        ProductCategorie === producto.categorie ? <Product key={producto.id} name={producto.name} price={producto.price} image={producto.img} modal={producto.img} link={`/products/${producto.id}`} />  : null
                    )
                })}
                {Productos.length !== 0 ? null : <div color="Dark" className="CargandoProductos">Cargando productos...</div>}
            </div>
        </div> 
    )
}

export default CategoryPage;