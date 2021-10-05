import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage = ()=>{
    return (
        <div className="NotFoundPageContainer">
            <h2>Oops! Page not found.</h2>
            <h1>404</h1>
            <h4>We can't find the page you're looking for.</h4>
            <Link to="/"><button>GO BACK HOME</button></Link>
        </div>
    )
}

export default NotFoundPage;