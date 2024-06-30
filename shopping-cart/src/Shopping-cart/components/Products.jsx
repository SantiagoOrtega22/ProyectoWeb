import '../styles/Products.css'
/* import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx' */
import { useCart } from '../Hooks/useCart.js'

export function Products({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = products => {
        return cart.some(item => item.id == products.id)  // Retorna un valor de true al tener elementos en la matris cart
    }

    return (
        <main className='products'>
            <ul>
                {products.map(product => {
                    const isProductInCart = checkProductInCart(product)

                    return (
                        <li key={product.id}>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                            />
                            <div>
                                <strong>{product.title}</strong>    <br />${product.price}
                            </div>
                            <div>
                                <button
                                    style={{
                                        backgroundColor: isProductInCart ? 'rgba(255, 4, 0, 0.6)' : 'rgba(255, 4, 0, 1)',
                                        height: '30px', 
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin: '4px auto',
                                        color: '#fff'
                                    }}
                                    onClick={() => {
                                        isProductInCart ? removeFromCart(product) : addToCart(product)
                                    }}
                                >
                                    {isProductInCart ? <h3>Quitar</h3> : <h3>Agregar</h3>}
                                </button>

                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}
