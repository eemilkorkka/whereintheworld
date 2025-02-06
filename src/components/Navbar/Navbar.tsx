import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <h1 className="sign">Where in the world?</h1>
                <p className="dark-mode-toggle">
                    <FontAwesomeIcon icon={faMoon} />
                    <span>Dark Mode</span>
                </p>
            </nav>
        </header>
    );
}

export default Navbar;