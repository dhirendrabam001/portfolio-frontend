import AnimationPath from "../Animated/AnimationPath";
import Footer from "../Components/Footer";

const BlogReact = () => {
  return (
    <>
      <div className="blog-pages">
        <section className="blog-main-content">
          <div className="mb-2">
            <AnimationPath direction="left" delay={0.1}>
              <h2 className="fs-2 fw-bold">Learn React in 24 Hours</h2>
            </AnimationPath>
          </div>
          <div className="blogpage-span d-flex gap-2 my-3">
            <span>
              Published <span className="bold">8</span> days ago
            </span>
            <span>
              <span className="bold">3</span> min read
            </span>
            <span>
              <span className="bold">2</span> min read
            </span>
          </div>
          <AnimationPath direction="left" delay={0.2}>
            <div className="blogpage-img">
              <img src="/blog8.webp" alt="blog8" />
            </div>

            {/* Content */}
            <div className="blogpage-paragraph">
              <p className="my-4">
                React is one of the most popular JavaScript libraries for
                building fast, dynamic, and component-based user interfaces.
                This section is designed to help beginners get started with
                React quickly, covering essential concepts such as components,
                props, state, hooks, and event handling. By following a
                structured 24-hour learning plan, developers can gain practical
                skills, understand React’s core principles, and start building
                real-world web applications in a short period of time.
              </p>
              <div className="blogpage-heading">
                <h2 className="fw-bold">Code Block Example</h2>
                <p>
                  Code block examples in this section demonstrate React’s syntax
                  and functionality through concise, hands-on snippets. These
                  examples help learners understand component creation, data
                  flow, state management, and event handling, making it easier
                  to grasp React fundamentals and implement them in projects.
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
                Clear typography ensures that React tutorials, explanations, and
                code examples are easy to read and follow. Proper font
                hierarchy, spacing, and formatting help learners quickly
                identify important concepts, understand examples, and stay
                focused during the 24-hour learning process.
              </p>
              <h2 className="fw-bold">Quote Example:</h2>
              <p>
                Incorporating quotes from experienced React developers
                highlights best practices, tips, and real-world insights. These
                quotes can inspire learners, reinforce key concepts, and provide
                guidance on building efficient and maintainable React
                applications.
              </p>
              <h4 className="fw-bold">Conclusion</h4>
              <p>
                Learning React in 24 hours equips developers with the
                foundational skills to create modern web applications. By
                combining theory, practical examples, and expert insights,
                learners can quickly build confidence, understand React’s core
                principles, and start developing interactive, scalable web
                solutions.
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

export default BlogReact;
