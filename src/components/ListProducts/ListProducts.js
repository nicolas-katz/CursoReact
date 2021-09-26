import './ListProducts.css';
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';
import { RiSendPlaneLine } from 'react-icons/ri';
import { CircularProgress } from '@material-ui/core';

const ListProducts = ()=> {
    const [Productos, setProductos] = useState([]);

    const getProducts = new Promise( resolve=>{
        setTimeout(()=>{
            const moskProducts = [
                {
                    id: 1,
                    name: "iPhone 11",
                    img: "portada2.jpg",
                    price: "$180.000,00",
                    stock: "20",
                    description: ""
                },
                {
                    id: 2,
                    name: "iPhone X",
                    img: "portada3.jpg",
                    price: "$120.000,00",
                    stock: "15",
                    description: ""
                },
                {
                    id: 3,
                    name: "iPhone 12",
                    img: "portada.jpg",
                    price: "$200.000,00",
                    stock: "10",
                    description: ""
                },
                {
                    id: 4,
                    name: "iPad Pro",
                    img: "portada.jpg",
                    price: "$150.000,00",
                    stock: "8",
                    description: ""
                },
                {
                    id: 5,
                    name: "MacBook Pro",
                    img: "portada.jpg",
                    price: "$340.000,00",
                    stock: "5",
                    description: ""
                },
                {
                    id: 6,
                    name: "iPad Mini",
                    img: "portada.jpg",
                    price: "$210.000,00",
                    stock: "2",
                    description: ""
                },
                {
                    id: 7,
                    name: "AirPods Pro",
                    img: "portada.jpg",
                    price: "$50.000,00",
                    stock: "100",
                    description: ""
                },
                {
                    id: 8,
                    name: "Apple Watch 7",
                    img: "portada.jpg",
                    price: "$110.000,00",
                    stock: "14",
                    description: ""
                },
                {
                    id: 9,
                    name: "MacBook Air",
                    img: "portada.jpg",
                    price: "$400.000,00",
                    stock: "25",
                    description: ""
                },
                {
                    id: 10,
                    name: "iPhone 13 Pro",
                    img: "portada.jpg",
                    price: "$220.000,00",
                    stock: "18",
                    description: ""
                },
                {
                    id: 11,
                    name: "iPhone SE",
                    img: "portada.jpg",
                    price: "$130.000,00",
                    stock: "3",
                    description: ""
                },
                {
                    id: 12,
                    name: "iMac 27",
                    img: "portada.jpg",
                    price: "$380.000,00",
                    stock: "7",
                    description: ""
                },
                {
                    id: 13,
                    name: "iMac 27",
                    img: "portada.jpg",
                    price: "$380.000,00",
                    stock: "7",
                    description: ""
                },
                {
                    id: 14,
                    name: "iMac 27",
                    img: "portada.jpg",
                    price: "$380.000,00",
                    stock: "7",
                    description: ""
                },
                {
                    id: 15,
                    name: "iMac 27",
                    img: "portada.jpg",
                    price: "$380.000,00",
                    stock: "7",
                    description: ""
                },
                {
                    id: 16,
                    name: "iMac 27",
                    img: "portada.jpg",
                    price: "$380.000,00",
                    stock: "7",
                    description: ""
                },
            ]
            resolve(moskProducts)
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
                        <Product key={producto.id} name={producto.name} price={producto.price} image={producto.img} modal={producto.img} />
                    )
                })}
                {Productos.length !== 0 ? null : <CircularProgress color="Dark" className="CircularProgress" />}
            </div> 
            <div className="TodosLosProductos">
                <button>Ver todos los productos <RiSendPlaneLine className="TodosLosProductosIcon" /></button>
            </div>
        </section>
    )
}

export default ListProducts;