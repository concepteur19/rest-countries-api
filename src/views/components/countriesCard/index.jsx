import ThemeContext from "../../../contexts/themeContext";
import React, { useContext } from "react";

const Index = ({ countryDetails }) => {
  const spanStyle = " font-normal";
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`rounded shadow h-80 ${
      !isDarkTheme ? "shadow" : " shadow-md bg-elementDark"
    }  `}>
      <img
        src={countryDetails.flags.png}
        className=" borde h-40 w-full object-cover rounded-t "
        alt={countryDetails.flags.alt}
      />
      <div className=" p-6 space-y-2 font-semibold">
        <span className=" font-extrabold text-[16px] ">
          {" "}
          {countryDetails.name.common}{" "}
        </span>{" "}
        <br />
        <div className=" font-bold ">
          <span>
            {" "}
            Population:{" "}
            <span className={spanStyle}> {countryDetails.population} </span>
          </span>{" "}
          <br />
          <span>
            {" "}
            Region: <span className={spanStyle}> {countryDetails.region} </span>
          </span>{" "}
          <br />
          <span>
            {" "}
            Capital:{" "}
            <span className={spanStyle}> {countryDetails.capital} </span>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Index;
