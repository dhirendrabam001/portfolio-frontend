import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Import css files

import "./App.css";
import "./responsive.css";

import AboutMore from "./Components/AboutMore";
import SideBarMain from "./Components/SideBarMain";
import ServicesMain from "./Components/ServicesMain";
import WorkFlow from "./Components/WorkFlow";
import Project from "./Components/Project";
import Testimonials from "./Components/Testimonials";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app-layput">
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
