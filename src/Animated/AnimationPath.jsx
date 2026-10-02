// Animated/AnimationPath.jsx
import { motion } from "framer-motion";

const variants = {
  left: { hidden: { opacity: 0, x: -70 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 70 }, visible: { opacity: 1, x: 0 } },
  top: { hidden: { opacity: 0, y: -70 }, visible: { opacity: 1, y: 0 } },
  bottom: { hidden: { opacity: 0, y: 70 }, visible: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  // depth reveal: tilts up out of the screen, blur to sharp
  "3d": {
    hidden: { opacity: 0, y: 50, rotateX: -18, transformPerspective: 900, scale: 0.96, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)" },
  },
};

const AnimationPath = ({
  children,
  direction = "bottom",
  delay = 0,
  duration = 0.8,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationPath;
