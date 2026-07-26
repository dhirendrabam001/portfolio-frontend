import { FaHome, FaBriefcaseMedical, FaBlog } from "react-icons/fa";
import { MdMiscellaneousServices, MdContactPhone } from "react-icons/md";
import { GrResume } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const SidebarNav = () => {
  return (
    <div className="navbar-info d-flex flex-column flex-shrink-0 p-2">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" end className="nav-link">
            <FaHome className="me-2" />
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/about-us" className="nav-link">
            <FaHome className="me-2" />
            About Us
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/services" className="nav-link">
            <MdMiscellaneousServices className="me-2" />
            Services
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/portfolio" className="nav-link">
            <FaBriefcaseMedical className="me-2" />
            Portfolio
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/resume" className="nav-link">
            <GrResume className="me-2" />
            Resume
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/blog" className="nav-link">
            <FaBlog className="me-2" />
            Blog
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">
            <MdContactPhone className="me-2" />
            Contact Us
          </NavLink>
        </li>
      </ul>
      <hr className="hr-navbar" />
    </div>
  );
};

export default SidebarNav;
