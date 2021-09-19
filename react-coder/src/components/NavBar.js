import CarWidget from './CarWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="NavBar">
            <a className="navBrand" href="#"><img src="https://energe.com.ar/wp-content/uploads/2020/04/cropped-Energe-color-300x97.png" width="" height="30"></img></a>
            <nav className="gridNavbar">
                <a className="navColum" href="#">Inicio</a>
                <a className="navColum" href="#">Doméstico</a>
                <a className="navColum" href="#">Industrial</a>
                <a className="navColum" href="#">Contacto</a>
                <CarWidget/>
            </nav>
        </div>
    )
}

export default NavBar