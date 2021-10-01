import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

const Main = ()=>{

    return (

        <main>
            <h1>La mejor tecnología, siempre en tus manos</h1>
            <Link to="/categories/allproducts"><button>Shop now</button></Link>
        </main>

    )

}

export default Main;