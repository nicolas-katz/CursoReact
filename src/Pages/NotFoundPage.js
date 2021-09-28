import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage = ()=>{
    return (
        <div className="NotFoundPageContainer">
            <h1>Hubo un error, no encontramos esta página. Para volver al home ingrese <Link to="/">aquí</Link></h1>
        </div>
    )
}

export default NotFoundPage;