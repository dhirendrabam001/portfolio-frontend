import { useEffect, useState } from "react";
import IconBar from "./Sidebar/Iconbar";
import ProfileSection from "./Sidebar/ProfileSection";
import SocialMedia from "./Sidebar/SocialMedia";
import SidebarNav from "./Sidebar/SidebarNav";
import HireButton from "./Sidebar/HireBotton";
import TypeText from "./Sidebar/TypeText";
import ViewBotton from "./Sidebar/ViewBotton";
import ExperienceContent from "./Sidebar/ExperienceContent";
import BannerHome from "./Sidebar/BannerHome";

const SideBarMain = () => {
  const [active, setActive] = useState("Home");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((pre) => (pre === "light" ? "dark" : "light"));
  };

  return (
    <>
      <section className="sidebar-main d-flex justify-content-center align-items-center">
        <div className="iconbar">
          <IconBar theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="sidebar-profile">
          <ProfileSection />
          <SocialMedia />
          <SidebarNav />
          <HireButton />
        </div>
        <div className="homecon">
          <div className="main-content-right">
            <TypeText />
            <ViewBotton />
          </div>
          <ExperienceContent />
        </div>
        <div className="img-con">
          <BannerHome />
        </div>
      </section>
      <hr className="left-hr" />
    </>
  );
};

export default SideBarMain;
