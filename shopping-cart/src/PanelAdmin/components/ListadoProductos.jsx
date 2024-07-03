import React, { useState, useEffect } from 'react';
import '../Styles/ListadoProductos.css';
import Axios from 'axios';
const ListadoProductos = () => {
  const [productos, setProductos] = useState([]); 

  // Fetch cart data from localStorage on component mount
  useEffect(() => {
    const idUsuario = JSON.parse(localStorage.getItem('newDatos'));
    Axios.post("http://localhost:3001/carrito",{ 
      id_orden:idUsuario,}
  ).then((response)=>{
    if (productos) {
      setProductos(response.data);
    }
  })
    
  }, []);

  const LimpiarProductos = () => {
    setProductos([]);
    localStorage.removeItem('cartCopy');
  };

  function Item({ thumbnail, price, title, quantity }) {
    return (
      <li key={title} className='Producto'> 
        <img src={thumbnail} alt={title} />
        <div>
          <strong>{title}</strong> - ${price} <br/>
          <strong>Cantidad {quantity}</strong>
        </div>
      </li>
    );
  }

  return (
    <div>
      <ul>
        {productos.map((product) => (
          <Item
            key={product.id || title} 
            {...product} 
          />
        ))}
      </ul>
      <button className="Boton" onClick={LimpiarProductos}>
        <h4>Completar Orden</h4>
      </button>
    </div>
  );
};

export default ListadoProductos;
