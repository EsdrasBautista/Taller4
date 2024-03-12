import React from 'react';
import '../css/PaginaP.css';


const Testimonios = () => {
    return (
      
        <div className="contenedor-principal">
          

          <div className="contenedor-testimonio">
              <img className="imagen-testimonio" 
              src={require(`../imgs/Usac_logo.png`)} alt="imagen" />
              <div className="contenedor-texto-testimonio">
                  <p className="nombre-testimonio">Nombre Alumno</p>
                  <p className="texto-testimonio">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec euismod, nunc in lacinia fermentum, nunc eros lacinia elit, 
                et luctus elit nunc ut justo. Donec euismod, nunc in lacinia fermentum, 
                nunc eros lacinia elit, et luctus elit nunc ut justo.
                cscddcd
                cdcd
                dddddddddd"</p>
              </div>
          </div>
        </div>  
    );
  }
  
  export default Testimonios;