// Animated/AnimationPath.jsx
import { motion } from "framer-motion";

const variants = {
  left: { hidden: { opacity: 0, x: -70 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 70 }, visible: { opacity: 1, x: 0 } },
  top: { hidden: { opacity: 0, y: -70 }, visible: { opacity: 1, y: 0 } },
  bottom: { hidden: { opacity: 0, y: 70 }, visible: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
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
