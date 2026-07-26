import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-media d-flex justify-content-center py-3">
      <a
        href="https://www.facebook.com/dhirendrabam001/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/ig_dhirendra01/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/dhirendrabam001/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/dhirendrabam001/"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialLinks;
