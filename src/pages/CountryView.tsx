import "./CountryView.css";
import Navbar from "../components/Navbar/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
    borderingCountries?: string[];
    setTheme: (theme: string) => void;
    currentTheme: string;
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
    borderingCountries,
    setTheme,
    currentTheme 
}: CountryDetails) => {

    const navigate = useNavigate();
    const [borderCountryNames, setBorderCountryNames] = useState<string[]>([]);

    useEffect(() => {
        const getFullName = async () => {
          try {
            const names = await Promise.all(
              borderingCountries?.map(async (country) => {
                const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${country}`);
                const data = await response.json();
                return data[0].name.common;
              }) || []
            );
            setBorderCountryNames(names);
          } catch (error) {
            console.log("An error occurred whilst trying to fetch country names");
          }
        }
    
        getFullName();
    }, [borderingCountries]);

    return (
        <>
            <Navbar setTheme={setTheme} currentTheme={currentTheme} />
            <div className="main-countryview">
                <div className="return-button-container">
                    <button onClick={() => navigate("/")}>
                        <FontAwesomeIcon icon={faArrowLeftLong} className="arrow-icon" />
                        <span>Back</span>
                    </button>
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
                        <div className="bordering-countries-container">
                            <p>Border Countries:</p>
                            {borderCountryNames?.map((country: any) => (
                                <button onClick={() => navigate(`/${country}`)}>{country}</button>
                            ))}
                            {!borderingCountries && <span>N/A</span>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryView;