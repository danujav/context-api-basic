import { useState } from "react";
import "./App.css";
import Form from "./components/common/Form";
import ThemeContext from "./context/ThemeContext";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        use dark theme
      </label>
    </ThemeContext.Provider>
  );
}
