import React, { useEffect, useRef, useState, useContext } from "react";
// react-icons
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ThemeContext from "../../../contexts/themeContext";

const Index = ({ filterByRegion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState("Filter by Region");
  const selectRef = useRef(null);
  const { isDarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleSelectedOption = (option) => {
    setOption(option);
    filterByRegion(option);
    handleClickOutside();
    // setIsOpen(false);
  };

  return (
    <React.Fragment>
      <div
        ref={selectRef}
        className={`relative cursor-pointer flex items-center justify-between rounded shadow ${
          !isDarkTheme ? "bg-elementLight" : " bg-elementDark"
        } py-3 pr-3 pl-6 w-44 max-sm:w-52`}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <span> {option} </span>
        {!isOpen ? (
          <BiChevronDown size={16} className=" stroke-0 " />
        ) : (
          <BiChevronUp size={16} className=" stroke-0 " />
        )}

        {isOpen && (
          <div className=" absolute w-full top-12 right-0 z-10 animate:translate-y-2 duration-300 ease-in-out transition-all">
            <ul
              className={` py-2 ${
                !isDarkTheme ? "bg-elementLight" : " bg-elementDark"
              }  rounded shadow  `}
            >
              <li
                className={`py-1 pl-5 hover:bg-backgroundDark hover:text-textLight cursor-pointer `}
                onClick={() => handleSelectedOption("Africa")}
              >
                Africa
              </li>
              <li
                className={`py-1 pl-5 hover:bg-backgroundDark hover:text-textLight cursor-pointer `}
                onClick={() => handleSelectedOption("Americas")}
              >
                Americas
              </li>
              <li
                className={`py-1 pl-5 hover:bg-backgroundDark hover:text-textLight cursor-pointer `}
                onClick={() => handleSelectedOption("Asia")}
              >
                Asia
              </li>
              <li
                className={`py-1 pl-5 hover:bg-backgroundDark hover:text-textLight cursor-pointer `}
                onClick={() => handleSelectedOption("Europe")}
              >
                Europe
              </li>
              <li
                className={`py-1 pl-5 hover:bg-backgroundDark hover:text-textLight cursor-pointer `}
                onClick={() => handleSelectedOption("Oceania")}
              >
                Oceania
              </li>
            </ul>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Index;
