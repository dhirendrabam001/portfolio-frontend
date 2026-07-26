import { FaArrowRightLong } from "react-icons/fa6";
import { GrResume } from "react-icons/gr";
import { Link } from "react-router-dom";
const ViewBotton = () => {
  return (
    <div className="view-btn d-flex align-items-center gap-3 mt-4">
      <div className="btn-1">
        <Link to="/portfolio">
          <button>
            <FaArrowRightLong className="me-2" />
            View Portfolio
          </button>
        </Link>
      </div>
      <div className="btn-1">
        <Link to="/resume">
          <button>
            <GrResume className="me-2" />
            View Resume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewBotton;
