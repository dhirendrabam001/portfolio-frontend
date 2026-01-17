import AboutMore from "../../Components/AboutMore";
import Testimonials from "../../Components/Testimonials";
import Footer from "../../Components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="combine-routes">
        <section className="aboutus-main"></section>
        <div className="about-more-details">
          <AboutMore />
          <Testimonials />
        </div>
        <div className="footer-infosss">
          <Footer />
        </div>
      </div>
      {/* <div className="testi-main"></div> */}
    </>
  );
};
export default AboutUs;
