import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 15px 42px;
  border: 1px solid #005aff;
  font-size: 30px;
  background: #005aff;
  color: white;
  border-radius: 5px;
`;

const Button = (props) => {
  return <Btn>{props.title}</Btn>;
};

export default Button;
