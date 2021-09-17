import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ListProducts from './components/ListProducts/ListProducts';

function App() {
  return ( 
    <div className="App">
      <NavBar />
      <ListProducts />
    </div>
  );
}

export default App;