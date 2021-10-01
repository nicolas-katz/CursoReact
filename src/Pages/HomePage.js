import React from 'react';
import ListProducts from '../components/ListProducts/ListProducts';
import Main from '../components/Main/Main';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Info from '../components/Info/Info';

const HomePage = ()=>{
    return(
        <div>
            <NavBar />
            <Main />
            <ListProducts />
            <Info />
            <Footer/>
        </div>
    )
}

export default HomePage;