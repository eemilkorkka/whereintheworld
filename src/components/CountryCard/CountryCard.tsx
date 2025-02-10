import { Country } from "../../utils/utils";
import "./CountryCard.css"; 

interface CountryCardProps {
    flag: string,
    countryName: string,
    population: number,
    region: string,
    capital: string,
    onClick: (country: string) => void
}

const CountryCard = ({ flag, countryName, population, region, capital, onClick }: CountryCardProps) => {
    return (
        <div className="country-card" onClick={() => onClick(countryName)}>
            <div className="image-container">
                <img alt={countryName} src={flag} />
            </div>
            <div className="info-container">
                <div>
                    <h3 className="country-name">{countryName}</h3>
                </div>
                <div className="country-info">
                    <p>Population: <span>{population}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Capital: <span>{capital}</span></p>
                </div>
            </div>
        </div>
    );
}

export default CountryCard;