import './NavBar.css';
import React from 'react';
import { AiOutlineUser, AiOutlineDown } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {

    window.addEventListener("scroll", function(){
        document.querySelector("header").classList.toggle("abajo", window.scrollY > 0);
    })

    const abrirDropdown = ()=>{
        document.querySelector(".Dropdown").classList.toggle("active");
        document.querySelector(".DropdownUser").classList.toggle("changeDirection");
    }

    const OpenFavMenu = ()=> {
        document.querySelector(".MenuFavoritos").classList.add("openFavMenu");
    }

    const CloseFavMenu = ()=> {
        document.querySelector(".MenuFavoritos").classList.remove("openFavMenu");
    }

    const OpenCartMenu = ()=> {
        document.querySelector(".MenuCarrito").classList.add("openCartMenu");
    }

    const CloseCartMenu = ()=> {
        document.querySelector(".MenuCarrito").classList.remove("openCartMenu");
    }

    return(

        <header>
            <div className="HeaderContainer">
                <div className="Logo">
                    <img src={Logo} />
                </div>
                <div className="Navegacion">
                    <ul>
                        <li><Link to="/accesorios">Accesorios</Link></li>
                        <li><Link to="/celulares">Celulares</Link></li>
                        <li><Link to="/tablets">Tablets</Link></li>
                        <li><Link to="/laptops">Laptops</Link></li>
                        <span>|</span>
                        <div className="Botones">
                            <div onClick={abrirDropdown} className="UserContenedor">
                                <AiOutlineUser className="User" />
                                <AiOutlineDown className="DropdownUser" />  
                                <div className="Dropdown">
                                    <a>Log in</a>
                                    <a>Sign in</a>
                                </div>                              
                            </div>
                            <FiHeart onClick={OpenFavMenu} className="Favs" />
                            <div className="MenuFavoritos">
                                <div className="HeaderMenuFavoritos">
                                    <h4>Wishlist</h4>
                                    <IoMdClose className="CloseFavMenu" onClick={CloseFavMenu} />
                                </div>
                            </div>
                            <div className="CarritoContenedor" onClick={OpenCartMenu}>
                                <BsBag className="Cart" />
                                <label>0</label>
                            </div>
                            <div className="MenuCarrito">
                                <div className="HeaderMenuCarrito">
                                    <h4>My Cart</h4>
                                    <IoMdClose className="CloseCartMenu" onClick={CloseCartMenu} />
                                </div>
                            </div>              
                        </div>
                    </ul>
                </div>
            </div>
        </header>
        
    )

}

export default NavBar;