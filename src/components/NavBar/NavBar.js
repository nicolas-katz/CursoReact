import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

    return(

        <header>
            <div className="Navegacion">
                <div className="BurgerMenu">
                    <span></span>
                </div>
            </div>
            <div className="Titulo">
                <label>REACTAPP</label>
            </div>
            <div className="Botones">
                <FontAwesomeIcon className="IniciarSesion" icon={faUser} />
                <FontAwesomeIcon className="Favoritos" icon={faHeart} />
                <div className="CarritoContenedor">
                    <FontAwesomeIcon className="Carrito" icon={faShoppingCart} />
                    <label>0</label>
                </div>                
            </div>
        </header>
        
    )

}

export default NavBar;