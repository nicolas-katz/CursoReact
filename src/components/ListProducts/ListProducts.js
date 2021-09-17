import './ListProducts.css';
import React from 'react'
import CardComponent from '../Product/Product';

const ListProducts = ()=> {
    return (
        <div className="CardsContainer">
            <CardComponent title="producto 1" text="Descripción producto 1" button="Agregar al carrito" />
            <CardComponent title="producto 2" text="Descripción producto 2" button="Agregar al carrito" />
            <CardComponent title="producto 3" text="Descripción producto 3" button="Agregar al carrito" />
            <CardComponent title="producto 4" text="Descripción producto 4" button="Agregar al carrito" />
            <CardComponent title="producto 5" text="Descripción producto 5" button="Agregar al carrito" />
            <CardComponent title="producto 6" text="Descripción producto 6" button="Agregar al carrito" />
        </div> 
    )
}

export default ListProducts;