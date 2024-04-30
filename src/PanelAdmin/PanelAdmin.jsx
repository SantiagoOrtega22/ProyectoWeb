import "./PanelAdmin.css"
import React, { useState } from 'react';
import ListadoProductos from "./ListadoProductos";
 export function PanelAdmin(){


    return(
    <div class="fondo">
        <div class="contenedor">
            <header class="header">
            <h2>Panel de administración</h2>
        </header>

        <main class="pedidos">
            <h1>Pedidos</h1>
            <p>
                Administra las ordenes
            </p>
             <div> 
            <h3><ListadoProductos/></h3>
             </div>

        </main>
    
       
        <footer class="footer">

        </footer>

        </div>
    </div>
    )
}