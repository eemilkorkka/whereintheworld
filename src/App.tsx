import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CountryView from './pages/CountryView'
import { useState, useEffect } from 'react'
import { Country } from "./utils/utils";

const App = () => {

  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        console.log(data);

        setCountries(data);
      } catch (error) {
        console.log("An error occurred whilst trying to fetch data.");
      }
    };

    fetchCountries();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {countries.map((country: any) => (
          <Route
            key={country.name.common}
            path={`/${country.name.common}`}
            element={
              <CountryView 
                name={country.name.common} 
                
              />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
