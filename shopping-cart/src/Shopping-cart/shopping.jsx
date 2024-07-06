import { products as initialProducts } from './mocks/products.json'
import './index.css'

// Componentes
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { useFilter } from './Hooks/useFilters.js'
import { CartProvider } from './context/cart.jsx'
import { Nav } from './components/Nav.jsx'


function Shopping() {
  const { filterProducts } = useFilter()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <div className='scroll-container'>
        <Header />
        <aside className='content'>
          <Nav />
          <Products products={filteredProducts} />
        </aside>
      </div>
    </CartProvider>
  )
}


export default Shopping
