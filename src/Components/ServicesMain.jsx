import { FaArrowRightLong } from "react-icons/fa6";
import AnimationPath from "../Animated/AnimationPath";
import { Link } from "react-router-dom";

const ServicesMain = () => {
  return (
    <section className="service-main py-3">
      <div className="row align-items-center justify-content-center g-5">
        <div className="col-12 col-md-8 col-lg-8">
          <AnimationPath direction="left" delay={0.1}>
            <div className="service-line d-flex gap-2">
              <div className="title-line"></div>
              <h2 className="fs-1 fw-bold">What I Do</h2>
            </div>
          </AnimationPath>

          <div className="mb-2 title-bar">
            <AnimationPath direction="bottom" delay={0.25}>
              <p>
                I build fast, secure, and scalable backend systems for modern
                web applications. From clean APIs to optimized databases and
                robust authentication, I focus on reliability and performance.
                My goal is to deliver backend solutions that scale smoothly and,
                <span>support real-world growth.</span>
              </p>
            </AnimationPath>
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-4 text-end">
          <div className="btn-service">
            <AnimationPath direction="left" delay={0.25}>
              <Link to="/services">
                <button>
                  <FaArrowRightLong className="me-2" />
                  Services Details
                </button>
              </Link>
            </AnimationPath>
          </div>
        </div>
      </div>

      {/* CARD SECTION */}
      <div className="service-card">
        <div className="row g-4">
          <div className="col-12 col-md-4 col-lg-3">
            <AnimationPath direction="left" delay={0.2}>
              <div className="content-main">
                <div className="content-img py-3">
                  <img src="/node.webp" alt="node" />
                </div>
                <div className="content-info">
                  <h5>Nodejs</h5>
                  <p>
                    I develop efficient Node.js backends designed for real-world
                    scale. Clean APIs, secure authentication, and optimized
                    databases are my priorities.
                  </p>
                </div>
              </div>
            </AnimationPath>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <AnimationPath direction="left" delay={0.2}>
              <div className="content-main second-card">
                <div className="content-img py-3">
                  <img src="/react.webp" className="img-rec" alt="node" />
                </div>
                <div className="content-info">
                  <h5>Reactjs</h5>
                  <p>
                    I create dynamic and responsive web interfaces using
                    React.js. From reusable components to optimized state
                    management, I focus on clean code.
                  </p>
                </div>
              </div>
            </AnimationPath>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <AnimationPath direction="left" delay={0.2}>
              <div className="content-main">
                <div className="content-img py-3">
                  <img
                    src="/mongo.svg"
                    width={"60px"}
                    className="bg-white"
                    alt="node"
                  />
                </div>
                <div className="content-info">
                  <h5>MongoDB</h5>
                  <p>
                    I design and manage scalable MongoDB databases for modern
                    applications. Optimized schemas, fast queries, and secure
                    data handling.
                  </p>
                </div>
              </div>
            </AnimationPath>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <AnimationPath direction="left" delay={0.2}>
              <div className="content-main">
                <div className="content-img py-3">
                  <img src="/postman.svg" width={"20px"} alt="node" />
                </div>
                <div className="content-info">
                  <h5>Postman</h5>
                  <p>
                    I use Postman to test, validate, and debug REST APIs
                    efficiently. Ensuring reliable endpoints, correct responses,
                    and smooth integrations.
                  </p>
                </div>
              </div>
            </AnimationPath>
          </div>

          {/* card-2 */}
          <div className="col-12 col-md-4 col-lg-3">
            <AnimationPath direction="bottom" delay={0.2}>
              <div className="content-main">
                <div className="content-img py-3 d-flex gap-2">
                  <img src="/html.webp" width={"25px"} alt="node" />
                  <img src="/css.webp" width={"25px"} alt="" />
                </div>
                <div className="content-info">
                  <h5>HTML5 & CSS3</h5>
                  <p>
                    I build semantic HTML and modern CSS layouts for responsive
                    websites. From pixel-perfect designs to smooth animations, I
                    focus usability.
                  </p>
                </div>
              </div>
            </AnimationPath>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <AnimationPath direction="bottom" delay={0.2}>
              <div className="content-main">
                <div className="content-img py-3 d-flex gap-2">
                  <img src="/html.webp" width={"25px"} alt="node" />
                  <img src="/js.webp" width={"25px"} alt="" />
                </div>
                <div className="content-info">
                  <h5>JavaScript</h5>
                  <p>
                    I write clean and efficient JavaScript to add interactivity
                    and logic to web applications. Focused on performance,
                    usability, and maintainability.
                  </p>
                </div>
              </div>
            </AnimationPath>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <AnimationPath direction="bottom" delay={0.2}>
              <div className="content-main">
                <div className="content-img py-3 d-flex gap-2">
                  <img src="/html.webp" width={"25px"} alt="node" />
                  <img src="/bootstrap.webp" width={"25px"} alt="" />
                </div>
                <div className="content-info">
                  <h5>Bootstrap</h5>
                  <p>
                    I use Bootstrap to create clean, responsive, and consistent
                    UI layouts. Fast development with modern components and grid
                    systems.
                  </p>
                </div>
              </div>
            </AnimationPath>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <AnimationPath direction="bottom" delay={0.2}>
              <div className="content-main">
                <div className="content-img py-3 d-flex gap-3">
                  <img
                    src="/logo@2x.webp"
                    className="img-npm"
                    width={"20px"}
                    alt="node"
                  />
                  <img
                    src="/nodemon.webp"
                    className="img-npm"
                    width={"20px"}
                    alt=""
                  />
                  <img
                    src="/npm.webp"
                    className="img-npm"
                    width={"20px"}
                    alt=""
                  />
                </div>
                <div className="content-info">
                  <h5>Git, Nodemon & Npm</h5>
                  <p>
                    Efficient development workflow with Git for version control,
                    npm for package management, and Nodemon for automatic
                    Node.js server restarts.
                  </p>
                </div>
              </div>
            </AnimationPath>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesMain;
