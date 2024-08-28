import "../src/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryDetails from "./views/pages/countryDetails/index";
import Navbar from "./views/components/layout/navbar";
import Home from "./views/pages/index";
import { useTheme } from "./contexts/themeContext";
import {useParams} from "react"

function App() {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className={`app-container w-full h-[100vh] flex flex-col ${
        !isDarkTheme
          ? "bg-backgroundLight text-textDark"
          : "bg-backgroundDark text-textLight"
      }`}
    >
      <BrowserRouter>
        <div className="space-y-8 max-sm:space-y-4 ">
          <Navbar />
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/country/:name" Component={CountryDetails}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
