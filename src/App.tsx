import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/Searchbar/Searchbar'
import CountryCard from './components/CountryCard/CountryCard';
import DropdownMenu from './components/DropdownMenu.tsx/DropdownMenu';

function App() {

  type Country = {
    name: string,
    population: number,
    region: string,
    capital: string,
  }

  const [countries, setCountries] = useState<Country[]>([]);
  const [searchText, setSeachText] = useState<string>('');
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => { 
    searchText == "" ? getCountries() : searchForCountry();
    setNotFound(false);
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

      if (response.status === 404) {
        setCountries([]);
        setNotFound(true);
        return
      }

      const data = await response.json();
      setCountries(data);
      setNotFound(false);
    } catch (error) {
      console.log("An error occurred whilst trying to search for a country: " + error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="search-container">
          <SearchBar setSearchText={setSeachText} />
          <DropdownMenu />
        </div>
        <div style={{ display: notFound ? 'block' : 'none', textAlign: 'center', marginTop: '15%' }}>
          {notFound && <h2>No results found!</h2>}
        </div>
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
