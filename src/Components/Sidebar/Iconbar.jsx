import { Link } from "react-router-dom";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { FaMoon, FaSun } from "react-icons/fa";

const IconBar = ({ theme, toggleTheme }) => {
  return (
    <div className="icon-bar py-5 position-relative">
      <button
        type="button"
        className="icon mb-3 border-0"
        onClick={toggleTheme}
        title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        aria-label="Toggle theme"
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>

      <Link
        to="/portfolio"
        className="icon icon-status mb-3"
        title="Available for work"
        aria-label="Available for work - view portfolio"
      >
        <HiOutlineBriefcase />
        <span className="status-dot"></span>
      </Link>
    </div>
  );
};

export default IconBar;
