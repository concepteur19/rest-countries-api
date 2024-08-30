import ThemeContext from "../../../../contexts/themeContext";
import React, { useContext, useState } from "react";
import { PiMoon, PiSun } from "react-icons/pi";
// import ThemeSwitcher from "../../../components/themeSwitcher";

const Navbar = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      
      <div
        className={` ${
          !isDarkTheme ? "bg-elementLight" : " bg-elementDark"
        }  shadow-sm flex items-center justify-between 2xl:justify-center py-6 2xl:px-32 xl:px-12 sm:px-8 px-6 2xl:space-x-[1048px] w-full `}
      >
        {/* <ThemeSwitcher /> */}
        
        <span className=" font-extrabold text-lg max-sm:text-[16px]  ">
          Where in the world?
        </span>
        <div
          className="flex items-center space-x-2 cursor-pointer "
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          {!isDarkTheme ? (
            <React.Fragment>
              {" "}
              <PiMoon className="stroke-1 " size={18} />{" "}
              <span className=" font-bold max-sm:text-sm ">Dark Mode</span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {" "}
              <PiSun className="stroke-1 " size={18} />{" "}
              <span className=" font-bold ">Light Mode</span>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
