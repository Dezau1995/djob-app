import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const handleClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleClick }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

ThemeProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
