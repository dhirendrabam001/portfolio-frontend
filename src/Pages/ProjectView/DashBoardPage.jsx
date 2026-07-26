import HireButton from "../../Components/Sidebar/HireBotton";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import AnimationPath from "../../Animated/AnimationPath";

const DashBoardPage = () => {
  return (
    <>
      <section className="dashboardpage-main">
        <AnimationPath direction="left" delay={0.2}>
          <div className="mb-2 text-center">
            <h2 className="fw-bold fs-1">
              Case Study: Modern Dashboard UI Design
            </h2>
            <p>
              This project focuses on designing a modern, clean, and
              user-friendly dashboard interface
              <br /> that presents complex data in a simple and intuitive way.
            </p>
            <HireButton />
          </div>
        </AnimationPath>
        <div className="dashboard-content">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
              <AnimationPath direction="bottom" delay={0.2}>
                <div className="dashboard-info">
                  <div className="dashboard-client mb-3">
                    <h5>Client:</h5>
                    <h4>Axelit</h4>
                  </div>
                  <div className="dashboard-client mb-3">
                    <h5>Services:</h5>
                    <h4>Web Development</h4>
                  </div>
                  <div className="dashboard-client mb-3">
                    <h5>Technologies:</h5>
                    <h4>Html5 Css3 & Bootstrap</h4>
                  </div>
                  <div className="dashboard-client">
                    <h5>Website:</h5>
                    <h4>
                      <a
                        href="https://preview.themeforest.net/item/axelit-bootstrap-5-admin-dashboard-template/full_screen_preview/56996349"
                        className="text-decoration-none"
                      >
                        Live Preview <FaArrowRight />
                      </a>
                    </h4>
                  </div>
                </div>
              </AnimationPath>
            </div>

            {/* Right */}
            <div className="col-12 col-md-8 col-lg-8">
              <AnimationPath direction="left" delay={0.2}>
                <div className="dashboard-container">
                  <div className="dashboard-img">
                    <img
                      src="/project1.webp"
                      className="img-fluid"
                      alt="project1"
                    />
                  </div>
                  <div className="dashboard-para">
                    <p>
                      A modern and responsive dashboard UI designed for clarity
                      and ease of use. Focused on clean layouts, intuitive
                      navigation, and structured data presentation. Built to
                      deliver a smooth and professional user experience across
                      all devices.
                    </p>
                  </div>
                  <div className="project-req">
                    <h2 className="fw-bold">Project Requirements</h2>

                    <p>
                      <GoDotFill /> Clean, modern, and user-friendly dashboard
                      interface
                    </p>
                    <p>
                      <GoDotFill /> Fully responsive design for desktop, tablet,
                      and mobile devices
                    </p>
                    <p>
                      <GoDotFill /> Clear navigation and well-structured layout
                    </p>
                    <p>
                      <GoDotFill /> Reusable and scalable UI components
                    </p>
                  </div>
                  <div className="Project-overview">
                    <h2 className="fw-bold">Project Overview</h2>
                    <p>
                      This project is a modern Dashboard UI designed to present
                      complex information in a clear, organized, and visually
                      appealing manner. The primary objective was to create an
                      interface that enhances user experience through intuitive
                      navigation, clean layouts, and consistent design elements.
                      The dashboard focuses on usability and responsiveness,
                      ensuring smooth interaction across different screen sizes
                      and devices.
                    </p>
                  </div>
                  <div className="project-challenge">
                    <h2 className="fw-bold">The Challenges</h2>
                    <p>
                      One of the main challenges in this project was designing a
                      dashboard layout that could display large amounts of
                      information without overwhelming the user. Ensuring
                      consistency across different components while maintaining
                      a clean and modern design required careful planning.
                      Another challenge was achieving full responsiveness across
                      various screen sizes while preserving usability and visual
                      balance.
                    </p>
                  </div>
                  <div className="project-solution">
                    <h2 className="fw-bold">The Approach & Solution</h2>
                    <p>
                      To address the challenges, a user-centered design approach
                      was followed, focusing on clarity, simplicity, and
                      usability. The dashboard was structured using a modular
                      component-based layout to ensure consistency and
                      scalability. Responsive design principles were applied to
                      adapt the interface seamlessly across different screen
                      sizes.
                    </p>
                  </div>
                </div>
              </AnimationPath>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoardPage;
