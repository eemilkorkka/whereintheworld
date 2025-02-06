import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Dropdown.css";

const DropdownMenu = () => {
    return (
        <div className="dropdown-menu-container">
            <button className="dropdown-button">Filter By Region</button>
            <FontAwesomeIcon className="dropdown-icon" icon={faAngleDown}/>
        </div>
    )
}

export default DropdownMenu;