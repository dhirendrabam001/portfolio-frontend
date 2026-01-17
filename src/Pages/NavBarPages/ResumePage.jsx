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
                  <h5>Backend Developer</h5>
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
                      Junior Backend Developer with hands-on experience in
                      building and maintaining web applications using Node.js,
                      Express.js, MongoDB, and Mongoose, along with working
                      knowledge of React.js for frontend integration.
                      Experienced in designing and consuming RESTful APIs,
                      managing databases, and using tools such as Git and
                      Postman for version control and API testing. Completed
                      3-month backend and frontend development internships,
                      where I contributed to real-world projects, implemented
                      features, fixed bugs, and supported performance
                      improvements.Strongly focused on backend architecture,
                      clean and maintainable code practices, and continuous
                      learning to grow as a reliable and scalable backend
                      developer.
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
                    <div className="experience-heading d-flex justify-content-between mt-4 align-items-center">
                      <div className="expeerience-content">
                        <h5>Frontend Developer Training</h5>
                        <p>Amaze Technosoft Pvt Ltd, Zirakpur, India</p>
                      </div>
                      <div className="experience-date">
                        <p>1/2025 to 05/2025</p>
                      </div>
                    </div>
                    <div className="mb-2 mt-4 experience-para">
                      <p>
                        Completed a 3-month Frontend Developer training program
                        focused on building modern, responsive, and
                        user-friendly web interfaces. Gained strong hands-on
                        experience with HTML, CSS, JavaScript, Bootstrap, and
                        React to create dynamic layouts, reusable components,
                        and interactive user experiences. Throughout the
                        training, worked on real-world projects and UI
                        implementations, improving skills in responsive design,
                        component-based development, and clean coding practices
                        while following modern frontend development standards.
                      </p>
                    </div>
                    <div className="experience-para-left">
                      <p>
                        <GoDotFill className="me-2" />
                        Collaborated with the team to improve frontend
                        functionality and website performance.
                      </p>
                      <p>
                        <GoDotFill className="me-2" />
                        Built responsive UI components using HTML5, CSS3,
                        JavaScript, and Bootstrap 5 and optimizations.
                      </p>
                    </div>

                    {/* BACKEND DEVELOPER TRAINING */}
                    <div className="experience-heading d-flex justify-content-between mt-4 align-items-center">
                      <div className="expeerience-content">
                        <h5>Backend Developer Training</h5>
                        <p>
                          Xportsoft Technologies Pvt Ltd, Ambala Cantonment,
                          Haryana
                        </p>
                      </div>
                      <div className="experience-date">
                        <p>07/2025 to 09/2025</p>
                      </div>
                    </div>
                    <div className="mb-2 mt-4 experience-para">
                      <p>
                        Completed a 3-month Backend Developer training program
                        focused on building secure, scalable, and efficient
                        server-side applications. Gained hands-on experience
                        with Node.js, Express.js, MongoDB, and Postman while
                        designing and testing RESTful APIs. Worked extensively
                        on database operations, authentication flows, and API
                        integration, strengthening skills in backend
                        architecture, clean code practices, and performance
                        optimization for real-world web applications.
                      </p>
                    </div>
                    <div className="experience-para-left">
                      <p>
                        <GoDotFill className="me-2" />
                        Developed REST APIs using Node.js and Express.js to
                        improve data handling and backend.
                      </p>
                      <p>
                        <GoDotFill className="me-2" />
                        Designed scalable database models with MongoDB and
                        Mongoose, and frontend-backend integration.
                      </p>
                      <p>
                        <GoDotFill className="me-2" />
                        Implemented features that enhanced overall user
                        experience and platform reliability.
                      </p>
                    </div>
                    {/* PORTFOLIO DESIGN  */}
                    <div className="experience-heading d-flex justify-content-between mt-4 align-items-center">
                      <div className="expeerience-content">
                        <h5>Personal Portfolio Website</h5>
                      </div>
                      <div className="experience-date">
                        <p>12/2025 to 01/2026</p>
                      </div>
                    </div>
                    <div className="mb-2 mt-4 experience-para">
                      <p>
                        This project is a personal portfolio website designed to
                        showcase my skills, projects, and professional journey
                        in a clean and modern way. The design focuses on
                        clarity, responsiveness, and user experience, allowing
                        visitors to easily explore my work, services, and
                        background. Built with a performance-focused and
                        scalable layout, the portfolio reflects my attention to
                        detail, clean design principles, and commitment to
                        presenting my work professionally.
                      </p>
                    </div>
                    <div className="experience-para-left">
                      <p>
                        <GoDotFill className="me-2" />
                        Built a modern and responsive personal portfolio using
                        HTML, CSS, JavaScript, and React.js.
                      </p>
                      <p>
                        <GoDotFill className="me-2" />
                        Implemented reusable React components for sections like
                        About, Projects, Services, and Contact.
                      </p>
                      <p>
                        <GoDotFill className="me-2" />
                        Used Bootstrap / custom CSS for responsive layouts and
                        clean UI design.
                      </p>
                      <p>
                        <GoDotFill className="me-2" />
                        Integrated backend features using Node.js and
                        Express.js.
                      </p>
                      <p>
                        <GoDotFill className="me-2" />
                        Managed data and content using MongoDB.
                      </p>
                    </div>
                    {/* SEO  Job */}
                    <div className="experience-heading d-flex justify-content-between mt-4 align-items-center">
                      <div className="expeerience-content">
                        <h5>Search Engine Optimization [OFF PAGE]</h5>
                        <p>Vishyat Technologies Pvt Ltd, Zirakpur</p>
                      </div>
                      <div className="experience-date">
                        <p>11/2024 to 03/2025</p>
                      </div>
                    </div>
                    <div className="mb-2 mt-4 experience-para">
                      <p>
                        Gained 4 months of hands-on experience in off-page SEO,
                        focusing on improving website authority, search
                        visibility, and organic traffic. Worked on link-building
                        strategies, business listings, social bookmarking, and
                        content promotion to enhance domain credibility.
                        Monitored backlink profiles and performance metrics
                        while following ethical SEO practices to support
                        long-term ranking growth.
                      </p>
                    </div>
                    <div className="experience-para-left">
                      <p>
                        <GoDotFill className="me-2" />
                        Experienced SEO specialist with a focus on off-page
                        optimization.
                      </p>
                      <p>
                        <GoDotFill className="me-2" />
                        Skilled in link building, content, promotion, influencer
                        and improving rankings.
                      </p>
                      <p>
                        <GoDotFill className="me-2" />
                        Performed link building, business listings, and social
                        bookmarking activities.
                      </p>
                      <p>
                        <GoDotFill className="me-2" />
                        Worked on content promotion and brand visibility across
                        multiple platforms.
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
                          HTML5 & CSS3
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          JavaScript
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          Bootstrap 5
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          React.js
                        </p>
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
                          MongoDB
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          Rest APIs
                        </p>
                        <p>
                          <GoDotFill className="me-2" />
                          JWT
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
                      </div>
                      {/* PROPESNOALSKILLS */}
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
                            Nepal Polytechnic Institute, Nepal Diploma In
                            Computer Engineering
                          </h5>
                          <p>03/2022</p>
                        </div>
                        <div className="education-content-info mt-2">
                          <h5 className="">
                            <MdCastForEducation className="me-2" />
                            Running Bachelor in Information Technology[B.Sc.IT]
                          </h5>
                          <p>04/2024</p>
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
