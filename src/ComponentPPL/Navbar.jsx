import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark" aria-label="Fifth navbar example">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Expand at lg</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample05">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/quienesSomos" class="nav-link active" href="#">Quienes Somos</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contacto" class="nav-link active" href="#">Contacto</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Senderos</a>
                                <ul class="dropdown-menu">
                                    <li><a class="text-muted dropdown-item" href="#">Nivel Básico</a></li>
                                    <li><a class="text-muted dropdown-item" href="#">Nivel Medio</a></li>
                                    <li><a class="text-muted dropdown-item" href="#">Nivel Avanzado</a></li>
                                </ul>
                            </li>
                            <li>
                                <a class="nav-link active" href="#" aria-label="Search">
                                    <svg xmlns="" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                                </a>
                            </li>
                        </ul>
                        <div class="col-md-3 text-end">
                            <button type="button" class="btn btn-outline-success me-2">
                            <Link to="/login" class="nav-link active" href="#">Login</Link>    
                            </button>
                            <button type="button" class="btn btn-success">Sign-up</button>
                        </div>
                    </div>
                </div>
            </nav>

        </header>

    )
}

export default Navbar;