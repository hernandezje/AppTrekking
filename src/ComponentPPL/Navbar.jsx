import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark" aria-label="Fifth navbar example">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Expand at lg</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample05">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/quienesSomos" className="nav-link active" href="#">Quienes Somos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacto" className="nav-link active" href="#">Contacto</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Senderos</a>
                                <ul className="dropdown-menu">
                                    <li><a className="text-muted dropdown-item" href="#">Nivel Básico</a></li>
                                    <li><a className="text-muted dropdown-item" href="#">Nivel Medio</a></li>
                                    <li><a className="text-muted dropdown-item" href="#">Nivel Avanzado</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="nav-link active" href="#" aria-label="Search">
                                    
                                </a>
                            </li>
                        </ul>
                        <div className="col-md-3 text-end">
                            <button type="button" className="btn btn-outline-success me-2">
                            <Link to="/login" className="nav-link active" href="#">Login</Link>    
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

        </header>

    )
}

export default Navbar;