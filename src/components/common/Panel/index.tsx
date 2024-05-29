import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";

export default function Panel({ title, children }) {
  const theme = useContext(ThemeContext);

  console.log(theme);

  return (
    <section
      style={
        theme === "light"
          ? { color: "#222", background: "#fff" }
          : { color: "#fff", background: "#222" }
      }
    >
      <h1 className="">{title}</h1>
      {children}
    </section>
  );
}
