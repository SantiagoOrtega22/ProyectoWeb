import { useCart } from '../Hooks/useCart'
import '../styles/Footer.css'

export function Footer() {
  // const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      <h4>Arquitectos Web ⚛ </h4>
      <h5>Jorge Gutierrez - 2215631 － <span>jorge@gmail.com</span></h5>
      <h5>Yiber Romero - 2221835 － <span>yiber@gmail.com</span></h5>
      <h5>Santiago Ortega - 2220032 － <span>santiago@gmail.com</span></h5>
      <h5>Julian Prada - 2212925 － <span>julian@gmail.com</span></h5>
    </footer>
  )
}