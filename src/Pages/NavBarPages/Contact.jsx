import Footer from "../../Components/Footer";
import AnimationPath from "../../Animated/AnimationPath";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdPhonelinkRing, MdOutlineAttachEmail } from "react-icons/md";
import { FaLocationPinLock } from "react-icons/fa6";
import { useState } from "react";
import { toast } from "react-toastify";

import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    location: "",
    message: "",
  });

  const changeHandle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.number ||
      !formData.location ||
      !formData.message
    ) {
      toast.error("Please Field All Required");
    }
    try {
      const res = await axios.post(
        "https://portfolio-backend-1-zwa0.onrender.com/api/user/userData",
        formData
      );
      toast.success("Thank you for contacting us");

      setFormData({
        name: "",
        email: "",
        number: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Server error ❌");
    }
  };

  return (
    <>
      <div className="blog-pages">
        <section className="contact-pages">
          <div className="service-heading text-center py-4">
            <AnimationPath direction="left" delay={0.3}>
              <h2 className="fw-bold fs-1">Let’s Connect</h2>
              <p className="mx-5">
                I’m always excited to collaborate, share ideas, or discuss new
                opportunities. Whether you have a project, internship, or just
                want to say hello
                <br /> Feel free to reach out at,
                <span>dhirendrabam12345@gmail.com.</span> Let’s start a
                conversation and create something amazing together!
              </p>
            </AnimationPath>
          </div>
          <div className="contact-media">
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
          <hr className="service-hr mt-5" />
          {/* CONTACT-DETAILS */}
          <div className="contact-details">
            <AnimationPath direction="left" delay={0.1}>
              <div className="service-line d-flex gap-2">
                <div className="title-line"></div>
                <h2 className="fs-1 fw-bold">Contact Details</h2>
              </div>
              <div className="my-2">
                <p>
                  Here you can find all the ways to reach me directly. From
                  email to phone, location, and social profiles.
                  <br /> These details make it easy to connect for
                  collaborations, projects, or any inquiries. I’m always happy
                  to hear.
                  <br />
                  From fellow developers, recruiters, or anyone interested in
                  working together.
                </p>
              </div>
            </AnimationPath>
          </div>
          {/* HERE INFO CONTACT */}
          <div className="contact-details-info">
            <AnimationPath direction="bottom" delay={0.2}>
              <div className="row justify-content-center align-items-center g-5 g-md-3">
                <div className="col-12 col-md-4 col-lg-4">
                  <div className="contact-info-section d-flex align-items-center gap-4">
                    <div className="contact-line"></div>
                    <div className="contact-all-bar d-flex align-items-center gap-3">
                      <MdPhonelinkRing className="icons-contact" />
                      <div className="contact-left">
                        <h5>Phone</h5>
                        <p>+916284844323</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* LOCATION */}
                <div className="col-12 col-md-4 col-lg-4">
                  <div className="contact-info-section d-flex align-items-center gap-4">
                    <div className="contact-line"></div>
                    <div className="contact-all-bar d-flex align-items-center gap-3">
                      <FaLocationPinLock className="icons-contact" />
                      <div className="contact-left">
                        <h5>Location</h5>
                        <p>Chandigarh City, India</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Email */}
                <div className="col-12 col-md-4 col-lg-4">
                  <div className="contact-info-section d-flex align-items-center gap-4">
                    <div className="contact-line"></div>
                    <div className="contact-all-bar d-flex align-items-center gap-3">
                      <MdOutlineAttachEmail className="icons-contact" />
                      <div className="contact-left">
                        <h5>Email</h5>
                        <p>dhirendrabam12345@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationPath>
            <div className="map-location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13744.554105595782!2d75.947376237911!3d30.545390024863188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391069a660696aef%3A0x3bc789e57615106b!2sChandigarh%2C%20Punjab%20148023!5e0!3m2!1sen!2sin!4v1768553727613!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* TOUCH WITH ME */}
            <div className="getinto-touch">
              <AnimationPath direction="left" delay={0.1}>
                <div className="service-line d-flex gap-2">
                  <div className="title-line"></div>
                  <h2 className="fs-1 fw-bold">Get In Touch</h2>
                </div>
                <div className="my-2">
                  <p>
                    Have a question, an idea, or an opportunity in mind? I’m
                    always open to discussing.
                    <br /> New projects, internships, and collaborations.
                    Whether you’re a recruiter, a fellow.
                    <br /> Developer, or someone looking to build something
                    meaningful, feel free to reach out.
                    <br /> I’d love to connect and explore how we can work
                    together.
                  </p>
                </div>
              </AnimationPath>
            </div>
            {/* FORM SECTION */}
            <div className="contact-form">
              <AnimationPath direction="left" delay={0.25}>
                <form onSubmit={handleSubmit}>
                  <div className="row justify-content-center align-items-center g-4 g-sm-1">
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="contact-form-info">
                        <div className="mb-3">
                          <input
                            type="text"
                            value={formData.name}
                            onChange={changeHandle}
                            className="form-control"
                            name="name"
                            placeholder="Enter Your Name*"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="contact-form-info">
                        <div className="mb-3">
                          <input
                            type="email"
                            value={formData.email}
                            onChange={changeHandle}
                            className="form-control"
                            name="email"
                            placeholder="Enter Your Email*"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="contact-form-info">
                        <div className="mb-3">
                          <input
                            type="text"
                            value={formData.number}
                            onChange={changeHandle}
                            name="number"
                            className="form-control"
                            placeholder="Enter Your Phone Number*"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="contact-form-info">
                        <div className="mb-3">
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={changeHandle}
                            className="form-control"
                            placeholder="Enter Your Location*"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact-form-info">
                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            value={formData.message}
                            onChange={changeHandle}
                            name="message"
                            placeholder="Enter Your Message*"
                            rows="5"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 p-1 m-1">
                      <div className="form-check d-flex align-items-start gap-2 ms-3">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label small">
                          Save my name, email, and website in this browser for
                          the next time.
                        </label>
                      </div>
                    </div>
                    <div className="col-12 text-start msz-btn">
                      <button type="submit" className="send-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </AnimationPath>
            </div>
          </div>
        </section>
        <div className="footer-infos">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
