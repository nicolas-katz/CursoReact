import React, { useContext } from "react";
import './EndPurchase.css';
import {Link} from 'react-router-dom';
import InfoProducts from '../components/InfoProducts/InfoProducts';
import CartContext from '../Context/CartContext';
import MP from '../assets/mercadopago.png';
import {BsTag} from 'react-icons/bs';
import db from '../firebase';
import { collection, addDoc } from "firebase/firestore";
 
const EndPurchase = ()=>{

    const {products, price, clear} = useContext(CartContext);

    const Continuar = ()=> {
        document.querySelector(".PaymentContainer").classList.remove("active");
    }

    const Continuar2 = ()=> {
        document.querySelector(".BuyContainer").classList.remove("active");
    }

    const openApply = ()=>{
        document.querySelector(".Apply").classList.toggle("active");
    }

    const CuponDiscount = ()=>{
        document.querySelector(".Discount").classList.remove(".active");
        document.querySelector(".Apply").classList.toggle("active");
    }

    let cupon = price/10

    let total = price - cupon
  
    let cantProductos = products.map(product=>product.count)

    let suma = null

    if(cantProductos.length >= 1)  {
        suma = cantProductos.reduce((acumulador, numero) => acumulador + numero);
    } else {
        suma = 0
    }
    
    const newOrden = {
        buyer: {
            name: 'John Doe',
            email: 'name@example.com',
            phone: '1144444444'
        },
        products: products.map(product=>product.product),
        total: total,
        date: new Date
    }

    const pushOrdenToFirebase = async (newOrden)=>{
        const orderFirebase = collection(db, 'orders');
        const order = await addDoc(orderFirebase, newOrden);
    }

    const endBuy = ()=>{
        pushOrdenToFirebase(newOrden);
        clear();
    }

    return(
        <div className="EndPurchaseContainer">
            <div className="EndPurchase">
                <div className="EndPurchaseHeader">
                    <h4>Finalizar compra</h4>
                    <Link to="/products">Seguir comprando</Link>
                </div>
                <div className="FlexContainer">
                    <div className="FillDates">
                        <div className="ClientDetails">
                            <h1>DETALLES DEL CLIENTE</h1>
                            <div>
                                <label>Email</label>
                                <input type="email" value="name@example.com" required />
                            </div>
                            <div>
                                <label>Nombre</label>
                                <input type="text" value="John" required />
                            </div>
                            <div>
                                <label>Apellido</label>
                                <input type="text" value="Doe" required />
                            </div>
                            <div>
                                <label>Teléfono</label>
                                <input type="number" value="1144444444" required />
                            </div>
                            <div>
                                <label>DNI</label>
                                <input type="number" value="11223344" required />
                            </div>
                            <button onClick={Continuar}>CONTINUAR</button>
                        </div>
                        <div className="Payment">
                            <h1>MÉTODOS DE PAGO</h1>
                            <div className="PaymentContainer active">
                                <div className="PaymentBox">
                                    <div>
                                        <input type="radio" checked required />
                                        <label>MercadoPago</label>
                                    </div>
                                    <img src={MP} />
                                </div>
                                <p>*Una vez que hayas llenado todos los datos serás llevado a MercadoPago para finalizar la compra.</p>
                                <button onClick={Continuar2}>CONTINUAR</button>
                            </div>
                        </div>
                        <div className="Buy">
                            <h1>REALIZAR COMPRA</h1>
                            <div className="BuyContainer active">
                                <p>Por favor revisa los detalles del pedido y cuando estés listo, haz clic en 'realizar compra'.</p>
                                <div>
                                    <input type="checkbox" checked />
                                    <label>¿Desea inscribirse a nuestra cadena de emails?</label>
                                </div>
                                <Link to="/"><button onClick={endBuy}>REALIZAR COMPRA</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="InfoProducts">
                        <div className="InfoProductsHeader">
                            <h4>Resumen del pedido ({suma})</h4>
                            <Link to="/cart">Editar carrito</Link>
                        </div>
                        <div className="InfoProductsCart">
                            {products.map((product)=>{
                                return (
                                    <InfoProducts name={product.product.name} price={product.product.price} count={product.count} image={product.product.img} key={product.product.id} />
                                )        
                            })}
                        </div>
                        <div className="InfoProductsDiscount">
                            <div className="Tag">
                                <BsTag />
                                <h3 onClick={openApply}>Ingresa tu cupon de descuento aquí</h3>
                            </div>
                            <div className="Apply active">
                                <input type="text" value="CODER21" />
                                <button onClick={CuponDiscount}>APLICAR CUPON</button>
                            </div>
                        </div>
                        <div className="InfoProductsTotalPrice">
                            <div>
                                <h5>Productos</h5>
                                <h5>${price}</h5>
                            </div>
                            <div>
                                <h5>Envio</h5>
                                <h5>Gratis</h5>
                            </div>
                            <div className="Discount">
                                <h5>Cupon de descuento</h5>
                                <h5>(${cupon})</h5>
                            </div>
                            <div className="Total">
                                <h4>Total</h4>
                                <h4>${total}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EndPurchase;

