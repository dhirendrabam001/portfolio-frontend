import ServicesMain from "../../Components/ServicesMain";
import HireButton from "../../Components/Sidebar/HireBotton";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { FaqData } from "../../Data/Data";
import Footer from "../../Components/Footer";
import AnimationPath from "../../Animated/AnimationPath";

const ServicesPage = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      <div className="blog-pages">
        <section className="service-pages">
          <div className="service-heading text-center py-4">
            <AnimationPath direction="left" delay={0.3}>
              <h2 className="fw-bold fs-1">Services & Professional Services</h2>
              <p className="mx-5">
                I build secure, scalable, and high-performance backend systems
                for modern web applications. Focused on clean APIs, efficient
                databases, and reliable, <span>server-side logic</span>.
                Designed to support growth, stability, and seamless user,
                <span>experiences</span>.
              </p>
              <HireButton />
            </AnimationPath>
          </div>
          <hr className="service-hr" />
          <div className="service-comp">
            <ServicesMain />
          </div>
          <div className="service-ques mt-5">
            <div className="service-line d-flex gap-2">
              <div className="title-line"></div>
              <h2 className="fs-1 fw-bold">Have any questions?</h2>
            </div>
            <div className="mb-2">
              <p>
                Feel free to reach out if you have any questions or need more
                information. <br />
                I’m always happy to help and discuss your ideas.
              </p>
            </div>
            <div className="question-content">
              <div className="row align-items-center g-5">
                <div className="col-12 col-md-7 col-lg-7">
                  <div className="question-content-left">
                    <AnimationPath direction="bottom" delay={0.2}>
                      <div className="faq-accordion">
                        {FaqData.map((item, index) => (
                          <div
                            className={`accordion-item-custom ${
                              openIndex === index ? "active" : ""
                            }`}
                            key={index}
                          >
                            <button
                              className="accordion-header-custom d-flex align-items-center justify-content-between"
                              onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                              }
                            >
                              <div className="d-flex align-items-center">
                                <FaArrowRight className="me-3" />
                                <span className="question-text">
                                  {item.question}
                                </span>
                              </div>
                              <span className="right-icon">
                                {openIndex === index ? <FaMinus /> : <FaPlus />}
                              </span>
                            </button>
                            {openIndex === index && (
                              <div className="accordion-body-custom">
                                <p>{item.answer}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </AnimationPath>
                  </div>
                </div>
                <div className="col-12 col-md-5 col-lg-5">
                  <AnimationPath direction="left" delay={0.25}>
                    <div className="question-img">
                      <img
                        src="/light.webp"
                        className="img-fluid"
                        alt="light"
                      />
                    </div>
                  </AnimationPath>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="footer-infos">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
