import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import "./Spinner.scss"

const spinnerIcon = <FontAwesomeIcon icon={faSun} />

const Spinner = () => {
    return (
        <div className="spinnerContainer">
            <div className="spinnerIcon">{spinnerIcon}</div>
        </div>
    );
}

export default Spinner;