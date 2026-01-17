import AnimationPath from "../../Animated/AnimationPath";
import Blog from "../../Components/Blog";
import { BlogContentData } from "../../Data/Data";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <>
      <section className="dashboardpage-main">
        <AnimationPath direction="bottom" delay={0.2}>
          <div className="mb-4 text-center">
            <h2 className="fw-bold fs-1">
              A Blog About Web Development And Life
            </h2>
            <p>
              This blog is a space where I share insights from my journey in web
              development along with lessons learned from real-life experiences.
              <br />
              From coding tips and project breakdowns to reflections on
              learning, growth, and problem-solving.
              <br /> The content blends technical knowledge with personal
              perspective.
            </p>
          </div>
          <div className="blog-email">
            <div className="row justify-content-center g-5 g-md-2">
              <div className="col-12 col-md-69 col-lg-9">
                <div className="blog-email-left">
                  <div class="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Email Address..."
                    />
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="col-12 col-md-3 col-lg-3">
                <div className="blog-email-right">
                  <button type="submit">Subscriber</button>
                </div>
              </div>
            </div>
          </div>
        </AnimationPath>
        <hr className="service-hr mt-5" />
        <div className="blog-project-main">
          <Blog />
        </div>
        <div className="blog-content-more-card">
          <div className="row align-items-center justify-content-center g-3">
            {BlogContentData.map((item, index) => {
              return (
                <div className="col-12 col-md-4 col-lg-4" key={index}>
                  <AnimationPath direction="bottom" delay={0.5}>
                    <div className="blog-content">
                      <div className="blog-img">
                        <img
                          src={item.img}
                          className={`${item.imgClass || ""}`}
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
    </>
  );
};

export default BlogSection;
