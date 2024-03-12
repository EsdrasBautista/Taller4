import React from "react";
import '../imgs/Usac_logo.png';
import '../css/PaginaP.css';


const Perfil = ()=> {
    return(
        <div className="fondo-form-perfil">
            <h1>Datos Estudiante **nombre estudiante**</h1>
            <div className="container form-Perfil">  
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="nombreAlumno" className="lblEstado">Nombres</label>
                            <input type="email" className="form-control" id="nombreAlumno" disabled />
                            </div>
                            <div className="form-group col-md-6">
                            <label htmlFor="ApellidosAlumno" className="lblEstado ">Apellidos</label>
                            <input type="password" className="form-control" id="ApellidosAlumno" disabled />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6 lbl">
                            <label htmlFor="registroAcad" className="lblEstado ">Registro Academico</label>
                            <input type="text" className="form-control" id="registroAcad" disabled />
                            </div>
                            <div className="form-group col-md-6 lbl">
                            <label htmlFor="correo" className="lblEstado ">Correo Electronico</label>
                            <input type="email" className="form-control" id="correo" disabled />
                        </div>
                    </div>
                    
                
                    
                    </form>
            </div>
        </div>     

    );
}

export default Perfil;