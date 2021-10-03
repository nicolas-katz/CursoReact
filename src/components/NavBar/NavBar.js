import './NavBar.css';
import React from 'react';
import Logo from '../../assets/logo.png';
import { NavLink, Link } from 'react-router-dom';
import User from './UsuarioButtons/User';
import Cart from './UsuarioButtons/Cart';
import Fav from './UsuarioButtons/Fav';

const NavBar = () => {

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
                                    <NavLink activeClassName="ActiveNavLink" to={category.address}>{category.name}</NavLink>
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
        </header>

    )

}

export default NavBar;