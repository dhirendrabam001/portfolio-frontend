import AnimationPath from "../../Animated/AnimationPath";
import DownloadResumeBtn from "../../Components/Sidebar/DownloadResumeBtn";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { BsBrowserFirefox } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Footer from "../../Components/Footer";

const ResumePage = () => {
  return (
    <>
      <div className="blog-pages">
        <section className="resume-pages">
          <div className="resume-heading text-center py-4">
            <AnimationPath direction="left" delay={0.3}>
              <h2 className="fw-bold fs-2">Online Resume </h2>
              <DownloadResumeBtn />
            </AnimationPath>
          </div>
          <hr className="service-hr" />
          <div className="resume-section">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-9 col-lg-9">
                <div className="resume-header">
                  <h2>Dhirendra Bam</h2>
                  <h5>Full Stack Developer</h5>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <div className="resume-header-right">
                  <p>
                    <IoCallOutline className="me-1" /> +916284844323
                  </p>
                  <p>
                    <CgMail className="me-1" />
                    dhirendrabam12345@gmail.com
                  </p>
                  <p>
                    <BsBrowserFirefox className="me-1" />
                    dhirendrabam.com.np
                  </p>
                  <p>
                    <FaLocationDot className="me-1" /> Nepal
                  </p>
                </div>
              </div>
            </div>
            <hr className="resume-line" />
            <div className="resume-profile">
              <div className="row justify-content-between align-items-center">
                <div className="col-12 col-md-2 col-lg-2">
                  <div className="resume-profile-img ">
                    <img src="/profile.webp" alt="profile" />
                  </div>
                </div>
                <div className="col-12 col-md-10 col-lg-10">
                  <div className="mb-2">
                    <p>
                      Junior Full Stack Developer skilled in React.js, Node.js,
                      Express.js, MongoDB, REST APIs, and JavaScript. Strong
                      understanding of web application development, database
                      management, Git, and API integration, with a commitment to
                      writing clean and maintainable code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="resume-line" />
            {/* Resume content */}
            <div className="resume-content">
              <div className="row">
                <div className="col-12 col-md-8 col-lg-8">
                  <div className="resume-content-left">
                    <div className="service-line d-flex gap-2">
                      <div className="title-line"></div>
                      <h2 className="fs-3 fw-bold">Work Experience</h2>
                    </div>

                    {/* FRONTEND DEVELOPER INTERNSHIP */}
                    <div className="experience-heading d-flex justify-content-between mt-4 align-items-center">
                      <div className="expeerience-content">
                        <h5>Frontend Developer Internship</h5>
                        <p>Amaze Technosoft Pvt Ltd, Zirakpur, India</p>
                      </div>
                      <div className="experience-date">
                        <p>1/2025 to 03/2025</p>
                      </div>
                    </div>
                    <div className="experience-para-left mt-3">
                      <p>
                        <GoDotFill className="me-2" />
                        Collaborated with the team to improve frontend
                        functionality and website performance.
                      </p>
                      <p>
                        <GoDotFill className="me-2" />
                        Built responsive UI components using HTML5, CSS3,
                        JavaScript, React.js and Bootstrap 5 and applied design
                        optimizations for a smoother user experience.
                      </p>
                    </div>

                    {/* BACKEND DEVELOPER INTERN */}
                    <div className="experience-heading d-flex justify-content-between mt-4 align-items-center">
                      <div className="expeerience-content">
                        <h5>Backend Developer Intern (Industrial Training)</h5>
                        <p>
                          Xportsoft Technologies Pvt Ltd, Ambala Cantonment,
                          Haryana
                        </p>
                      </div>
                      <div className="experience-date">
                        <p>07/2025 to 09/2025</p>
                      </div>
                    </div>
                    <div className="experience-para-left mt-3">
                      <p>
                        <GoDotFill className="me-2" />
                        Developed REST APIs using Node.js and Express.js to
                        improve data handling and backend performance.
                      </p>
                      <p>
                        <GoDotFill className="me-2" />
                        Implemented features that enhanced overall user
                        experience and platform reliability.
                      </p>
                    </div>

                    {/* MERN STACK DEVELOPER */}
                    <div className="experience-heading d-flex justify-content-between mt-4 align-items-center">
                      <div className="expeerience-content">
                        <h5>MERN Stack Developer</h5>
                        <p>
                          Eracom Technologies Private Limited, Zirakpur, India
                        </p>
                      </div>
                      <div className="experience-date">
                        <p>05/2026 to Present</p>
                      </div>
                    </div>
                    <div className="experience-para-left mt-3">
                      <p>
                        <GoDotFill className="me-2" />
                        Developed full-stack web applications using React.js,
                        Node.js, Express.js, and MongoDB.
                      </p>
                      <p>
                        <GoDotFill className="me-2" />
                        Built REST APIs and integrated frontend components with
                        backend services.
                      </p>
                    </div>

                    {/* SEO JOB */}
                    <div className="experience-heading d-flex justify-content-between mt-4 align-items-center">
                      <div className="expeerience-content">
                        <h5>Search Engine Optimization [OFF PAGE]</h5>
                        <p>Vishyat Technologies Pvt Ltd, Zirakpur</p>
                      </div>
                      <div className="experience-date">
                        <p>10/2024 to 01/2025</p>
                      </div>
                    </div>
                    <div className="experience-para-left mt-3">
                      <p>
                        <GoDotFill className="me-2" />
                        Experienced SEO specialist with a focus on off-page
                        optimization.
                      </p>
                      <p>
                        <GoDotFill className="me-2" />
                        Skilled in link building, content, promotion, influencer
                        outreach and improving rankings.
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="col-12 col-md-4 col-lg-4">
                  <div className="resume-content-right">
                    <div className="ms-3">
                      <div className="service-line d-flex gap-2">
                        <div className="title-line"></div>
                        <h2 className="fs-3 fw-bold">Skills</h2>
                      </div>
                      <div className="resume-right-content">
                        <h5 className="my-3 fw-bold fs-5 text-white">
                          Technical Skills
                        </h5>
                        <p>
                          <GoDotFill className="me-2" />
                          Node.js
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          Express.js
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          REST APIs
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          JWT
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          React.js
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          MongoDB
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          Mongoose
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          Git
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          Postman
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          HTML5
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          CSS3
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          JavaScript
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          Bootstrap 5
                        </p>
                      </div>
                      {/* PROFESSIONAL SKILLS */}
                      <div className="resume-right-content">
                        <h5 className="my-3 fw-bold fs-5 text-white">
                          Professional Skills
                        </h5>
                        <p>
                          <GoDotFill className="me-2" />
                          Effective communication
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          Team Player
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          Strong problem solver
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          Good time management
                        </p>
                      </div>
                      {/* EDUCATION */}
                      <div className="education-content-right mt-4">
                        <div className="service-line d-flex gap-2">
                          <div className="title-line"></div>
                          <h2 className="fs-3 fw-bold">Education</h2>
                        </div>
                        <div className="education-content-info mt-2">
                          <h5 className="mb-2">
                            <MdCastForEducation className="me-2" />
                            Bachelor of Science in Information Technology
                          </h5>
                          <p>2026</p>
                        </div>
                        <div className="education-content-info mt-2">
                          <h5 className="">
                            <MdCastForEducation className="me-2" />
                            Nepal Polytechnic Institute, Nepal — Diploma In
                            Computer Engineering
                          </h5>
                          <p>03/2022</p>
                        </div>
                      </div>
                      {/* LANGUAGES */}
                      <div className="laungage-content-right mt-4">
                        <div className="service-line d-flex gap-2">
                          <div className="title-line"></div>
                          <h2 className="fs-3 fw-bold">Language</h2>
                        </div>
                        <div className="education-content-info mt-2">
                          <p>
                            <GoDotFill className="me-2" />
                            Nepali(Native)
                          </p>
                          <p>
                            <GoDotFill className="me-2" />
                            English(Professional)
                          </p>
                          <p>
                            <GoDotFill className="me-2" />
                            Hindi
                          </p>
                        </div>
                      </div>
                      {/* INTERST AND HOBBIES */}
                      <div className="laungage-content-right mt-4">
                        <div className="service-line d-flex gap-2">
                          <div className="title-line"></div>
                          <h2 className="fs-3 fw-bold">Interests & Hobbies</h2>
                        </div>
                        <div className="education-content-info mt-2">
                          <p>
                            <GoDotFill className="me-2" />
                            Coding
                          </p>
                          <p>
                            <GoDotFill className="me-2" />
                            Pubg lover
                          </p>
                          <p>
                            <GoDotFill className="me-2" />
                            Watching Series
                          </p>
                          <p>
                            <GoDotFill className="me-2" />
                            Travelling
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="resume-line" />
            {/* RESUME SOCIAL MEDIA */}
            <div className="resume-media">
              <div className="row justify-content-between align-items-center g-5 mt-4 row-main">
                <div className="col-12 col-md-3 col-lg-3">
                  <div className="resume-main d-flex align-items-center gap-2">
                    <a
                      href="https://www.facebook.com/dhirendrabam001/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebook />
                    </a>
                    <span className="me-3">facebook.com/dhirendrabam001</span>
                  </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                  <div className="resume-main d-flex align-items-center gap-2">
                    <a
                      href="https://www.instagram.com/ig_dhirendra01/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    <span className="me-3">instagram.com/ig_dhirendra01</span>
                  </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                  <div className="resume-main d-flex align-items-center gap-2">
                    <a
                      href="https://www.linkedin.com/in/dhirendrabam001/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                    <span className="me-3">linkedin.com/dhirendrabam001</span>
                  </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                  <div className="resume-main d-flex align-items-center gap-2">
                    <a
                      href="https://github.com/dhirendrabam001/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                    <span className="me-3">github.com/dhirendrabam001</span>
                  </div>
                </div>
              </div>
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

export default ResumePage;
