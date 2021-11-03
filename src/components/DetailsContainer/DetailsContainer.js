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
            setProductos(docSnap.data())
        }
    }

    useEffect(()=>{
      getProduct(db)
    }, [])

    return(
        <div className="DetailsContainer">
                         <ProductDetails key={Productos.id} name={Productos.name} price={Productos.price} image={Productos.img} modal={Productos.img} stock={Productos.stock} link={`/categories/${Productos.category}`} category={Productos.category} id={Productos.id} />
        </div>
    )

}

export default DetailsContainer;