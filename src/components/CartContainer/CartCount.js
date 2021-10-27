// import React, {useState} from "react";
// import './CartContainer.css'

// const CartCount = ({count, stock, changeCount}) =>{

//     const [counter, setCounter] = useState(count)

//     const sumarCantidad = ()=>{
//         counter >= stock ? setCounter(stock) : setCounter(counter + 1)
//         changeCount(count, counter)
//     }

//     const restarCantidad = ()=>{
//         counter <= 1 ? setCounter(1) : setCounter(counter - 1)
//         changeCount(count, counter)
//     }

//     return(
//         <div className="CartCount">
//             <span onClick={restarCantidad}>-</span>
// 			<input value={counter} />
// 			<span onClick={sumarCantidad}>+</span>
//         </div>
//     )

// }

// export default CartCount;