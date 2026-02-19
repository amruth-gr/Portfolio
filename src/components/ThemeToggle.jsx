import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="theme-toggle-wrapper">
      <button
        className="theme-toggle"
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <span className="theme-tooltip">
        {theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"}
      </span>
    </div>
  );
}
