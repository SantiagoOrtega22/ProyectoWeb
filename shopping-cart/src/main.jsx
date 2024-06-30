// main:
import ReactDOM from 'react-dom/client';
import { FilterProvider } from './Shopping-cart/context/filters.jsx'; // Asegúrate de que la ruta sea correcta
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FilterProvider>
    <App />
  </FilterProvider>
);
