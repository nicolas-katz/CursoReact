import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import ItemDetails from '../Pages/ItemDetails/ItemDetails';
import CategoryPage from '../Pages/CategoryPage';
import { Redirect } from 'react-router';
import AllProductsPage from '../Pages/AllProductsPage';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import CartPage from '../Pages/CartPage';

const AppRouter = ()=>{
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/cart" component={CartPage} />
                <Route path="/categories/:catId" component={CategoryPage} />
                <Route exact path="/products" component={AllProductsPage} />
                <Route path="/products/:productId" component={ItemDetails} />
                <Route exact path="/" component={HomePage} />
                <Route>
                    <Redirect exact to="/" />
                </Route>

            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter;