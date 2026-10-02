import { useEffect } from "react";

const MAX_TILT = 7; // degrees

// Delegated 3D tilt: any element matching `selector` leans toward the cursor.
// Only enabled for mouse users who haven't asked for reduced motion.
const useTilt = (selector) => {
  useEffect(() => {
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (!canHover) return;

    let active = null;

    const reset = (el) => {
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
      el.classList.remove("is-tilting");
    };

    const onMove = (e) => {
      const el = e.target.closest?.(selector);
      if (active && active !== el) reset(active);
      if (!el) {
        active = null;
        return;
      }
      active = el;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.classList.add("is-tilting");
      el.style.setProperty("--tilt-y", `${px * MAX_TILT * 2}deg`);
      el.style.setProperty("--tilt-x", `${-py * MAX_TILT * 2}deg`);
    };

    const onLeave = () => {
      if (active) reset(active);
      active = null;
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [selector]);
};

export default useTilt;
