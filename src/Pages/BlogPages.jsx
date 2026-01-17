import AnimationPath from "../Animated/AnimationPath";
import Footer from "../Components/Footer";

const BlogPages = () => {
  return (
    <>
      <div className="blog-pages">
        <section className="blog-main-content">
          <div className="mb-2">
            <AnimationPath direction="left" delay={0.1}>
              <h2 className="fs-1 fw-bold">
                Why Every Developer Should Have A Blog
              </h2>
            </AnimationPath>
          </div>
          <div className="blogpage-span d-flex gap-2 my-3">
            <span>
              Published <span className="bold">1</span> days ago
            </span>
            <span>
              <span className="bold">5</span> min read
            </span>
            <span>
              <span className="bold">8</span> min read
            </span>
          </div>
          <AnimationPath direction="left" delay={0.2}>
            <div className="blogpage-img">
              <img src="/blog9.webp" alt="blog9" />
            </div>

            {/* Content */}
            <div className="blogpage-paragraph">
              <p className="my-4">
                Every developer should have a blog because it serves as a
                powerful platform to document learning, share knowledge, and
                build a strong personal brand in the tech industry. Writing
                about concepts you are learning whether it’s JavaScript, React,
                Node.js, or problem-solving technique helps reinforce
                understanding and improve long-term retention. A blog also
                allows developers to showcase their expertise beyond a resume or
                portfolio by demonstrating real-world thinking, communication
                skills, and continuous growth.
              </p>
              <div className="blogpage-heading">
                <h2 className="fw-bold">Code Block Example</h2>
                <p>
                  A code block example helps developers understand how a
                  specific piece of code works by presenting it in a clean,
                  readable format. It allows readers to focus on the logic,
                  structure, and best practices used in solving a problem or
                  implementing a feature. By breaking down real code snippets,
                  developers can quickly grasp concepts, debug efficiently, and
                  apply similar patterns in their own projects.
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
                Typography plays a crucial role in web design by improving
                readability, user experience, and visual hierarchy. The choice
                of fonts, spacing, line height, and text alignment helps guide
                users through content smoothly while maintaining a consistent
                and polished appearance.
              </p>
              <h2 className="fw-bold">Quote Example:</h2>
              <p>
                Quotes are a powerful way to highlight important ideas, inspire
                readers, and add emphasis to written content. A well-placed
                quote can capture attention, convey wisdom, or summarize a key
                message in a simple yet impactful way. In blogs and portfolios,
                quote examples help break up text, add personality, and create
                an emotional connection with readers while reinforcing the main
                theme of the content.
              </p>
              <h4 className="fw-bold">Conclusion</h4>
              <p>
                In conclusion, blogging and thoughtful content presentation play
                an important role in a developer’s growth and professional
                journey. From sharing code examples to applying effective
                typography and meaningful quotes, each element helps communicate
                ideas clearly and build credibility.
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

export default BlogPages;
