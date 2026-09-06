import { getState, saveState, LS_KEYS } from "./local-storage-api";

export function switchTheme() {
    if (document.body.classList.contains("theme-dark")) {
        document.body.classList.add("theme-light");
        document.body.classList.remove("theme-dark");
        saveState(LS_KEYS.theme, "light");
    } else {
        document.body.classList.add("theme-dark");
        document.body.classList.remove("theme-light");
        saveState(LS_KEYS.theme, "dark");
    }
}

export function initialTheme() {

  if (getState(LS_KEYS.theme) === "light") {
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
  }
}