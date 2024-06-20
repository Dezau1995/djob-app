import ToogleTheme from "../components/ToogleTheme";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme } = useTheme();
  return (
    <header className={`display-header ${theme}`} style={{ padding: "1rem" }}>
      <ToogleTheme />
    </header>
  );
}

export default Header;
