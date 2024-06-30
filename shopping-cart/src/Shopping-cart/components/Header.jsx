import fondo_header from '../Images/fondo_header.jpg';
import { Cart } from '../components/Cart.jsx'
import '../styles/Header.css'

export function Header(){
    return (
        <header className='header-shopping-cart'>
             <img src={fondo_header} alt="Fondo de fresas" />
             <Cart></Cart>
        </header>
    )
}