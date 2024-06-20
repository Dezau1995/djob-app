import { useTheme } from "../context/ThemeContext";
import "./toogletheme.css"

function ToogleTheme() {
const {handleClick} = useTheme();

  return (
    <div>
      <label className="toggle">
        <input
          onClick={handleClick}
          className="toggle-checkbox"
          type="checkbox"
        />
        <div className="toggle-switch" />
      </label>
    </div>
  );
}

export default ToogleTheme;
