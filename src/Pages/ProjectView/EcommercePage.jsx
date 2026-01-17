import HireButton from "../../Components/Sidebar/HireBotton";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import AnimationPath from "../../Animated/AnimationPath";

const EcommercePage = () => {
  return (
    <>
      <section className="dashboardpage-main">
        <AnimationPath direction="left" delay={0.2}>
          <div className="mb-2 text-center">
            <h2 className="fw-bold fs-1">
              Case Study: E-commerce Product Detail Page
            </h2>
            <p>
              This project is a modern e-commerce product detail page designed
              to showcase products clearly and drive user purchases. The layout
              focuses on high-quality product images, detailed descriptions,
              pricing, availability, and customer reviews to build trust and
              improve decision-making.
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
                    <h4>Sudeep Bam</h4>
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
                        href="https://ecommerce-info.netlify.app/"
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
                      src="/project7.webp"
                      className="img-fluid"
                      alt="project7"
                    />
                  </div>
                  <div className="dashboard-para">
                    <p>
                      The interface emphasizes clear product imagery, detailed
                      descriptions, pricing, and customer feedback to support
                      confident purchasing decisions. Built with responsive
                      design principles, the page ensures a consistent and
                      smooth shopping experience across all devices while
                      maintaining a clean and modern look suitable for scalable
                      e-commerce platforms.
                    </p>
                  </div>
                  <div className="project-req">
                    <h2 className="fw-bold">Project Requirements</h2>

                    <p>
                      <GoDotFill /> Clean and modern e-commerce UI design
                    </p>
                    <p>
                      <GoDotFill /> High-quality product image gallery with
                      previews
                    </p>
                    <p>
                      <GoDotFill /> Clear product title, price, and availability
                      display
                    </p>
                    <p>
                      <GoDotFill /> Responsive layout for all screen sizes
                    </p>
                  </div>
                  <div className="Project-overview">
                    <h2 className="fw-bold">Project Overview</h2>
                    <p>
                      This project is a modern e-commerce product detail page
                      designed to provide users with a smooth and engaging
                      shopping experience. The page focuses on showcasing
                      products with high-quality images, clear pricing,
                      availability status, and customer reviews to support
                      informed purchasing decisions. Emphasis was placed on
                      clean UI design, intuitive navigation, and responsiveness
                      to ensure usability across all devices.
                    </p>
                  </div>
                  <div className="project-challenge">
                    <h2 className="fw-bold">The Challenges</h2>
                    <p>
                      One of the main challenges was designing a product page
                      that presents detailed information without overwhelming
                      the user. Balancing visual appeal with functionality
                      required careful layout planning. Ensuring smooth image
                      interaction and responsiveness across devices was another
                      challenge. Additionally, maintaining consistency while
                      integrating key e-commerce elements such as reviews,
                      pricing, and stock information was essential for usability
                      and trust.
                    </p>
                  </div>
                  <div className="project-solution">
                    <h2 className="fw-bold">The Approach & Solution</h2>
                    <p>
                      A user-centric approach was followed to prioritize clarity
                      and ease of use. The layout was structured to highlight
                      product images first, followed by essential details such
                      as price, reviews, and availability. Responsive design
                      techniques ensured seamless performance on mobile and
                      desktop devices. Clean typography, spacing, and intuitive
                      controls were used to guide users naturally through the
                      purchasing process. The final result is a polished and
                      scalable e-commerce product page that enhances engagement
                      and supports conversion.
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

export default EcommercePage;
