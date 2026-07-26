import { useState } from "react";
import AnimationPath from "../Animated/AnimationPath";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import { ProjectData } from "../Data/Data";
import { Link } from "react-router-dom";
const Project = () => {
  const [hover, setHover] = useState(false);
  return (
    <section className="project-main py-3">
      <div className="row">
        <div className="col-12 col-md-7 col-lg-7 project-info">
          <AnimationPath direction="left" delay={0.1}>
            <div className="service-line d-flex gap-2">
              <div className="title-line"></div>
              <h2 className="fs-1 fw-bold">Featured Projects</h2>
            </div>
            <div className="mt-2">
              <p>
                My step-by-step guide ensures a smooth project journey, from the
                initial consultation to the final delivery. I take care of every
                detail, allowing you to focus on what you do best.
              </p>
            </div>
          </AnimationPath>
        </div>
        <div className="col-12 col-md-5 col-lg-5 text-end">
          <AnimationPath direction="left" delay={0.2}>
            <div className="btn-service btn-servicess">
              <Link to="/portfolio">
                <button>
                  <FaArrowRightLong className="me-2" />
                  View Portfolio
                </button>
              </Link>
            </div>
          </AnimationPath>
        </div>
      </div>
      {/* CARD */}
      <div className="project-card mt-5">
        <div className="row align-items-center g-5 pages">
          {ProjectData.map((item, index) => {
            return (
              <div className="col-12 col-md-6 col-lg-6" key={index}>
                <div className="card-info">
                  <AnimationPath direction="left" delay={0.25}>
                    <div className="card-img">
                      <img
                        src={item.img}
                        className={`card-img-top ${item.imgClass || ""}`}
                        alt={item.title}
                        style={item.imgStyle}
                      />
                    </div>
                    <div className="cards-body">
                      <div className="left">
                        <div className="card-content d-flex align-items-center gap-4">
                          {item.tech.map((item, index) => (
                            <button key={index}>{item}</button>
                          ))}
                        </div>

                        <h2 className="fw-bold fs-5 my-3">{item.title}</h2>
                      </div>
                      <Link to={item.link}>
                        <div
                          className="arrow-btn"
                          onMouseEnter={() => setHover(true)}
                          onMouseLeave={() => setHover(false)}
                        >
                          {hover ? <FaArrowRight /> : <GoArrowUpRight />}
                        </div>
                      </Link>
                    </div>
                  </AnimationPath>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Project;
