import { useState, useId } from 'react'
import '../styles/Filters.css'
import { useFilter } from '../Hooks/useFilters.js'
import { Footer } from './Footer.jsx'

export function Filters({ onChange }) {
    const { filters, setFilters } = useFilter() // Filtros

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }
    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <h3>Categoria</h3>
            <div>
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='35000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div id={categoryFilterId} className='button-category'>
                <button className='button_filter' onClick={handleChangeCategory} value='all'>Todas</button >
                <button className='button_filter' onClick={handleChangeCategory} value='cafe'>Café</button >
                <button className='button_filter' onClick={handleChangeCategory} value='pasteleria'>Pastelería</button >
                <button className='button_filter' onClick={handleChangeCategory} value='comida'>Comida</button >
                <button className='button_filter' onClick={handleChangeCategory} value='te'>Té</button >
                <button className='button_filter' onClick={handleChangeCategory} value='bebidas'>Bebidas</button >
            </div>
            <div>
                <Footer />
            </div>

        </section>
    )
}
