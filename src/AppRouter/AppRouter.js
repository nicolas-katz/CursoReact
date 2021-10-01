import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LogInPage from '../Pages/Account/LogInPage';
import SignInPage from '../Pages/Account/SignInPage';
import ItemDetails from '../Pages/ItemDetails/ItemDetails';
import CategoryPage from '../Pages/CategoryPage';
import { Redirect } from 'react-router';
import AllProductsPage from '../Pages/AllProductsPage';

const AppRouter = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/categories/:catId" component={CategoryPage} />
                <Route path="/allproducts" component={AllProductsPage} />
                <Route path="/products/:productId" component={ItemDetails} />
                <Route path="/login" component={LogInPage} />
                <Route path="/signin" component={SignInPage} />
                <Route exact path="/" component={HomePage} />

                <Route>
                    <Redirect exact to="/" />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;