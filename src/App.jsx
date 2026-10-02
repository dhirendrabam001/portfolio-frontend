import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Import css files

import "./App.css";
import "./responsive.css";

import useTilt from "./Animated/useTilt";
import IntroLoader from "./Components/Intro/IntroLoader";
import AboutMore from "./Components/AboutMore";
import SideBarMain from "./Components/SideBarMain";
import ServicesMain from "./Components/ServicesMain";
import WorkFlow from "./Components/WorkFlow";
import Project from "./Components/Project";
import Testimonials from "./Components/Testimonials";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";

function App() {
  // 3D tilt on skill cards and project thumbnails
  useTilt(".service-card .content-main, .project-card .card-img");

  return (
    <div className="app-layput">
      <IntroLoader />
      <SideBarMain />
      <div className="main-scroll-content">
        <AboutMore />
        <ServicesMain />
      </div>
      <WorkFlow />
      <div className="main-scroll-content">
        <Project />
        <Testimonials />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
