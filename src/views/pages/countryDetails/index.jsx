import React, { useEffect, useState } from "react";
import { useTheme } from "../../../contexts/themeContext";
import { PiArrowLeft } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import getCountryDetail from "../../../apis/getCountryDetail";
import getCountriesBySubregion from "../../../apis/getCountriesBySubregion";

const CountryDetails = () => {
  const { isDarkTheme } = useTheme();
  const navigate = useNavigate();
  const { name } = useParams();
  const [countryDetails, setCountry] = useState({
    languages: {},
    flags: {},
    name: {nativeName: {eng: {}, fra: {}}},
    capital: [],
    tld: [],
    currencies: [],
  });
  const [languages, setLanguages] = useState([]);
  const [currenciesTab, setCurrenciesTab] = useState([]);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    getCountryDetail(name).then((response) => {
      console.log(response);
      setCountry(response[0]);
    });
  }, [name]);

  const SpanStyle = " font-light";

  useEffect(() => {
    if (countryDetails.subregion) {
      getCountriesBySubregion(countryDetails.subregion).then((response) => {
        const respFiltered = [...response].filter(
          (country) => country.name.common !== countryDetails.name.common
        );

        return setBorderCountries(respFiltered);
      });
    }

    const { languages, currencies } = countryDetails;
    const languagesTab = Object.keys(languages);
    const currenciesTab = Object.keys(currencies);

    setLanguages(languagesTab);
    setCurrenciesTab(currenciesTab);
  }, [countryDetails]);

  useEffect(() => {
    console.log(languages);
  }, [languages])

  return (
    <div
      className={`2xl:px-32 xl:px-12 sm:px-8 px-6 w-full min-h-[60vh] pb-8 text-[16px] flex flex-col items-center ${
        !isDarkTheme
          ? "bg-backgroundLight text-textDark"
          : "bg-backgroundDark text-textLight"
      }
          `}
    >

      <div>
      <div className=" lg:py-8 py-4 flex justify-start w-full">
        {" "}
        <button
          className={` ${
            !isDarkTheme ? "bg-elementLight" : " bg-elementDark"
          }  shadow-md rounded-md py-2 px-8 flex items-center space-x-2 `}
          onClick={() => navigate(-1)}
        >
          <PiArrowLeft className="stroke-2" size={18} />
          <span>Back</span>
        </button>
      </div>

      {countryDetails ? (
        <div className=" flex flex-col lg:flex-row lg:items-center 2xl:space-x-32 xl:space-x-8 lg:space-x-8 space-y-10 ">
          <img
            src={countryDetails.flags.svg}
            alt={countryDetails.flags.alt}
            className=" w-[550px] md:w-[96] h-88 shadow-lg max-sm:shadow max-sm:mt-3 "
          />

          <div className=" space-y-8 max-sm:space-y-6">
            <h2 className=" text-2xl font-extrabold ">
              {" "}
              {countryDetails.name.common}{" "}
            </h2>

            <div className="grid grid-flow-row grid-cols-1 lg:grid-flow-col lg:grid-rows-5 font-semibold gap-y-2 2xl:gap-x-32 xl:gap-x-8 max-sm:gap-x-0 ">
              <span>
                Native Name:
                <span className={SpanStyle}> {countryDetails.name.nativeName[languages[0]]? countryDetails.name.nativeName[languages[0]].official : '' }  </span>
              </span>
              <span>
                Population:
                <span className={SpanStyle}> {countryDetails.population} </span>
              </span>
              <span>
                Region:
                <span className={SpanStyle}> {countryDetails.region}</span>
              </span>
              <span>
                Sub Region:
                <span className={SpanStyle}> {countryDetails.subregion} </span>
              </span>
              <span className=" max-sm:pt-8 ">
                Capital:
                <span className={`${SpanStyle} `}>
                  {" "}
                  {countryDetails.capital[0]}
                </span>
              </span>
              <span>
                Top Level Domain:
                <span className={SpanStyle}> {countryDetails.tld[0]}</span>
              </span>
              <span>
                Currencies:
                <span className={SpanStyle}>
                  {" "}
                  {currenciesTab.map((currency, id) => (
                    <span key={id + currency}>
                      {" "}
                      {`${countryDetails.currencies[currency].name}${
                        currenciesTab.length > id + 1 ? "," : ""
                      }`}{" "}
                    </span>
                  ))}
                  {/* countryDetails.currencies[0] */}
                </span>
              </span>
              <span>
                Languages:
                <span className={SpanStyle}>
                  {" "}
                  {languages.map((lang, id) => (
                    <span key={id + lang}>
                      {" "}
                      {`${countryDetails.languages[lang]}${
                        languages.length > id + 1 ? "," : ""
                      }`}{" "}
                    </span>
                  ))}
                </span>
              </span>
            </div>

            <div className=" pt-4 xl:flex lg:items-center xl:space-x-3">
              <span className=" font-semibold">Border countries :</span>

              <span className="flex lg:space-x-3 items-center flex-wrap">
                {borderCountries.slice(0, 3).map((country, id) => (
                  <span
                    key={country.name.common + id}
                    className={`rounded  py-1 px-5 shadow  text-center font-light mb-3 md:mb-0 max-lg:mr-3  ${
                      !isDarkTheme ? "bg-elementLight " : "bg-elementDark "
                    }`}
                  >
                    {" "}
                    {country.name.common}{" "}
                  </span>
                ))}{" "}
              </span>
            </div>
          </div>
        </div>
      ) : (
        "No data found  or no internet connection"
      )}
      </div>
      
    </div>
  );
};

export default CountryDetails;
