import HireButton from "../../Components/Sidebar/HireBotton";
import AnimationPath from "../../Animated/AnimationPath";
import Project from "../../Components/Project";

const PortfolioPage = () => {
  return (
    <>
      <section className="dashboardpage-main">
        <AnimationPath direction="bottom" delay={0.2}>
          <div className="mb-4 text-center">
            <h2 className="fw-bold fs-1">A collection of my best projects</h2>
            <p>
              A curated selection of my strongest projects showcasing real-world
              problem solving, clean architecture, and performance-focused
              development. <br />
              Each project reflects my attention to detail, scalability, and
              commitment to building reliable, user-centric web applications.
            </p>
            <HireButton />
          </div>
        </AnimationPath>
        <hr className="service-hr" />
        <div className="portfolio-project">
          <Project />
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
