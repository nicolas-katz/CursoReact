import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Main from '../components/Main/Main';
import ListProducts from '../components/ListProducts/ListProducts';
import Info from '../components/Info/Info';
import Footer from '../components/Footer/Footer';

const HomePage = ()=>{
    return(
        <div>
            <NavBar />
            <Main />
            <ListProducts />
            <Info />
            <Footer />
        </div>
    )
}

export default HomePage;