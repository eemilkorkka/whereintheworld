import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

interface NavbarProps {
    setTheme: (theme: string) => void;
    currentTheme: string;
}

const Navbar = ({ setTheme, currentTheme }: NavbarProps) => {
    const toggleTheme = () => {
        setTheme(currentTheme === "dark" ? "" : "dark");
    };

    return (
        <header>
            <nav className="navbar">
                <h1 className="sign">Where in the world?</h1>
                <p className="dark-mode-toggle" onClick={toggleTheme}>
                    <FontAwesomeIcon icon={currentTheme == "dark" ? faSun : faMoon} />
                    <span>{currentTheme == "dark" ? "Light Mode" : "Dark Mode"}</span>
                </p>
            </nav>
        </header>
    );
};

export default Navbar;
