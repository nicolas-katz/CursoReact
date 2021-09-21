import './Product.css';
import React, { useState } from 'react';

const CardComponent = prop => {
    const [productos, setProductos] = useState(0);
    const sumarProductos = ()=>{
      setProductos(productos + 1);
      if (productos >= 10){
        setProductos(10)
      }
    }
    const restarProductos = ()=>{
      setProductos(productos - 1);
      if (productos <= 0){
        setProductos(0)
      }
    }
    return(
      <div className="Card">
        <h3>{prop.title}</h3>
        <p>{prop.text}</p>
        <button>Agregar al carrito</button>
        <div className="AgregarProductos">
          <button onClick={restarProductos}>-</button>
          <p>{productos}</p>
          <button onClick={sumarProductos}>+</button>
        </div>
      </div>
    )
}

export default CardComponent;