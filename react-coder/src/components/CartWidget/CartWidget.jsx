import "./CartWidget.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const cartIcon = <FontAwesomeIcon icon={faShoppingBag} />


const CartWidget = () => {
    return (
        <button className="navbar__item navbar__cartIcon">{cartIcon}</button>
    );
}

export default CartWidget;