// Shared motion language so every animation on the site feels like one system
export const EASE = [0.22, 1, 0.36, 1]; // smooth "expo-out"
export const DURATION = { fast: 0.35, base: 0.8, slow: 1.2 };
export const STAGGER = 0.12;

export const INTRO_SESSION_KEY = "portfolio-intro-seen";
export const INTRO_DURATION_MS = 2600;

const computeIntroPlays = () => {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return !sessionStorage.getItem(INTRO_SESSION_KEY);
  } catch {
    return true;
  }
};

// Evaluated once when the app loads (before the intro marks itself as seen)
export const INTRO_PLAYS = computeIntroPlays();

// Page entrance animations wait for the intro curtain to open
export const ENTRANCE_DELAY = INTRO_PLAYS ? 2.3 : 0.1;
