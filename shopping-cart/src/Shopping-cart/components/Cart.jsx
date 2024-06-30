import '../styles/Cart.css'

import { useId, useState } from "react";
import { Link } from 'react-router-dom';
import { CartIcon, ClearCartIcon, CloseLoginIcon } from "./Icons";
import { useCart } from "../Hooks/useCart.js";
import Axios from 'axios';

export function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()
    const [cartCopy, setCartCopy] = useState([]);

    
    const handleCopyCart = () => {
        setCartCopy([...cart]);
        localStorage.setItem('cartCopy', JSON.stringify(cartCopy)); // Almacenar cartCopy en el almacenamiento local

        const datosUsuario = JSON.parse(localStorage.getItem('newDatos'));
        const idUsuario= datosUsuario;
        
        
        
        console.log(idUsuario)
        Axios.post("http://localhost:3001/insertproduct",{ 
            id_orden:idUsuario,
            cart}
        ).then(()=>{

            alert("productos registrados");
        }) // Almacenar cartCopy en el almacenamiento local
    };

    function CartItem({ thumbnail, price, title, quantity, addToCart }) {
        return (
            <li>
                <img
                    src={thumbnail}
                    alt={title} />
                <div>
                    <strong>{title}</strong> - ${price}
                </div>

                <footer>
                    <small> Qty: {quantity} </small>
                    <button onClick={addToCart}>+</button>
                </footer>
            </li>
        )
    }

    return (
        <>
            <Link to="/">
                 <label className="login-button Btn">
                    <span className="IconContainer ">
                        <CloseLoginIcon />
                    </span>
                    <p className="text">Sing out</p>
                </label>
            </Link>

            <label className="cart-button Btn" htmlFor={cartCheckboxId}>
                <span className="IconContainer ">
                    < CartIcon />
                </span>
                <p className="text">Carrito</p>
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />


            <aside className="cart" >
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                        />
                    ))}
                </ul>
                <div className='btnCartStyle'>
                    <button onClick={handleCopyCart} className='btnClearCart'>
                        <div>Completar Orden</div>
                    </button>
                    <button onClick={clearCart} className='btnClearCart'>
                        <ClearCartIcon />
                    </button>

                    

                </div>
            </aside>
        </>
    )

}
