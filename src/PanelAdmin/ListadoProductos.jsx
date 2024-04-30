import React, { useState } from 'react';
import './ListadoProductos.css'
const ListadoProductos = () => {
  const [productos, setProductos] = useState([]);

  const LimpiarProductos = () =>{
      setProductos([]);
    };

  const AgregarProdcuto = () => {
    const nuevoProducto = {
      imagen: 'postre.jpg',
      precio: 12000,
      descripcion: 'Cheesecake de mora',
      cantidad:2
    };
    setProductos([...productos, nuevoProducto]);
  };

  return (
    <div >
      <button class="Boton" onClick={AgregarProdcuto}> <h4>Agregar Producto</h4></button>
      {productos.map((producto, index) => (
        <div key={index}class="Producto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFIO6v7FjgvdCqGq6wRqAP4Nnl35ebJyb3Ywf6E2H0oA&s" alt="Producto" />
            <div class="informacion">
              <div>
                <p>{producto.descripcion}</p>
                <p>${producto.precio}</p>
            
                <p>x{producto.cantidad}</p>
              </div>
            
            </div>
            
        </div>
        
      ))}
      <button class="Boton"onClick={LimpiarProductos}><h4> Completar Orden </h4></button>
    </div>
  );
};


export default ListadoProductos
