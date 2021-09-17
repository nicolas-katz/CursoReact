import './Product.css';
import React from 'react';

const CardComponent = prop => {
    return(
      <div className="Card">
        <h3>{prop.title}</h3>
        <p>{prop.text}</p>
        <button>{prop.button}</button>
      </div>
    )
}

export default CardComponent;