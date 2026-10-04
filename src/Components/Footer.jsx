import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiArrowUp,
  HiArrowUpRight,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Resume", to: "/resume" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { icon: <FaGithub />, href: "https://github.com/dhirendrabam001/", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/dhirendrabam001/", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/ig_dhirendra01/", label: "Instagram" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/dhirendrabam001/", label: "Facebook" },
];

const contacts = [
  {
    icon: <HiOutlineEnvelope />,
    text: "dhirendrabam12345@gmail.com",
    href: "mailto:dhirendrabam12345@gmail.com",
  },
  { icon: <HiOutlinePhone />, text: "+977 970 936 7836", href: "tel:+9779709367836" },
  { icon: <HiOutlineMapPin />, text: "Kathmandu, Nepal" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="site-footer">
      {/* Call to action */}
      <div className="sf-cta">
        <div>
          <span className="sf-status">
            <i /> Available for new projects
          </span>
          <h3 className="sf-cta-title">
            Have a project in mind? <span>Let’s build it together.</span>
          </h3>
        </div>
        <Link to="/contact" className="sf-cta-btn">
          Get in touch <HiArrowUpRight />
        </Link>
      </div>

      <div className="sf-grid">
        {/* Brand */}
        <div className="sf-brand">
          <h4 className="sf-name">
            Dhirendra <span>Bam</span>
          </h4>
          <p className="sf-tagline">
            Full Stack Developer building clean, fast and scalable web
            applications with Node.js, React and MongoDB.
          </p>
          <div className="sf-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="sf-social"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <nav className="sf-col" aria-label="Footer navigation">
          <h5 className="sf-heading">Quick links</h5>
          <ul className="sf-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="sf-col">
          <h5 className="sf-heading">Contact</h5>
          <ul className="sf-contact">
            {contacts.map((c) => (
              <li key={c.text}>
                <span className="sf-contact-icon">{c.icon}</span>
                {c.href ? <a href={c.href}>{c.text}</a> : <span>{c.text}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sf-bottom">
        <p>
          © {currentYear} <span>Dhirendra Bam</span>. All rights reserved.
        </p>
        <p className="sf-built">Designed &amp; built with React</p>
        <button type="button" className="sf-top" onClick={toTop} aria-label="Back to top">
          <HiArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
