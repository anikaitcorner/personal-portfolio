import { create } from "zustand";

interface ThemeModeSwitcher {
  isDarkMode: boolean;
  setThemeMode: () => void;
}

export const useThemeMode = create<ThemeModeSwitcher>((set) => {
  const localMode = localStorage.getItem("mode");

  const currMode = localMode && (JSON.parse(localMode) as boolean);

  return {
    isDarkMode: !!currMode,
    setThemeMode: () =>
      set((mode) => {
        if (mode.isDarkMode) {
          mode.isDarkMode = false;
        } else {
          mode.isDarkMode = true;
        }

        localStorage.setItem("mode", JSON.stringify(mode.isDarkMode));

        const changeMode = localStorage.getItem("mode");

        const changeToCurrentState = changeMode && (JSON.parse(changeMode) as boolean);

        return {
          isDarkMode: !!changeToCurrentState,
        };
      }),
  };
});
