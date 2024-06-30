import "../styles/formulario.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

// Inicialización de los hooks

export function Formulario({ setNombre }) {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const [isEmpleado, setIsEmpleado] = useState(null);
  const [tipoCliente, setTipoCliente] = useState("");
  const [mesa, setMesa] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  const handleDatosUsuario = () => {
    const lugar = tipoCliente === "mesa" ? mesa : domicilio;
    var idClient=0
    
    Axios.post("http://localhost:3001/clientes", {
        nombre_cliente: usuario,
        lugar: lugar,
      })
      .then((response) => {
        idClient=response.data[0].id_cliente
        
        Axios.post("http://localhost:3001/insertorden", {
            id_cliente: idClient,
          })
          .then(() => {
            alert("Orden creada!");
            localStorage.setItem("newDatos", JSON.stringify(idClient));
          });
      })
    

     
    

    

  };

  // setDatosUsuario(usuario,mesa)
  // console.log(datosUsuario)

  const IniciarBoton = () => {
    RegistrarUsuario();
    handleDatosUsuario();
  };

  const RegistrarEmpleado = () => {
    Axios.post("http://localhost:3001/checkadmin", {
      id_adminis: usuario,
      password_adminis: contraseña,
    }).then((response) => {
      if (response.data.success) {
        setIsAuthenticated(true);
      } else {
        alert("Usuario y/o Contraseña incorrectas");
        setIsAuthenticated(false);
      }
    });
  };

  const RegistrarUsuario = () => {
    if (tipoCliente === "mesa") {
      Axios.post("http://localhost:3001/insertclient", {
        nombre_cliente: usuario,
        lugar: mesa,
      }).then(() => {
        alert("Cliente Registrado!");
      });
    } else {
      Axios.post("http://localhost:3001/insertclient", {
        nombre_cliente: usuario,
        lugar: domicilio,
      }).then(() => {
        alert("Cliente Registrado!");
      });
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos según si es empleado o cliente
    if (
      (isEmpleado && (usuario === "" || contraseña === "")) ||
      (!isEmpleado &&
        (usuario === "" ||
          (tipoCliente === "mesa" && mesa === "") ||
          (tipoCliente === "domicilio" && domicilio === "")))
    ) {
      setError(true); // Establece el estado de error si no se digitan todos los campos
      return;
    }
    // Reinicio de estados
    setError(false);
    setNombre(usuario);
    setUsuario("");
    setContraseña("");
    setTipoCliente("");
    setMesa("");
    setDomicilio("");
  };

  // Función para el formulario de clientes
  const renderClienteForm = () => (
    <>
      <div className="input-contenedor">
        <label htmlFor="#">Usuario</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div className="input-contenedor">
        <label htmlFor="#">Lugar</label>
        <select
          value={tipoCliente}
          onChange={(e) => setTipoCliente(e.target.value)}
        >
          <option value="">Seleccione</option>
          <option value="mesa">Mesa</option>
          <option value="domicilio">Domicilio</option>
        </select>
      </div>

      {tipoCliente === "mesa" && (
        <div className="input-contenedor">
          <label htmlFor="#">Número de Mesa</label>
          <select value={mesa} onChange={(e) => setMesa(e.target.value)}>
            <option value="">Seleccione</option>
            {[...Array(10).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      )}
      {tipoCliente === "domicilio" && (
        <div className="input-contenedor">
          <label htmlFor="#">Dirección</label>
          <input
            type="text"
            value={domicilio}
            onChange={(e) => setDomicilio(e.target.value)}
          />
        </div>
      )}
    </>
  );

  // Función para el formulario de empleados
  const renderEmpleadoForm = () => (
    <>
      <div className="input-contenedor">
        <label htmlFor="#">Usuario</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div className="input-contenedor">
        <label htmlFor="#">Contraseña</label>
        <input
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
      </div>
    </>
  );

  // Renderiza el componente de formulario completo
  return (
    <section className="section-container">
      <div className="contenedor">
        <h2>Iniciar Sesión</h2>
        {/* Evaluar si el usuario es empleado o cliente */}
        {isEmpleado === null ? (
          <div className="botones-iniciales">
            <button onClick={() => setIsEmpleado(true)}>Empleados</button>
            <button onClick={() => setIsEmpleado(false)}>Clientes</button>
          </div>
        ) : (
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="iniciar-sesion">
              {isEmpleado ? renderEmpleadoForm() : renderClienteForm()}

              {/* Condiciones para la restricción de acceso (Evaluar que cada campo ha sido digitado) */}
              {isEmpleado ? (
                usuario && contraseña ? (
                  isAuthenticated ? (
                    <Link to="/panel-administracion">
                      <button type="submit">Iniciar Sesión</button>
                    </Link>
                  ) : (
                    <button type="button" onClick={RegistrarEmpleado}>
                      Iniciar Sesión
                    </button>
                  )
                ) : (
                  <>
                    <button type="button" disabled>
                      Iniciar Sesión
                    </button>
                    <p className="error">Digite todos los campos</p>
                  </>
                )
              ) : usuario && (tipoCliente === "mesa" ? mesa : domicilio) ? (
                <Link to="/shopping">
                  <button type="submit" onClick={IniciarBoton}>
                    Iniciar Sesión
                  </button>
                </Link>
              ) : (
                <>
                  <button type="button" disabled>
                    Iniciar Sesión
                  </button>
                  <p className="error">Digite todos los campos</p>
                </>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
