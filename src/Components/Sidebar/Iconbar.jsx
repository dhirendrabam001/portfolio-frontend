import { FaBolt } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";

const IconBar = ({ theme, toggleTheme }) => {
  return (
    <div className="icon-bar py-5 position-relative">
      <div className="icon bolt mb-3 position-relative">
        <FaBolt />
        <span className="position-absolute badge bg-warning text-dark top-0 start-100 translate-middle my-2">
          02
        </span>
      </div>

      <div className="icon bs-card mb-3">
        <BsCart3 />
      </div>
      <div className="icon light-con mb-3" onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </div>
    </div>
  );
};

export default IconBar;
