import { useEffect, useState } from "react";

const hasWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// True only when the device can comfortably run the WebGL scene
export const detect3D = () => {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return false;
  if (window.innerWidth < 992) return false;
  if ((navigator.hardwareConcurrency || 4) < 4) return false;
  return hasWebGL();
};

// The intro runs on phones too (the scene adapts to the screen shape)
export const detectIntro3D = () => {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return false;
  if ((navigator.hardwareConcurrency || 4) < 4) return false;
  return hasWebGL();
};

const useEnable3D = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const update = () => setEnabled(detect3D());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return enabled;
};

export default useEnable3D;
