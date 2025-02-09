import "./CountryView.css";
import Navbar from "../components/Navbar/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface CountryDetails {
    flag: string;
    name: string;
    nativeName: { [key: string]: { official: string; common: string } };
    population: number;
    region: string;
    subRegion?: string;
    capital?: string[];
    topLevelDomain: string[];
    currencies: string;
    languages: { [key: string]: string };
    borderingCountries: string[];
}

const CountryView = ({ 
    flag, 
    name,
    nativeName, 
    population, 
    region, 
    subRegion, 
    capital, 
    topLevelDomain, 
    currencies, 
    languages, 
    borderingCountries 
}: CountryDetails) => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="main-countryview">
                <div className="return-button-container">
                    <FontAwesomeIcon icon={faArrowLeftLong} className="arrow-icon" />
                    <button onClick={() => navigate("/")}>Back</button>
                </div>
                <div className="country-details-container">
                    <div className="flag-container">
                        <img src={flag} />
                    </div>
                    <div className="information-container">
                        <h2>{name}</h2>
                        <div className="information">
                            <div className="left-info">
                                <p>Native Name: <span>{nativeName[Object.keys(nativeName)[0]].common}</span></p>
                                <p>Population: <span>{population}</span></p>
                                <p>Region: <span>{region}</span></p>
                                <p>Subregion: <span>{subRegion ? subRegion : "N/A"}</span></p>
                            </div>
                            <div className="right-info">
                                <p>Capital: <span>{capital ? capital?.join(", ") : "N/A"}</span></p>
                                <p>Top Level Domain: <span>{topLevelDomain.join(", ")}</span></p>
                                <p>Currencies: <span>{Object.keys(currencies)}</span></p>
                                <p>Languages: <span>{Object.values(languages).join(", ")}</span></p>
                            </div>
                        </div>
                        <div className="neighbouring-countries-container">
                            <p>Border Countries:</p>
                            {borderingCountries.map((country: any) => (
                                <button>{country}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryView;