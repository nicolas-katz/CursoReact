import React from 'react';
import './CartyFavMenu.css';
import { FiHeart } from "react-icons/fi";
import { IoIosArrowForward } from 'react-icons/io';

const Fav = ()=>{

    const openFav = ()=>{
        document.querySelector(".FavMenu").classList.add("active");
    }

    const CloseFav = ()=>{
        document.querySelector(".FavMenu").classList.remove("active");
    }

    return (

        <div className="FavContainer">
            <FiHeart onClick={openFav} className="Fav" />
            <div className="FavMenu">
                <div className="FavHeader">
                    <IoIosArrowForward onClick={CloseFav} className="CloseFav" />
                    <h1>Favoritos</h1>
                </div>
            </div>
        </div>

    )

}

export default Fav;