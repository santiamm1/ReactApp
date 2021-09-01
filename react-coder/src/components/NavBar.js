const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"><img src="https://energe.com.ar/wp-content/uploads/2020/04/cropped-Energe-color-300x97.png" width="" height="30" class="d-inline-block align-top"></img></a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Inicio <span class="sr-only"></span></a>
                        <a class="nav-item nav-link" href="#">Doméstico</a>
                        <a class="nav-item nav-link" href="#">Industrial</a>
                        <a class="nav-item nav-link" href="#">Contacto</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar