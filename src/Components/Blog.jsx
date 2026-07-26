import AnimationPath from "../Animated/AnimationPath";
import { FaArrowRightLong } from "react-icons/fa6";
import { BlogData } from "../Data/Data";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <section className="blog-main">
      <div className="row align-items-center justify-content-center g-5">
        <div className="col-12 col-md-8 col-lg-8">
          <AnimationPath direction="left" delay={0.1}>
            <div className="service-line d-flex gap-2">
              <div className="title-line"></div>
              <h2 className="fs-1 fw-bold">Latest Blog Posts</h2>
            </div>
          </AnimationPath>

          <div className="mb-2 title-bar">
            <AnimationPath direction="bottom" delay={0.25}>
              <p>
                Explore my recent blog posts on coding, projects, and lessons
                learned along my development journey.
              </p>
            </AnimationPath>
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-4 text-end">
          <div className="btn-service">
            <AnimationPath direction="left" delay={0.25}>
              <Link to="/blog">
                <button>
                  <FaArrowRightLong className="me-2" />
                  See All Articles
                </button>
              </Link>
            </AnimationPath>
          </div>
        </div>
      </div>

      {/* CARD SECTION */}
      <div className="blog-info">
        <div className="row align-items-center g-5 g-md-3">
          {BlogData.map((item, index) => {
            return (
              <div className="col-12 col-md-4 col-lg-4" key={index}>
                <AnimationPath direction="left" delay={0.5}>
                  <div className="blog-content">
                    <div className="blog-img">
                      <img
                        src={item.img}
                        className={`${item.imgClass}`}
                        alt="blog1"
                      />

                      <div className="read-more-overlay">
                        <Link to={item.link}>
                          <h5 className="fw-bold">Read More</h5>
                        </Link>
                      </div>
                    </div>

                    <div className="blog-footer d-flex gap-3 py-3">
                      <span>{item.date}</span>
                      <span className="fw-bold blog-left">{item.break}</span>
                      <span>{item.paragraph}</span>
                    </div>

                    <div className="blog-heading">
                      <Link to={item.link}>
                        <h5 className="fw-bold">{item.title}</h5>
                      </Link>
                    </div>
                  </div>
                </AnimationPath>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
