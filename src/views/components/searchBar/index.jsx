import React, { useContext } from "react";
// components
import Input from "../Shared/Input";
// react-icons
import { BiSearch } from "react-icons/bi";
import ThemeContext from "../../../contexts/themeContext";

const Index = ({ filterByName }) => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex items-center w-[50%] max-sm:w-full  ${
        !isDarkTheme ? "bg-elementLight" : " bg-elementDark"
      } px-6 py-1 space-x- rounded text-sm text-inputColor shadow`}
    >
      <BiSearch size={18} className=" stroke-[0px]  cursor-pointer mr-6 " />
      <Input
        inputId="searchBar"
        inputType="text"
        placeholder="Search for a country..."
        handleChange={(e) => filterByName(e.target.value)}
        inputClass=" font-light bg-elementLight outline-none bg-transparent "
      />
    </div>
  );
};

export default Index;
