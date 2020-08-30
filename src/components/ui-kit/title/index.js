import React from "react";
import styled from "styled-components";

const title = styled.h1`
  color: yellow;
  font-size: 40px;
`;

const Title = (props) => {
  return <title>{props.title}</title>;
};

export default Title;
