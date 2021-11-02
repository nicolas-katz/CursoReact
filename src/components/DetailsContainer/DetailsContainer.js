import React, { useState, useEffect } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import './DetailsContainer.css';
import { useParams } from 'react-router';
import db from '../../firebase';
import { getDoc, doc } from 'firebase/firestore';

const DetailsContainer = ()=>{
    
    const {productId} = useParams()
    const [Productos, setProductos] = useState([]);

    async function getProduct(db) {
        const docRef = doc(db, "ListadoDeProductos", productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setProductos(docSnap.data())
        }
    }

    useEffect(()=>{
      getProduct(db)
    }, [])

    return(
        <div className="DetailsContainer">
           {Productos.map((producto)=>{
                    return (
                        productId === parseInt(producto.id) ?
                         <ProductDetails key={producto.id} name={producto.name} price={producto.price} image={producto.img} modal={producto.img} stock={producto.stock} link={`/categories/${producto.category}`} category={producto.category} id={producto.id} />
                        : null
                    )
                })}
            {Productos.length !== 0 ? null : <div className="CargandoProductos">Cargando productos...</div>}
        </div>
    )

}

export default DetailsContainer;