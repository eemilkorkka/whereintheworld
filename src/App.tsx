import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/Searchbar/Searchbar'
import CountryCard from './components/CountryCard/CountryCard';

function App() {

  type Country = {
    name: string,
    population: number,
    region: string,
    capital: string,
  }

  const [countries, setCountries] = useState<Country[]>([]);
  const [searchText, setSeachText] = useState<string>('');

  useEffect(() => { 
    searchText == "" ? getCountries() : searchForCountry();
  }, [searchText]);

  const getCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log("An error occured when trying to fetch countries: " + error);
    }
  }

  const searchForCountry = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${searchText}`);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log("An error occurred whilst trying to search for a country: " + error);
    }
  }

  return (
    <>
      <Navbar />
      <SearchBar setSearchText={setSeachText} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="countries-container">
          {countries.map((country: any) => {
            return (
              <CountryCard
                key={country.name.common}
                flag={country.flags.png} 
                countryName={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
