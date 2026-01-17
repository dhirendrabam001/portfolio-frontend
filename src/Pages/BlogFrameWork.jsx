import AnimationPath from "../Animated/AnimationPath";
import Footer from "../Components/Footer";

const BlogFrameWork = () => {
  return (
    <>
      <div className="blog-pages">
        <section className="blog-main-content">
          <div className="mb-2">
            <AnimationPath direction="left" delay={0.1}>
              <h2 className="fs-2 fw-bold">
                5 Great Web Development Frameworks to Learn in 2025
              </h2>
            </AnimationPath>
          </div>
          <div className="blogpage-span d-flex gap-2 my-3">
            <span>
              Published <span className="bold">2</span> days ago
            </span>
            <span>
              <span className="bold">3</span> min read
            </span>
            <span>
              <span className="bold">6</span> min read
            </span>
          </div>
          <AnimationPath direction="left" delay={0.2}>
            <div className="blogpage-img">
              <img src="/blog4.webp" alt="blog4" />
            </div>

            {/* Content */}
            <div className="blogpage-paragraph">
              <p className="my-4">
                In 2025, web development continues to evolve rapidly, making it
                essential for developers to choose the right frameworks to stay
                relevant and productive. This blog explores five powerful and
                widely used web development frameworks that help build fast,
                scalable, and modern applications. Each framework is discussed
                with its key strengths, use cases, and why it remains valuable
                in today’s development landscape, helping developers make
                informed decisions for learning and career growth.
              </p>
              <div className="blogpage-heading">
                <h2 className="fw-bold">Code Block Example</h2>
                <p>
                  Code block examples provide practical insight into how modern
                  web development frameworks are used in real projects. By
                  showcasing simple and readable code snippets, this section
                  helps developers understand core concepts, syntax patterns,
                  and best practices across different frameworks. These examples
                  make it easier to compare approaches, learn faster, and apply
                  the frameworks effectively in real-world applications.
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
                Typography plays a vital role in how developers consume
                technical content. Clear font choices, proper spacing, and a
                strong visual hierarchy make it easier to read and understand
                discussions around modern web development frameworks.
                Well-designed typography ensures that explanations, comparisons,
                and code-related content remain accessible, engaging, and
                professional for readers in 2025.
              </p>
              <h2 className="fw-bold">Quote Example:</h2>
              <p>
                Learning the right web development frameworks in 2025 is about
                more than following popularity—it’s about understanding tools
                that help you build faster, scale efficiently, and adapt to
                future technologies. The best frameworks empower developers to
                write cleaner code, solve real-world problems, and create
                meaningful digital experiences that stand the test of time.
              </p>
              <h4 className="fw-bold">Conclusion</h4>
              <p>
                In conclusion, learning the right web development frameworks in
                2025 is essential for staying competitive and building modern,
                scalable applications. By understanding their strengths, use
                cases, and best practices, developers can choose tools that
                align with their goals and project needs. Continuous learning
                and hands-on practice with these frameworks will help developers
                grow confidently and adapt to the ever-evolving web development
                landscape.
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

export default BlogFrameWork;
