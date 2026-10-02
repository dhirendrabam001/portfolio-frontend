import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  EASE,
  INTRO_DURATION_MS,
  INTRO_PLAYS,
  INTRO_SESSION_KEY,
} from "../../Animated/motionTokens";
import { detectIntro3D } from "../../Animated/useEnable3D";

// Developer-themed three.js scene (loaded on demand)
const IntroScene = lazy(() => import("./IntroScene"));

const FAILSAFE_MS = 8000; // never trap the visitor if WebGL stalls

const IntroLoader = () => {
  const [show, setShow] = useState(INTRO_PLAYS);
  const [use3D] = useState(detectIntro3D);
  const timer = useRef(null);

  const finish = useCallback(() => {
    clearTimeout(timer.current);
    try {
      sessionStorage.setItem(INTRO_SESSION_KEY, "1");
    } catch {
      /* storage unavailable - intro simply plays again next visit */
    }
    setShow(false);
  }, []);

  // Start the countdown once the scene is actually on screen
  const startTimer = useCallback(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(finish, INTRO_DURATION_MS);
  }, [finish]);

  // Lock scroll while the intro plays; always release it afterwards
  useEffect(() => {
    if (!show) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    timer.current = setTimeout(finish, use3D ? FAILSAFE_MS : INTRO_DURATION_MS);
    return () => {
      clearTimeout(timer.current);
      document.body.style.overflow = previous;
    };
  }, [show, use3D, finish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro-loader"
          role="status"
          aria-label="Loading portfolio"
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {use3D ? (
            <>
              <div className="intro-canvas">
                <Suspense fallback={null}>
                  <IntroScene onReady={startTimer} />
                </Suspense>
              </div>
              <motion.div
                className="intro-hud"
                aria-hidden="true"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 1, 0] }}
                transition={{ duration: 5, times: [0, 0.6, 0.7], ease: "linear" }}
              >
                <span className="intro-hud-label">
                  <i /> initializing portfolio
                </span>
                <div className="intro-progress">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5.0, delay: 0.2, ease: "linear" }}
                  />
                </div>
              </motion.div>
            </>
          ) : (
            <>
              {/* lightweight fallback: curtain + monogram (phones, no WebGL) */}
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
              <div className="intro-center">
                <motion.div
                  className="intro-monogram"
                  initial={{ opacity: 0, rotateY: -90, rotateX: 25 }}
                  animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
                  transition={{ duration: 1.1, ease: EASE }}
                >
                  DB
                </motion.div>
                <motion.p
                  className="intro-name"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: EASE }}
                >
                  DHIRENDRA BAM
                </motion.p>
              </div>
            </>
          )}

          <button type="button" className="intro-skip" onClick={finish}>
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
