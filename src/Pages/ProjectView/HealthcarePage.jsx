import HireButton from "../../Components/Sidebar/HireBotton";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import AnimationPath from "../../Animated/AnimationPath";

const HealthcarePages = () => {
  return (
    <>
      <section className="dashboardpage-main">
        <AnimationPath direction="left" delay={0.2}>
          <div className="mb-2 text-center">
            <h2 className="fw-bold fs-1">Case Study: Healthcare Website</h2>
            <p>
              The website was developed using HTML, CSS, JavaScript, and
              Bootstrap 5 to create a responsive design that works smoothly
              across mobile, tablet, and desktop devices.
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
                    <h4>Hivends Company Project</h4>
                  </div>
                  <div className="dashboard-client mb-3">
                    <h5>Services:</h5>
                    <h4>Web Development</h4>
                  </div>
                  <div className="dashboard-client mb-3">
                    <h5>Technologies:</h5>
                    <h4>Html5 Css3 Javascript Bootstrap & Wordpress</h4>
                  </div>
                  <div className="dashboard-client">
                    <h5>Website:</h5>
                    <h4>
                      <a
                        href="https://healthcare-live-project.netlify.app/"
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
                      src="/healthcare.webp"
                      className="img-fluid"
                      alt="project1"
                    />
                  </div>
                  <div className="dashboard-para">
                    <p>
                      The Healthcare Website is a modern and responsive platform
                      designed to provide medical information and healthcare
                      services online. The main purpose of this project was to
                      create an easy-to-use website where patients can explore
                      healthcare services, learn about doctors, and contact
                      medical providers for appointments or inquiries. The
                      website focuses on a clean layout, simple navigation, and
                      a user-friendly interface to ensure visitors can quickly
                      access important healthcare information.
                    </p>
                  </div>
                  <div className="project-req">
                    <h2 className="fw-bold">Project Requirements</h2>

                    <p>
                      <GoDotFill /> Develop a responsive healthcare website for
                      patients and visitors.
                    </p>
                    <p>
                      <GoDotFill /> Create a clean and user-friendly interface.
                    </p>
                    <p>
                      <GoDotFill /> Use Bootstrap 5 to make the website fully
                      responsive on mobile, tablet, and desktop devices.
                    </p>
                    <p>
                      <GoDotFill /> Integrate the website with WordPress for
                      easy content management.
                    </p>
                  </div>
                  <div className="Project-overview">
                    <h2 className="fw-bold">Project Overview</h2>
                    <p>
                      The Healthcare Website is a modern and responsive web
                      platform designed to provide healthcare information and
                      services online. The goal of this project was to create a
                      user-friendly website where patients can easily explore
                      medical services, learn about doctors, and contact
                      healthcare providers for appointments or inquiries. The
                      website focuses on a clean design, clear navigation, and
                      accessible information to improve the overall user
                      experience.
                    </p>
                  </div>
                  <div className="project-challenge">
                    <h2 className="fw-bold">The Challenges</h2>
                    <p>
                      During the development of the Healthcare Website, one of
                      the main challenges was creating a responsive layout that
                      works well on different devices. Designing a clean and
                      professional user interface suitable for healthcare
                      services was also important. Another challenge was
                      organizing healthcare information in a clear and
                      structured way so users could easily find services, doctor
                      details, and contact information.
                    </p>
                  </div>
                  <div className="project-solution">
                    <h2 className="fw-bold">The Approach & Solution</h2>
                    <p>
                      To overcome these challenges, a structured development
                      approach was followed. The website was built using HTML
                      for structure and CSS for styling, while Bootstrap 5 was
                      used to create a responsive layout. JavaScript was added
                      to improve user interaction and navigation. The design was
                      organized into clear sections so visitors could easily
                      explore healthcare services and find important
                      information. This approach helped deliver a clean,
                      responsive, and user-friendly healthcare website.
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

export default HealthcarePages;
