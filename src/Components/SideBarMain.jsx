import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  DURATION,
  EASE,
  ENTRANCE_DELAY,
  STAGGER,
} from "../Animated/motionTokens";
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
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* Fixed icon strip — far left */}
      <motion.div
        className="iconbar"
        initial={{ opacity: 0, x: -44 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: DURATION.base, delay: ENTRANCE_DELAY, ease: EASE }}
      >
        <IconBar theme={theme} toggleTheme={toggleTheme} />
      </motion.div>

      {/* Fixed profile sidebar */}
      <motion.div
        className="sidebar-profile"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: DURATION.slow,
          delay: ENTRANCE_DELAY + 0.1,
          ease: EASE,
        }}
      >
        <ProfileSection />
        <SocialMedia />
        <SidebarNav />
        <HireButton />
      </motion.div>

      {/* Hero — content area to the right of the sidebar */}
      <section className="hero-section">
        <div className="hero-inner">
          {/* Left: typewriter + description + buttons + stats */}
          <div className="hero-text-col hero-3d-stage">
            {[TypeText, ViewBotton, ExperienceContent].map((Block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: -14, z: -60 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
                transition={{
                  duration: DURATION.slow,
                  delay: ENTRANCE_DELAY + i * STAGGER * 1.5,
                  ease: EASE,
                }}
                style={{ transformOrigin: "50% 100%" }}
              >
                <Block />
              </motion.div>
            ))}
          </div>

          {/* Right: profile image */}
          <div className="hero-img-col">
            <BannerHome />
          </div>
        </div>
      </section>

      <hr className="left-hr" />
    </>
  );
};

export default SideBarMain;
