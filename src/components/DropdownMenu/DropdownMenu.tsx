import { useEffect, useState } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Dropdown.css";

interface DropdownMenuProps {
    setSelectedRegion: (region: string) => void;
}

const DropdownMenu = ({ setSelectedRegion }: DropdownMenuProps) => {

    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    return (
        <div className="dropdown-menu-container">
            <button className="dropdown-button-container" onClick={() => setDropdownOpen(prev => !prev)}>
                <span className="dropdown-button">Filter by Region</span>
                <FontAwesomeIcon className="dropdown-icon" icon={faAngleDown} size="sm" />
            </button>
            <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                {regions.map(region => (
                    <button
                        key={region}
                        className="dropdown-menu-item"
                        onClick={() => {setSelectedRegion(region); setDropdownOpen(false)}} 
                    >
                        {region}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default DropdownMenu;