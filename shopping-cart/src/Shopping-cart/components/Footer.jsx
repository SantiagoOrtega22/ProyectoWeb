import { useCart } from '../Hooks/useCart'
import '../styles/Footer.css'

export function Footer() {
  // const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      <h4>Prueba técnica de React ⚛ － <span>@midudev</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      {/*       {
        JSON.stringify(cart, null,2)
      } */}
    </footer>
  )
}