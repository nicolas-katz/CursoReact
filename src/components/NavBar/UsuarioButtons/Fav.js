import React, { useState } from 'react';
import './Cart.css';
import { FiHeart } from "react-icons/fi";

const Fav = ()=>{

    const [showFav, setShowFav] = useState(false);
    
    const handleFav = ()=>{
        !showFav ? setShowFav(true) : setShowFav(false);
    }

    return (

        <div className="FavContainer">
            <FiHeart onClick={handleFav} className="Fav" />
        </div>

    )

}

export default Fav;