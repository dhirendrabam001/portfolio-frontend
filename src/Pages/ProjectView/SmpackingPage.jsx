import HireButton from "../../Components/Sidebar/HireBotton";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import AnimationPath from "../../Animated/AnimationPath";

const SmpackingPage = () => {
  return (
    <>
      <section className="dashboardpage-main">
        <AnimationPath direction="left" delay={0.2}>
          <div className="mb-2 text-center">
            <h2 className="fw-bold fs-1">Case Study: SM Packing Website</h2>
            <p>
              The SM Packing Website is a business website developed to showcase
              packing and packaging services online.
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
                    <h4>Html5 Css3 JavaScript Bootstrap & Wordpress</h4>
                  </div>
                  <div className="dashboard-client">
                    <h5>Website:</h5>
                    <h4>
                      <a
                        href="https://hivends.org/dhirendra-test-folder/"
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
                      src="/sm-packing.webp"
                      className="img-fluid"
                      alt="project1"
                    />
                  </div>
                  <div className="dashboard-para">
                    <p>
                      The SM Packing Website is a modern and responsive business
                      website developed to showcase packing and packaging
                      services online. The project was designed to provide a
                      clean and user-friendly interface where customers can
                      easily explore different packing solutions, learn about
                      the company’s services, and contact the business for
                      inquiries.
                    </p>
                  </div>
                  <div className="project-req">
                    <h2 className="fw-bold">Project Requirements</h2>

                    <p>
                      <GoDotFill /> Develop a responsive business website for a
                      packing service company.
                    </p>
                    <p>
                      <GoDotFill /> Create a clean and modern user interface for
                      better user experience.
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
                      The SM Packing Website is a modern and responsive business
                      website developed to promote packing and packaging
                      services online. The main objective of this project was to
                      create a professional digital platform where customers can
                      easily explore the company’s services, understand
                      packaging solutions, and contact the business for
                      inquiries. The website focuses on providing a simple
                      navigation structure, clean design, and an engaging user
                      experience to help visitors quickly access important
                      information.
                    </p>
                  </div>
                  <div className="project-challenge">
                    <h2 className="fw-bold">The Challenges</h2>
                    <p>
                      During the development of the SM Packing Website, the main
                      challenges included creating a fully responsive layout for
                      different devices, maintaining a clean and professional
                      user interface, and ensuring the website worked smoothly
                      across various browsers. Another challenge was optimizing
                      images for fast loading while maintaining quality and
                      integrating the frontend design with WordPress for easy
                      content management. Overcoming these challenges helped
                      improve the website’s performance, usability, and overall
                      user experience.
                    </p>
                  </div>
                  <div className="project-solution">
                    <h2 className="fw-bold">The Approach & Solution</h2>
                    <p>
                      To address the project challenges, a structured
                      development approach was followed. The website layout was
                      built using HTML and styled with CSS, while Bootstrap 5
                      was used to create a fully responsive design that adapts
                      to different screen sizes. JavaScript was implemented to
                      add interactive features and improve user experience.
                      Images were optimized to maintain good quality while
                      ensuring fast loading performance. Finally, the website
                      was integrated with WordPress, allowing easy content
                      management so the business owner can update services,
                      images, and other information efficiently. This approach
                      helped deliver a clean, responsive, and user-friendly
                      business website. 🚀
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

export default SmpackingPage;
