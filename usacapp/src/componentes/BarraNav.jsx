import { Outlet, Link } from "react-router-dom";

const BarraNav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img src={require(`../imgs/Usac_logo.png`)} alt="usac" className="imgUsac" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link  links ">Inicio</Link>
                            <Link to="/Perfil" className="nav-link links">Mi Perfil </Link>
                            <Link to="/opiniones" className="nav-link links">Opiniones Catedraticos </Link>
                            <Link to="/cerrar" className="nav-link links">Cerrar Sesion</Link>
                        </div>
                    </div>
            </nav>   
            <Outlet />
        </>    
    )

};

export default BarraNav;
