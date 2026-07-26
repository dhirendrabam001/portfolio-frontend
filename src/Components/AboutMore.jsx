import AnimationPath from "../Animated/AnimationPath";

const AboutMore = () => {
  return (
    <div className="about-more">
      <div className="row g-5 align-items-center">
        <div className="col-12 col-md-5 col-lg-5 col-xxl-4 order-2 order-md-1">
          <AnimationPath direction="left">
            <div className="img-cons">
              <img src="/mainimg.webp" className="img-fluid" alt="hero" />
            </div>
          </AnimationPath>
        </div>
        <div className="col-12 col-md-7 col-lg-7 col-xxl-8 order-1 order-md-2">
          <AnimationPath direction="bottom" delay={0.1}>
            <div className="about-left">
              <span>Let Me Introduce Myself!</span>
              <h2 className="fw-bold fs-1">
                About <span className="me">Me</span>
              </h2>
              <h5 className="fw-bold fs-4">
                A story of <span className="me">hardwork</span> and
                preseverance.
              </h5>
              <p>
                I started my journey with limited resources, a slow laptop, and
                big dreams. Coding late nights after classes, fixing bugs I
                didn’t understand, and learning through trial and error I never
                gave up. Every challenge became a lesson, every failure a step
                forward. From those humble beginnings in Nepal to building
                real-world projects in Chandigarh, my growth as a frontend
                developer is powered by passion, persistence, and the belief
                that hard work always pays off.
              </p>
            </div>
          </AnimationPath>
          <div className="more-details">
            <AnimationPath direction="bottom" delay={0.25}>
              <ul className="nav mb-4 project-tabs">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    data-bs-toggle="pill"
                    data-bs-target="#skills"
                    type="button"
                  >
                    Skills
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#experience"
                    type="button"
                  >
                    Experience
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#education"
                    type="button"
                  >
                    Education
                  </button>
                </li>
              </ul>
            </AnimationPath>

            {/* Tab Content */}
            <div className="tab-content">
              {/* SKILLS */}
              <div className="tab-pane fade show active" id="skills">
                <AnimationPath direction="bottom" delay={0.1}>
                  <div className="Skills">
                    <h4>Core Development Skills</h4>
                    <p>
                      Node.js, Express.js, MongoDB, Mongoose, REST APIs, JWT
                    </p>
                    <h4>Frontend & UI</h4>
                    <p>React.js, HTML5, CSS3, JavaScript, Bootstrap 5</p>
                    <h4>Tools & Collaboration</h4>
                    <p>Git, GitHub, Postman, VS Code, MongoDB Atlas</p>
                  </div>
                </AnimationPath>
              </div>

              {/* EXPERIENCE */}
              <div className="tab-pane fade" id="experience">
                <AnimationPath direction="bottom" delay={0.1}>
                  <div className="Experience">
                    <h4>May 2026 - Present</h4>
                    <p>
                      MERN Stack Developer, Eracom Technologies Pvt Ltd,
                      Zirakpur. Built full-stack applications, integrated
                      frontend UI with backend services, and delivered reliable
                      REST APIs.
                    </p>
                    <h4>July 2025 - September 2025</h4>
                    <p>
                      Backend Developer Intern, Xportsoft Technologies Pvt Ltd,
                      Ambala Cantonment. Developed Node.js/Express APIs,
                      improved data handling, and optimized backend performance.
                    </p>
                    <h4>Jan 2025 - March 2025</h4>
                    <p>
                      Frontend Developer Intern, Amaze Technosoft Pvt Ltd,
                      Zirakpur. Built responsive React UI components and
                      improved website performance and usability.
                    </p>
                    <h4>Oct 2024 - Jan 2025</h4>
                    <p>
                      SEO Specialist (Off-Page), Vishyat Technologies Pvt Ltd,
                      Zirakpur. Executed backlinking and off-page strategies to
                      improve search visibility.
                    </p>
                  </div>
                </AnimationPath>
              </div>

              {/* EDUCATION */}
              <div className="tab-pane fade" id="education">
                <AnimationPath direction="bottom" delay={0.1}>
                  <div className="Education">
                    <h4>2026</h4>
                    <p>
                      Bachelor of Science in Information Technology, From India.
                    </p>
                    <h4>March 2022</h4>
                    <p>
                      Diploma in Computer Engineering
                    </p>
                    <h4>Member</h4>
                    <p>Nepal Polytechnic Institute College</p>
                  </div>
                </AnimationPath>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMore;
