import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";

export default function Button({ children }) {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={
        theme === "light"
          ? {
              color: "#fff",
              background: "#222",
            }
          : {
              color: "#222",
              background: "#fff",
            }
      }
    >
      {children}
    </button>
  );
}
