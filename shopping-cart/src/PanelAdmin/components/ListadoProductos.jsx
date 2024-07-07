import React, { useState, useEffect } from 'react';
import '../Styles/ListadoProductos.css';
import Axios from 'axios';
<<<<<<< HEAD
const ListadoProductos = ({nombre}) => {
  const [productos, setProductos] = useState([]); 
=======
const ListadoProductos = () => {
  const [productos, setProductos] = useState([]); 
  const [DatosCliente, setDatosCliente] = useState({}); 
>>>>>>> afbc3c4dd3e2f94a72bf7877866a95bbab1bbf0a
  // Fetch cart data from localStorage on component mount
  useEffect(() => {
    
    const idUsuario = JSON.parse(localStorage.getItem('newDatos'));
<<<<<<< HEAD
=======
    Axios.post("http://localhost:3001/getClientData",{ 
      id_cliente:idUsuario,}
  ).then((response)=>{
      setDatosCliente(response.data[0]);
      console.log(DatosCliente)
    
  })
>>>>>>> afbc3c4dd3e2f94a72bf7877866a95bbab1bbf0a
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
   localStorage.setItem('newDatos', JSON.stringify(1)); 
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
