import HireButton from "../../Components/Sidebar/HireBotton";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import AnimationPath from "../../Animated/AnimationPath";

const ShopDetailsPage = () => {
  return (
    <>
      <section className="dashboardpage-main">
        <AnimationPath direction="left" delay={0.2}>
          <div className="mb-2 text-center">
            <h2 className="fw-bold fs-1">
              Case Study: Mobile & Electronics Shop Website
            </h2>
            <p>
              This project is a modern shop website designed for a mobile and
              electronics business, focusing on product showcasing, services,
              and customer engagement. The website highlights mobile sales,
              repairing services, and accessories with a clear layout, strong
              call-to-action buttons, and easy navigation.
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
                    <h4>Sher Chand</h4>
                  </div>
                  <div className="dashboard-client mb-3">
                    <h5>Services:</h5>
                    <h4>Web Development</h4>
                  </div>
                  <div className="dashboard-client mb-3">
                    <h5>Technologies:</h5>
                    <h4>Html5, Css3, JavaScript & Bootstrap </h4>
                  </div>
                  <div className="dashboard-client">
                    <h5>Website:</h5>
                    <h4>
                      <a
                        href="https://nabinmobilegallery.onrender.com/"
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
                      src="/project6.webp"
                      className="img-fluid"
                      alt="project6"
                    />
                  </div>
                  <div className="dashboard-para">
                    <p>
                      This project is a fully responsive shop website designed
                      for a mobile and electronics business to establish a
                      strong online presence. The website focuses on showcasing
                      mobile phones, electronic accessories, and repair services
                      in a clear and organized manner.
                    </p>
                  </div>
                  <div className="project-req">
                    <h2 className="fw-bold">Project Requirements</h2>

                    <p>
                      <GoDotFill /> Responsive and mobile-friendly website
                      design
                    </p>
                    <p>
                      <GoDotFill /> Clean and modern UI for products and
                      services
                    </p>
                    <p>
                      <GoDotFill /> Product listing sections for mobiles and
                      accessories
                    </p>
                    <p>
                      <GoDotFill /> Service pages for mobile repairing and
                      support
                    </p>
                  </div>
                  <div className="Project-overview">
                    <h2 className="fw-bold">Project Overview</h2>
                    <p>
                      This project is a modern and responsive shop website
                      developed for a mobile and electronics business to
                      showcase products and services effectively. The website
                      highlights mobile sales, accessories, and repair services
                      with a clean layout and easy navigation. It is designed to
                      provide customers with a smooth browsing experience, quick
                      access to contact information, and clear call-to-action
                      options. The overall goal of the project is to create a
                      professional digital presence that builds trust, improves
                      customer engagement, and supports business growth.
                    </p>
                  </div>
                  <div className="project-challenge">
                    <h2 className="fw-bold">The Challenges</h2>
                    <p>
                      One of the main challenges in this project was organizing
                      a wide range of products and services in a way that felt
                      simple and easy to navigate. Maintaining a clean and
                      professional design while displaying detailed information
                      required careful layout planning. Ensuring full
                      responsiveness across different devices and screen sizes
                      was also challenging, especially for product sections and
                      navigation menus.
                    </p>
                  </div>
                  <div className="project-solution">
                    <h2 className="fw-bold">The Approach & Solution</h2>
                    <p>
                      To overcome the challenges, a user-focused approach was
                      adopted with an emphasis on simplicity and clarity. The
                      website was structured with well-defined sections for
                      products, services, and contact information to improve
                      navigation. Responsive design techniques were applied to
                      ensure the site works smoothly on all devices. Clean UI
                      components, optimized images, and clear call-to-action
                      buttons were used to enhance usability, resulting in a
                      professional and engaging shop website that effectively
                      supports customer interaction and business needs.
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

export default ShopDetailsPage;
