import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimationPath from "../Animated/AnimationPath";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const WorkFlow = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // background drifts slower than the page for depth
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="work-main py-3 dashboard-wrok">
      <motion.div className="work-parallax" style={{ y: bgY }} aria-hidden="true" />
      <div className="work-section">
        <div className="row g-5 g-sm-0">
          <div className="col-12 col-md-6 col-lg-6">
            <AnimationPath direction={"left"} delay={0.25}>
              <div className="wrok-left dashboard-work">
                <h2 className="fw-bold">
                  Let’s Work together on your next Project
                </h2>
                <p>
                  I build fast, secure, and scalable backend systems tailored
                  for real-world applications. From APIs to databases, I focus
                  on performance, reliability, and long-term growth.
                </p>
              </div>
            </AnimationPath>
          </div>
          <div className="col-12 col-md-6 col-lg-6 text-end text-sm-center">
            <AnimationPath direction="left" delay={0.25}>
              <div className="btn-service btn-services pt-5 mt-5">
                <Link to="/contact">
                  <button>
                    <FaArrowRightLong className="me-2" />
                    Let's Get In Touch
                  </button>
                </Link>
              </div>
            </AnimationPath>
          </div>
        </div>
      </div>
      <div className="clear"></div>
    </section>
  );
};

export default WorkFlow;
