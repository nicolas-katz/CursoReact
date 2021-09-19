import './Product.css';
import React, { useState } from 'react';

const CardComponent = prop => {
    const [productos, setProductos] = useState(0);
    const productosSeleccionados = ()=>{
      setProductos(productos + 1);
    }
    return(
      <div className="Card">
        <h3>{prop.title}</h3>
        <p>{prop.text}</p>
        <button onClick={productosSeleccionados}>Agregar al carrito</button>
        <p>Cantidad de productos seleccionados: {productos}</p>
      </div>
    )
}

export default CardComponent;