import React from 'react';
import './User.css';
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';

const User = ()=>{

    // const OpenUser = ()=>{
    //     document.querySelector(".DropdownUser").classList.toggle("active");
    // }

    return (

        <div className="UserContainer">
            <AiOutlineUser className="User" />
            <div className="DropdownUser">
                <Link to="/login">Log in</Link>
                <Link to="/signin">Sign in</Link>
            </div> 
        </div>

    )

}

export default User;