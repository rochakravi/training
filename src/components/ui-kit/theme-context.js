import React from "react";
export const themes = {
  light: {
    foreground: "#000000",
    background: "#ff0000",
  },
  dark: {
    foreground: "#ffffff",
    background: "#ff0000",
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
