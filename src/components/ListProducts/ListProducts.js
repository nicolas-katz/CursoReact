import './ListProducts.css';
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';
import ListadoDeProductos from '../ListadoDeProductos/ListadoDeProductos'
import { Link } from 'react-router-dom';
// import db from '../../firebase';
// import { collection, getDocs } from 'firebase/firestore';

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

    // async function getProducts(db) {
    //     const productsCol = collection(db, 'products');
    //     const productsSnapshot = await getDocs(productsCol);
    //     const productsList = productsSnapshot.docs.map(doc => doc.data());
    //     return setProductos(productsList);
    // }

    // useEffect(()=>{
    //     getProducts(db)
    // },[])

    return (
        <section className="SectionProductos">

            <div className="SectionProductosTitulo">
                <h2>EXPLORA ROOMIFY</h2>
                <h3>PRODUCTOS DESTACADOS</h3>
            </div>

            <div className="CardsContainer">
                {Productos.map((producto)=>{
                    return (
                        <Product key={producto.id} name={producto.name} price={producto.price}  link={`/products/${producto.id}`} />
                    )
                })}
                {Productos.length !== 0 ? null : <div color="Dark" className="CargandoProductos">Cargando productos...</div>}
            </div> 

            <div className="TodosLosProductos">
                <Link to="/products"><button>CONOCER TODOS LOS PRODUCTOS</button></Link>
            </div>

        </section>
    )
}

export default ListProducts;