import { lazy, Suspense } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import useEnable3D from "../../Animated/useEnable3D";
import { EASE, ENTRANCE_DELAY } from "../../Animated/motionTokens";

// The WebGL scene is loaded on demand so it never blocks first paint
const HeroScene = lazy(() => import("../Hero3D/HeroScene"));

const BannerHome = () => {
  const enable3D = useEnable3D();

  // Cursor-driven 3D tilt for the portrait
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 120, damping: 18, mass: 0.6 };
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), spring);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), spring);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="imgages-info hero-3d"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {enable3D ? (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      ) : (
        <div className="hero-orbs" aria-hidden="true">
          <span className="orb orb-a" />
          <span className="orb orb-b" />
        </div>
      )}

      <motion.div
        className="hero-portrait"
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 60, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: ENTRANCE_DELAY + 0.2, ease: EASE }}
      >
        <img src="/bgremove.webp" alt="Dhirendra Bam" fetchPriority="high" />
      </motion.div>
    </div>
  );
};

export default BannerHome;
