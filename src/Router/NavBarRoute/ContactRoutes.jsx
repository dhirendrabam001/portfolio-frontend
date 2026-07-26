import { useEffect, useState } from "react";
import IconBar from "../../Components/Sidebar/Iconbar";
import ProfileSection from "../../Components/Sidebar/ProfileSection";
import SocialMedia from "../../Components/Sidebar/SocialMedia";
import SidebarNav from "../../Components/Sidebar/SidebarNav";
import HireButton from "../../Components/Sidebar/HireBotton";
import Contact from "../../Pages/NavBarPages/Contact";

const ContactRoutes = () => {
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
        <Contact />
      </div>
    </section>
  );
};

export default ContactRoutes;
