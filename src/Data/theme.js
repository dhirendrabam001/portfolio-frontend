// Persist the chosen light/dark theme so it survives page changes and reloads.
const KEY = "portfolio-theme";

export const getSavedTheme = () => {
  try {
    return localStorage.getItem(KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
};

const save = (theme) => {
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* storage unavailable - theme just won't persist */
  }
};

// Called once at startup: apply the saved theme before first paint and keep
// storage in sync whenever any page toggles the class on <body>.
export const initTheme = () => {
  const apply = (theme) => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  };
  apply(getSavedTheme());

  new MutationObserver(() => {
    const cl = document.body.classList;
    if (cl.contains("light")) save("light");
    else if (cl.contains("dark")) save("dark");
  }).observe(document.body, { attributes: true, attributeFilter: ["class"] });
};
