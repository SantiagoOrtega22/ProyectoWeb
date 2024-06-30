import "../Styles/PanelAdmin.css"
import React, { useState } from 'react';
import ListadoProductos from "./ListadoProductos";
import { CloseLoginIcon } from "./Icons"
import { Link } from 'react-router-dom';
export function PanelAdmin() {
    return (
        <div className="fondo">
            <Link to="/">
                <label className="login-button Btn">
                    <span className="IconContainer ">
                        <CloseLoginIcon />
                    </span>
                    <p className="text">Sing out</p>
                </label>
            </Link>
            <div className="contenedorPedidos">
                <header className="headerPedidos">
                    <h2>Panel de administración</h2>
                </header>

                <main className="pedidos">
                    <h1>Pedidos</h1>
                    <p>
                        Administra las ordenes
                    </p>
                    <div>
                        <h3><ListadoProductos /></h3>
                    </div>

                </main>
            </div>
        </div>
    )
}