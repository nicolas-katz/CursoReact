import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import Categorias from './components/Categorias/Categorias';
import ListProducts from './components/ListProducts/ListProducts';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import { AiOutlineWhatsApp } from "react-icons/ai";

function App() {
  return ( 
    <div className="App">
      <AiOutlineWhatsApp className="WAP" />
      <NavBar />
      <Main />
      {/* <Categorias /> */}
      <ListProducts />
      <Info />
      <Footer />
    </div>
  );
}

export default App;