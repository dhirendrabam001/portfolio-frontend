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
                    <h4>Backend Developer</h4>
                    <p>Node.js, Express.js, MongoDB, Mongoose, Rest APIs</p>
                    <h4>Frontend Developer</h4>
                    <p>HTML5, CSS3, JavaScript, Boostrap and React.js</p>
                    <h4>SEO Optimization</h4>
                    <p>Off Pages And Backlink</p>
                  </div>
                </AnimationPath>
              </div>

              {/* EXPERIENCE */}
              <div className="tab-pane fade" id="experience">
                <AnimationPath direction="bottom" delay={0.1}>
                  <div className="Experience">
                    <h4>Jan 2025 - April 2025</h4>
                    <p>
                      Frontend development Training 3 month at Amaze Technosoft
                      Pvt
                    </p>
                    <h4>July 2025 - September 2025</h4>
                    <p>
                      Backend development Training 3 month at Xportsoft
                      technologies Pvt
                    </p>
                    <h4>Nov 2024 - Jan 2025</h4>
                    <p>
                      SEO optimization at Vishyat Technologies off page and
                      backlinking
                    </p>
                  </div>
                </AnimationPath>
              </div>

              {/* EDUCATION */}
              <div className="tab-pane fade" id="education">
                <AnimationPath direction="bottom" delay={0.1}>
                  <div className="Education">
                    <h4>Aug 2024 - Current</h4>
                    <p>
                      Bachelor Information Technology From Vidya Jyoti
                      Eduversity
                    </p>
                    <h4>Feb 2018 - Aug 2022</h4>
                    <p>
                      Diploma in computer engineering from nepal polytechnic
                      institute
                    </p>
                    <h4>April 2015 - Completed</h4>
                    <p>SEE Completed From Joraghat Secondary School</p>
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
