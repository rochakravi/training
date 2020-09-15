import React from "react";
import { ThemeContext } from "./theme-context";
import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  color: #45b0de;
  padding: 10px;
  border-radius: 4px;
  border: 2px solid #45b0de;
  font-weight: 500;
  font-size: 15px;
`;

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return <Button {...props} />;
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
