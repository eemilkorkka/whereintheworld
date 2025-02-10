import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CountryView from './pages/CountryView'
import { useState, useEffect } from 'react'
import { Country } from "./utils/utils";

const App = () => {

  const [countries, setCountries] = useState<Country[]>([]);
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        console.log(data);

        setCountries(data);
      } catch (error) {
        console.log("An error occurred whilst trying to fetch data.");
        return "N/A";
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="App" data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setTheme={setTheme} currentTheme={theme} />} />
          {countries.map((country: any) => (
            <Route
              key={country.name.common}
              path={`/${country.name.common}`}
              element={
                <CountryView
                  key={country.name.common}
                  flag={country.flags.svg} 
                  name={country.name.common}
                  nativeName={country.name.nativeName}
                  population={country.population}
                  region={country.region}
                  subRegion={country.subregion} 
                  capital={country.capital}
                  topLevelDomain={country.tld}
                  currencies={country.currencies}
                  languages={country.languages}
                  borderingCountries={country.borders}
                  setTheme={setTheme}
                  currentTheme={theme}
                />
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
