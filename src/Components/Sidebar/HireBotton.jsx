import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
const HireButton = () => {
  return (
    <div className="hire-btn text-center">
      <Link to="/contact">
        <button type="button">
          <IoIosSend /> Hire Me
        </button>
      </Link>
    </div>
  );
};

export default HireButton;
