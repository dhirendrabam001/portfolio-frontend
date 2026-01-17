import { useEffect, useState } from "react";
import IconBar from "./Sidebar/Iconbar";
import ProfileSection from "./Sidebar/ProfileSection";
import SocialMedia from "./Sidebar/SocialMedia";
import SidebarNav from "./Sidebar/SidebarNav";
import HireButton from "./Sidebar/HireBotton";
import BlogPages from "../Pages/BlogPages";
const FixSideBar = () => {
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
    <section className="sidebar-main d-flex gap-2">
      <div className="iconbar">
        <IconBar theme={theme} toggleTheme={toggleTheme} />
      </div>
      <div className="sidebar-profile">
        <ProfileSection />
        <SocialMedia />
        <SidebarNav active={active} setActive={setActive} />
        <HireButton />
      </div>
      <div className="homecon-info">
        <BlogPages />
      </div>
    </section>
  );
};

export default FixSideBar;
