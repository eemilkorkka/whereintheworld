import "./CountryCard.css"; 

interface CountryCardProps {
    flag: string,
    countryName: string,
    population: number,
    region: string,
    capital: string
}

const CountryCard = ({ flag, countryName, population, region, capital }: CountryCardProps) => {
    return (
        <div className="country-card">
            <div className="image-container">
                <img alt={countryName} src={flag} />
            </div>
            <div className="info-container">
                <div>
                    <p className="country-name">{countryName}</p>
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