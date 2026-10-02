import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    { icon: <FaGithub />, href: "https://github.com/", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://instagram.com/", label: "Instagram" },
    { icon: <FaFacebook />, href: "https://facebook.com/", label: "Facebook" },
  ];

  return (
    <footer className="site-footer">
      {/* Top divider line */}
      <div className="footer-divider" />

      <div className="footer-inner container-fluid">
        {/* Row 1 — brand + nav links */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-name">
              Dhirendra <span>Bam</span>
            </h3>
            <p className="footer-tagline">
              Full Stack Developer — building clean, fast &amp; scalable web apps.
            </p>
          </div>

          {/* Nav links */}
          <nav className="footer-nav" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.to} className="footer-nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Row 2 — copyright + socials */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} <span>Dhirendra Bam</span>. All rights reserved.
          </p>

          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="footer-social-icon"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <p className="footer-credit">
            Designed &amp; Built by <span>Dhirendra Bam</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
