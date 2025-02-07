import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/Searchbar/Searchbar'
import CountryCard from './components/CountryCard/CountryCard';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';

function App() {

  type Country = {
    name: string,
    population: number,
    region: string,
    capital?: string[],
  }

  const [countries, setCountries] = useState<Country[]>([]);
  const [searchText, setSeachText] = useState<string>('');
  const [notFound, setNotFound] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  useEffect(() => {
    setCountries([]);
    setNotFound(false); 
    searchText == "" ? getCountries() : searchForCountry();
  }, [searchText, selectedRegion]);

  const getCountries = async () => {
    try {
      if (selectedRegion && selectedRegion !== 'All') {

        const response = await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`);
        const data = await response.json();
        
        setCountries(data);
      } else if (selectedRegion === 'All' || selectedRegion === '') {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      }
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
      
      console.log(response, selectedRegion);

      const data = await response.json();

      const filteredCountries = selectedRegion && selectedRegion !== 'All'
        ? data.filter((country: any) => country.region === selectedRegion)
        : data;

      if (filteredCountries.length == 0) {
        setNotFound(true)
      } else {
        setCountries(filteredCountries);
        setNotFound(false)
      }
    } catch (error) {
      console.log("An error occurred whilst trying to search for a country: " + error);
    }
  }

  const formatCapitals = (capitals: string[]): string => {
    return capitals.join(', ');
  }

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="search_region-container">
          <SearchBar setSearchText={setSeachText} />
          <DropdownMenu setSelectedRegion={setSelectedRegion} />
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
                capital={country.capital ? (country.capital.length > 1 ? formatCapitals(country.capital) : country.capital[0]) : 'N/A'}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
