import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  EASE,
  INTRO_DURATION_MS,
  INTRO_PLAYS,
  INTRO_SESSION_KEY,
} from "../../Animated/motionTokens";

const IntroLoader = ({ onDone }) => {
  const [show, setShow] = useState(INTRO_PLAYS);

  const finish = () => {
    try {
      sessionStorage.setItem(INTRO_SESSION_KEY, "1");
    } catch {
      /* storage unavailable - intro simply plays again next visit */
    }
    setShow(false);
  };

  // Lock scroll while the intro plays, then release and notify the page
  useEffect(() => {
    if (!show) {
      onDone?.();
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(finish, INTRO_DURATION_MS);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previous;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro-loader"
          role="status"
          aria-label="Loading portfolio"
          exit={{ transition: { duration: 0.9 } }}
        >
          {/* two curtain halves that split apart to reveal the page */}
          <motion.div
            className="intro-curtain intro-curtain-top"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: EASE }}
          />
          <motion.div
            className="intro-curtain intro-curtain-bottom"
            exit={{ y: "100%" }}
            transition={{ duration: 0.9, ease: EASE }}
          />

          <motion.div
            className="intro-center"
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="intro-monogram"
              initial={{ opacity: 0, rotateY: -90, rotateX: 25, z: -200 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0, z: 0 }}
              transition={{ duration: 1.1, ease: EASE }}
            >
              DB
            </motion.div>

            <motion.p
              className="intro-name"
              initial={{ opacity: 0, y: 14, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.28em" }}
              transition={{ duration: 1, delay: 0.5, ease: EASE }}
            >
              DHIRENDRA BAM
            </motion.p>

            <div className="intro-progress">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.8, delay: 0.3, ease: EASE }}
              />
            </div>
          </motion.div>

          <button type="button" className="intro-skip" onClick={finish}>
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
