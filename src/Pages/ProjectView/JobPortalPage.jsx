import HireButton from "../../Components/Sidebar/HireBotton";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import AnimationPath from "../../Animated/AnimationPath";

const JobPortalPage = () => {
  return (
    <>
      <section className="dashboardpage-main">
        <AnimationPath direction="left" delay={0.2}>
          <div className="mb-2 text-center">
            <h2 className="fw-bold fs-1">Case Study: Job Portal Website</h2>
            <p>
              This project is a modern job portal website designed to connect
              job seekers with verified employers through a simple and
              user-friendly platform. The website focuses on clear job listings,
              advanced search options, and an engaging user interface to help
              users find relevant opportunities quickly.
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
                    <h4>Personal</h4>
                  </div>
                  <div className="dashboard-client mb-3">
                    <h5>Services:</h5>
                    <h4>Web Development</h4>
                  </div>
                  <div className="dashboard-client mb-3">
                    <h5>Technologies:</h5>
                    <h4>ReactJs, NodeJs, MongoDB & Bootstrap </h4>
                  </div>
                  <div className="dashboard-client">
                    <h5>Website:</h5>
                    <h4>
                      <a
                        href="https://job-portal-bi00.onrender.com/"
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
                      src="/portal.webp"
                      className="img-fluid"
                      alt="project7"
                    />
                  </div>
                  <div className="dashboard-para">
                    <p>
                      A modern job portal UI designed to connect job seekers and
                      employers through verified listings, smart search, and a
                      seamless user experience. Built with a responsive and
                      scalable design, the job portal delivers a smooth
                      experience across all devices while supporting user
                      authentication and role-based access.
                    </p>
                  </div>
                  <div className="project-req">
                    <h2 className="fw-bold">Project Requirements</h2>

                    <p>
                      <GoDotFill /> Clean and modern UI for job portal platform
                    </p>
                    <p>
                      <GoDotFill /> ob listing and job detail pages
                    </p>
                    <p>
                      <GoDotFill /> User authentication (Login & Sign Up)
                    </p>
                    <p>
                      <GoDotFill /> Responsive design for all devices
                    </p>
                  </div>
                  <div className="Project-overview">
                    <h2 className="fw-bold">Project Overview</h2>
                    <p>
                      This project is a modern job portal website designed to
                      help job seekers find relevant opportunities and enable
                      employers to connect with qualified candidates. The
                      platform focuses on verified job listings, intuitive
                      search and filtering options, and a clean user interface
                      to simplify the job-hunting process. Built with a
                      responsive and scalable design, the job portal delivers a
                      smooth experience across all devices while supporting user
                      authentication and role-based access.
                    </p>
                  </div>
                  <div className="project-challenge">
                    <h2 className="fw-bold">The Challenges</h2>
                    <p>
                      One of the main challenges was designing a layout that
                      displays multiple job listings without overwhelming users.
                      Ensuring smooth navigation between job search, listings,
                      and application pages required careful UI planning.
                      Another challenge was maintaining clarity between employer
                      and job seeker functionalities while keeping the interface
                      simple and intuitive. Responsiveness and performance
                      optimization were also key challenges to address.
                    </p>
                  </div>
                  <div className="project-solution">
                    <h2 className="fw-bold">The Approach & Solution</h2>
                    <p>
                      A user-centric approach was adopted by separating job
                      seeker and employer workflows clearly. The interface was
                      structured with focused sections for job search, listings,
                      and user actions. Responsive design principles ensured
                      consistency across devices, while clean typography and
                      spacing improved readability. By implementing intuitive
                      navigation and scalable components, the final solution
                      delivers a professional, efficient, and easy-to-use job
                      portal platform.
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

export default JobPortalPage;
