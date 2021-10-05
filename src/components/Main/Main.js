import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

const Main = ()=>{

    return (

        <main>
            <div className="MainContainer">
                <h1>La mejor tecnología, siempre en tus manos</h1>
                <Link to="/products"><button>Shop now</button></Link>
            </div>
        </main>

    )

}

export default Main;