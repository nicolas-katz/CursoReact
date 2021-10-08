import React, { useState } from 'react';
import './CartyFavMenu.css';
import { FiHeart } from "react-icons/fi";
import FavWidget from './FavWidget';

const Fav = ()=>{

    const [showFav, setShowFav] = useState(false);
    
    const handleFav = ()=>{
        !showFav ? setShowFav(true) : setShowFav(false);
    }

    return (

        <div className="FavContainer">
            <FiHeart onClick={handleFav} className="Fav" />
            <FavWidget show={showFav} close={handleFav} />
        </div>

    )

}

export default Fav;