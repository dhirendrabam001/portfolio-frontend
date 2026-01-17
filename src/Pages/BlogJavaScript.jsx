import AnimationPath from "../Animated/AnimationPath";
import Footer from "../Components/Footer";

const BlogJavaScript = () => {
  return (
    <>
      <div className="blog-pages">
        <section className="blog-main-content">
          <div className="mb-2">
            <AnimationPath direction="left" delay={0.1}>
              <h2 className="fs-2 fw-bold">Top 3 JavaScript Frameworks</h2>
            </AnimationPath>
          </div>
          <div className="blogpage-span d-flex gap-2 my-3">
            <span>
              Published <span className="bold">4</span> days ago
            </span>
            <span>
              <span className="bold">2</span> min read
            </span>
            <span>
              <span className="bold">7</span> min read
            </span>
          </div>
          <AnimationPath direction="left" delay={0.2}>
            <div className="blogpage-img">
              <img src="/blog5.webp" alt="blog5" />
            </div>

            {/* Content */}
            <div className="blogpage-paragraph">
              <p className="my-4">
                JavaScript frameworks play a crucial role in building fast,
                interactive, and scalable web applications. This section
                highlights the top three JavaScript frameworks that are widely
                used for modern development, focusing on their core features,
                flexibility, and real-world use cases. Understanding these
                frameworks helps developers choose the right tool for creating
                efficient and future-ready web solutions.
              </p>
              <div className="blogpage-heading">
                <h2 className="fw-bold">Code Block Example</h2>
                <p>
                  Code block examples demonstrate how popular JavaScript
                  frameworks are used in real-world applications through simple
                  and practical snippets. These examples help explain core
                  concepts such as component structure, state management, and
                  data rendering in an easy-to-understand way. By reviewing code
                  blocks, developers can quickly compare frameworks, grasp their
                  syntax, and apply best practices when building modern web
                  applications.
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
                Typography plays an important role in presenting technical
                content clearly and effectively. Proper font hierarchy, spacing,
                and readability help developers easily understand comparisons,
                explanations, and examples related to JavaScript frameworks.
                Well-structured typography enhances the learning experience and
                keeps complex information organized and visually accessible.
              </p>
              <h2 className="fw-bold">Quote Example:</h2>
              <p>
                Quote examples provide insight into expert opinions, best
                practices, and industry trends related to JavaScript frameworks.
                Including quotes from experienced developers or community
                leaders helps reinforce key points, offers credibility, and
                inspires learning. These quotes can guide developers in making
                informed decisions about which frameworks to adopt for their
                projects.
              </p>
              <h4 className="fw-bold">Conclusion</h4>
              <p>
                Understanding the top JavaScript frameworks empowers developers
                to build efficient, maintainable, and scalable web applications.
                By exploring their features, reviewing code examples, and
                following best practices, developers can choose the framework
                that best suits their project needs and stay ahead in modern web
                development.
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

export default BlogJavaScript;
