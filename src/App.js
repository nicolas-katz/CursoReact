import './App.css';

function App() {
  return ( 
    <div className="App">
      <HeaderComponent  />
      <h1>Cards Products</h1>
      <div className="CardsContainer">
        <CardComponent title={"producto 1"} text={"Descripción producto 1"} button={"Agregar al carrito"} />
        <CardComponent title={"producto 2"} text={"Descripción producto 2"} button={"Agregar al carrito"} />
        <CardComponent title={"producto 3"} text={"Descripción producto 3"} button={"Agregar al carrito"} />
        <CardComponent title={"producto 4"} text={"Descripción producto 4"} button={"Agregar al carrito"} />
        <CardComponent title={"producto 5"} text={"Descripción producto 5"} button={"Agregar al carrito"} />
        <CardComponent title={"producto 6"} text={"Descripción producto 6"} button={"Agregar al carrito"} />
      </div>
    </div>
  );
}

const HeaderComponent = () => {
  return (
    <div className="Header">
      <span>Logo</span>
      <ul>
        <li>Ofertas</li>
        <li>Lanzamientos</li>
        <li>Todos los productos</li>
      </ul>
    </div>
  )
}

const CardComponent = prop => {
  return(
    <div className="Card">
      <h3>{prop.title}</h3>
      <p>{prop.text}</p>
      <button>{prop.button}</button>
    </div>
  )
}

export default App;