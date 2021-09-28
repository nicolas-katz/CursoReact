import './ListProducts.css';
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';

const ListProducts = ()=> {
    const [Productos, setProductos] = useState([]);

    const getProducts = new Promise( resolve=>{
        setTimeout(()=>{
            const moskProducts = [
                {
                    id: 1,
                    name: "iPhone 11",
                    img: "iphone11.png",
                    price: "$180.000,00",
                    stock: "20",
                    description: ""
                },
                {
                    id: 2,
                    name: "iPhone X",
                    img: "iphonex.png",
                    price: "$120.000,00",
                    stock: "15",
                    description: ""
                },
                {
                    id: 3,
                    name: "iPhone 13",
                    img: "iphone13.png",
                    price: "$200.000,00",
                    stock: "10",
                    description: ""
                },
                {
                    id: 4,
                    name: "iPad Mini",
                    img: "ipadmini.png",
                    price: "$150.000,00",
                    stock: "8",
                    description: ""
                },
                {
                    id: 5,
                    name: "Apple Watch",
                    img: "applewatch.png",
                    price: "$340.000,00",
                    stock: "5",
                    description: ""
                },
                {
                    id: 6,
                    name: "iPad Pro",
                    img: "ipadpro.png",
                    price: "$210.000,00",
                    stock: "2",
                    description: ""
                },
                {
                    id: 7,
                    name: "AirPods Pro",
                    img: "airpodspro.png",
                    price: "$50.000,00",
                    stock: "100",
                    description: ""
                },
                {
                    id: 8,
                    name: "Samsung Galaxi 21",
                    img: "samsung21.png",
                    price: "$110.000,00",
                    stock: "14",
                    description: ""
                },
                {
                    id: 9,
                    name: "Samsung Galaxi Tab",
                    img: "samsungtab.png",
                    price: "$400.000,00",
                    stock: "25",
                    description: ""
                },
                {
                    id: 10,
                    name: "MacBook Pro",
                    img: "macbookpro.png",
                    price: "$220.000,00",
                    stock: "18",
                    description: ""
                },
                {
                    id: 11,
                    name: "Galaxi Watch4",
                    img: "galaxiwatch4.webp",
                    price: "$130.000,00",
                    stock: "3",
                    description: ""
                },
                {
                    id: 12,
                    name: "Samsung Galaxi S20",
                    img: "samsungs20.png",
                    price: "$380.000,00",
                    stock: "7",
                    description: ""
                },
                {
                    id: 13,
                    name: "iPhone 13 Pro",
                    img: "iphone13pro.jpg",
                    price: "$380.000,00",
                    stock: "7",
                    description: ""
                },
                {
                    id: 14,
                    name: "Dell XPS 15",
                    img: "dellxps15.jpg",
                    price: "$380.000,00",
                    stock: "7",
                    description: ""
                },
                {
                    id: 15,
                    name: "HP G6",
                    img: "hpg6.jpg",
                    price: "$380.000,00",
                    stock: "7",
                    description: ""
                },
                {
                    id: 16,
                    name: "Motorola XT1955-2 G7",
                    img: "motorolaxt1955-2.webp",
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
                {Productos.length !== 0 ? null : <div color="Dark" className="CircularProgress">Cargando productos...</div>}
            </div> 
            <div className="TodosLosProductos">
                <button>Ver todos los productos</button>
            </div>
        </section>
    )
}

export default ListProducts;