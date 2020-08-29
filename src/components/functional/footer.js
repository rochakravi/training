import React from "react";
import Button from "../ui-kit/button";

import { ThemeContext, themes } from "../ui-kit/theme-context";
import ThemedButton from "../ui-kit/themed-button";

const Footer = (props) => {
  //return <Button title="Enroll"></Button>;
  return (
    <ThemeContext.Provider value="light">
      <ThemedButton>Change Theme</ThemedButton>
    </ThemeContext.Provider>
  );
};

export default Footer;
