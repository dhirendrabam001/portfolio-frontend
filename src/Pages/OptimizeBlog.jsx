import AnimationPath from "../Animated/AnimationPath";
import Footer from "../Components/Footer";

const OptimizeBlog = () => {
  return (
    <>
      <div className="blog-pages">
        <section className="blog-main-content">
          <div className="mb-2">
            <AnimationPath direction="left" delay={0.1}>
              <h2 className="fs-1 fw-bold">
                Optimize Your Website for Better Performance
              </h2>
            </AnimationPath>
          </div>
          <div className="blogpage-span d-flex gap-2 my-3">
            <span>
              Published <span className="bold">3</span> days ago
            </span>
            <span>
              <span className="bold">6</span> min read
            </span>
            <span>
              <span className="bold">9</span> min read
            </span>
          </div>
          <AnimationPath direction="left" delay={0.2}>
            <div className="blogpage-img">
              <img src="/blog9.webp" alt="blog9" />
            </div>

            {/* Content */}
            <div className="blogpage-paragraph">
              <p className="my-4">
                Optimizing your website for better performance is essential for
                delivering a fast, smooth, and user-friendly experience.
                Techniques such as minimizing file sizes, optimizing images,
                reducing unnecessary scripts, and using efficient code can
                significantly improve loading speed and responsiveness. A
                well-optimized website not only enhances user satisfaction but
                also boosts search engine rankings and overall accessibility.
              </p>
              <div className="blogpage-heading">
                <h2 className="fw-bold">Code Block Example</h2>
                <p>
                  Code optimization plays a key role in improving website
                  performance by ensuring that resources load efficiently and
                  execute smoothly. For example, using lazy loading for images,
                  deferring JavaScript files, and writing clean, minimal CSS can
                  significantly reduce page load time. Simple code-level
                  improvements, such as removing unused functions, optimizing
                  DOM interactions, and leveraging modern browser features, help
                  create faster and more responsive websites.
                </p>
              </div>
            </div>
          </AnimationPath>
          <AnimationPath direction="bottom" delay={0.25}>
            <div className="blogpage-img">
              <img src="/blog7.webp" alt="blog9" />
            </div>
            <div className="blogpage-paragraph my-3">
              <h2 className="fw-bold">Typography</h2>
              <p>
                Typography optimization plays an important role in improving
                website performance and user experience. Using system fonts or
                well-optimized web fonts reduces load time and ensures faster
                text rendering across devices. Limiting the number of font
                families and font weights helps minimize HTTP requests and
                improves overall performance.
              </p>
              <h2 className="fw-bold">Quote Example:</h2>
              <p>
                Website performance is not only measured by how fast a page
                loads, but by how smoothly users can interact with it. A
                well-optimized website respects the user’s time, works
                efficiently across all devices, and delivers content without
                friction.
              </p>
              <h4 className="fw-bold">Conclusion</h4>
              <p>
                Optimizing your website for better performance is a continuous
                process that goes beyond speed alone. From writing efficient
                code and improving typography to delivering meaningful content
                and thoughtful design, every optimization choice contributes to
                a smoother user experience. A well-optimized website not only
                performs faster but also feels more reliable, accessible, and
                professional.
              </p>
            </div>
          </AnimationPath>
        </section>
        <div className="footer-infos">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default OptimizeBlog;
