import React from "react";
import './InfoProducts.css';

const InfoProducts = (prop) => {


    return(
        <div className="ProductOfCart">
           <img scr={prop.image} />
           <div className="ProductInfo">
               <div>
                   <h4>{prop.name}</h4>
                   <h4>Cant. {prop.count}</h4>
               </div>
               <h4>${prop.price * prop.count}</h4>
           </div>

        </div>
    )
}

export default InfoProducts;