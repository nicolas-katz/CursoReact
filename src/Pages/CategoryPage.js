import React, { useState, useEffect } from 'react';
import Product from '../components/Product/Product';
import ListadoDeProductos from '../components/ListadoDeProductos/ListadoDeProductos';
import { useParams } from 'react-router';

const CategoryPage = ()=>{
    const [Productos, setProductos] = useState([]);
    const {catId} = useParams();

    const getProducts = new Promise( resolve=>{
        setTimeout(()=>{
            resolve(ListadoDeProductos)
        }, 2000)
    }) 

    useEffect(()=>{
        
        getProducts.then( data=>{
            setProductos(data)
        })
    }, [catId])

    const ProductCategorie = catId;

    return(
        <div>
            {Productos.map((producto)=>{
                return (
                    ProductCategorie === producto.categorie ? <Product key={producto.id} name={producto.name} price={producto.price} image={producto.img} modal={producto.img} /> : null
                )
            })}
            {Productos.length !== 0 ? null : <div color="Dark" className="CircularProgress">Cargando productos...</div>}
        </div> 
    )
}

export default CategoryPage;