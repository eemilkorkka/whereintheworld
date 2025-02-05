import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Searchbar.css';


interface SearchBarProps {
    setSearchText: (text: string) => void;
}

const SearchBar = ({ setSearchText }: SearchBarProps) => {

    return (
        <div className="search-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input 
                type="search" 
                placeholder="Search for a country..." 
                className="search-input" 
                onChange={(e) => {setSearchText(e.target.value)}} 
            />
        </div>
    )
}

export default SearchBar;