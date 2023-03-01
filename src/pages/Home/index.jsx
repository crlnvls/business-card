import React from "react";

import Card from "../../components/Card";
import "./Home.css";
import { createContext, useState } from "react";
import Switch from "@mui/material/Switch";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";

export const ThemeContext = createContext(null);

const Home = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="color-theme" id={theme}>
          <div className="switch">
            <p className="border">
              <BedtimeIcon />
              <Switch color="default" onChange={toggleTheme} />
              <WbSunnyIcon />
            </p>
          </div>
          <Card />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default Home;
