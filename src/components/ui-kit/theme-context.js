import React from "react";
export const themes = {
  light: {
    foreground: "#000000",
    background: "#12d9e8",
  },
  dark: {
    foreground: "#ffffff",
    background: "#12d9e8",
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
