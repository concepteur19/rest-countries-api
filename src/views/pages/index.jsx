import React, { useEffect, useState } from "react";
import SearchBar from "../components/searchBar";
import Navbar from "../components/layout/navbar";
import SelectInput from "../components/selectInput";
import getAllCountries from "../../apis/getAllCountriesApi";
import CountriesCard from "../components/countriesCard";
import { useTheme } from "../../contexts/themeContext";
import { Link } from "react-router-dom";


const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    getAllCountries().then((response) => {
      setCountries(response);
      setFilteredCountries(response);
    });
  }, []);

  const filteringByRegion = (region) => {
    const resultCountries = countries.filter(
      (country) => country.region === region
    );

    console.log(resultCountries);
    setFilteredCountries(resultCountries);
  };

  const filteringByName = (name) => {
    const resultCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      const searchQuery = name.toLowerCase();
      return countryName.includes(searchQuery);
    });

    console.log(resultCountries);
    setFilteredCountries(resultCountries);
  };
  return (
    
      <div className={` px-72 max-2xl:px-20 max-xl:px-12 max-sm:px-4 w-full space-y-8 ${
        !isDarkTheme
          ? "bg-backgroundLight text-textDark"
          : "bg-backgroundDark text-textLight"
      }
      `}>
        <div className=" flex max-sm:flex-col max-sm:space-y-8 justify-between items-center max-sm:items-start">
          <SearchBar filterByName={filteringByName} />
          <SelectInput filterByRegion={filteringByRegion} />
        </div>
        <div className=" grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:px-10 gap-12">
          {filteredCountries.length > 0
            ? filteredCountries.map((country, index) => {
                return (
                  <Link
                    to={`/country/${country.name.common}`}
                    key={index + "$"}
                    
                  >
                    <CountriesCard countryDetails={country} />
                  </Link>
                );
              })
            : null}
        </div>
      </div>
    
  );
};

export default Home;
