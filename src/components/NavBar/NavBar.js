import './NavBar.css';
import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import { NavLink, Link } from 'react-router-dom';
import User from './UsuarioButtons/User';
import Cart from './UsuarioButtons/Cart';
import Fav from './UsuarioButtons/Fav';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

const NavBar = () => {

    const abrirMenu = ()=>{
        document.querySelector(".Navegacion").classList.add("active");
        document.querySelector(".CloseMenu").classList.add("active");
    }

    const cerrarMenu = ()=>{
        document.querySelector(".Navegacion").classList.remove("active");
        document.querySelector(".CloseMenu").classList.remove("active");
    }

    const categories = [
        {
            id: "1",
            address: "/categories/relojes",
            name: "Relojes",
        },
        {
            id: "2",
            address: "/categories/celulares",
            name: "Celulares",
        },
        {
            id: "3",
            address: "/categories/tablets",
            name: "Tablets",
        },
        {
            id: "4",
            address: "/categories/laptops",
            name: "Laptops",
        },
    ]

    return (

        <header>
            <div className="HeaderContainer">
                <div className="Logo">
                    <Link to="/"><img src={Logo} /></Link>
                </div>
                <div className="Navegacion">
                    <ul>
                        {categories.map(category=>{
                            return(
                                <li>
                                    <NavLink onClick={cerrarMenu} activeClassName="ActiveNavLink" to={category.address}>{category.name}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="Usuario">
                    <User />
                    <Fav />
                    <Cart />
                </div>
            </div>
            <HiOutlineMenuAlt1 onClick={abrirMenu} className="BurgerMenu" />
            <MdClose onClick={cerrarMenu} className="CloseMenu" />
        </header>

    )

}

export default NavBar;