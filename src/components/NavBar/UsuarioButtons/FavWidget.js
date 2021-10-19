import React from "react";
import './Cart.css';
import { IoIosArrowForward } from 'react-icons/io';

const FavWidget = ({show, close})=>{
    return(
        <div className={`FavMenu ${show ? 'active' : ''}`}>
            <div className="FavHeader">
                <IoIosArrowForward onClick={close} className="CloseFav" />
                <h1>FAVORITOS</h1>
            </div>
        </div>
    )
}

export default FavWidget;