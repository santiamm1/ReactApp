import CarWidget from './CarWidget'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><img src="https://energe.com.ar/wp-content/uploads/2020/04/cropped-Energe-color-300x97.png" width="" height="30" className="d-inline-block align-top"></img></a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Inicio <span className="sr-only"></span></a>
                        <a className="nav-item nav-link" href="#">Doméstico</a>
                        <a className="nav-item nav-link" href="#">Industrial</a>
                        <a className="nav-item nav-link" href="#">Contacto</a>
                        <CarWidget/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar