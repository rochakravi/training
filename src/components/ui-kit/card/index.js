import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: #00d0ff36;
  padding: 1px 38px;
  box-shadow: 1px 2px 9px 5px #226c106e;
  margin: 0 30px 10px 0;
`;
const Heading = styled.h1`
  color: black;
  font-size: 40px;
`;
const Content = styled(Heading)`
  color: #140080;
  font-size: 28px;
`;

const Card = (props) => {
  return (
    <Section>
      <div>
        <Heading>{props.title}</Heading>
      </div>
      <div>
        <Content>{props.content}</Content>
      </div>
    </Section>
  );
};

export default Card;
