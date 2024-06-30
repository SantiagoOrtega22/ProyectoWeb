// Se usan para poder leer el contexto
import { useContext } from "react";
import {CartContext} from '../context/cart.jsx'

export const useCart =() => {
    const context = useContext(CartContext)

if (context == undefined){
    throw new Error('No puedes usar el customHook ya que esta parte de la app no esta envuelta en el provider')
}

    return context
}