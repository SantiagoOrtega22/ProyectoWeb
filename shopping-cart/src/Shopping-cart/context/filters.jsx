import { createContext, useState } from "react";

// Este es que tenemos que consumir 
export const FiltersContext = createContext()

// Este es el que nos provee de acceso al contexto 
export function FilterProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>{/* Contexto a proveer */}
            {children} {/* Donde los voy a proveer */}
        </FiltersContext.Provider>
    )
}
