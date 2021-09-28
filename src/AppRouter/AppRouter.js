import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import NotFoundPage from '../Pages/NotFoundPage';
import { AiOutlineWhatsApp } from "react-icons/ai";

const AppRouter = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="*" component={NotFoundPage} />
                <AiOutlineWhatsApp className="WAP" />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;