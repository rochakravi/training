import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Section = styled.section`
  background: #00d0ff36;
  padding: 1px 8px;
  box-shadow: 1px 2px 9px 5px #226c106e;
  margin: 0 10px 10px 10px;

  // @media (max-width: 1400px) {
  //   padding: 1px 18px;
  // }
`;
const Heading = styled.h1`
  color: black;
  font-size: 20px;
  // @media (max-width: 1400px) {
  //   font-size: 25px;
  // }
`;
const Content = styled(Heading)`
  color: #140080;
  font-size: 14px;
  // @media (max-width: 1400px) {
  //   font-size: 22px;
  // }
`;

const Card = ({ title, content }) => {
  Card.defaultProps = {
    title: "Card",
  };

  Card.propTypes = {
    title: PropTypes.string.isRequired,
  };

  return (
    <Section>
      <div>
        <Heading>{title}</Heading>
      </div>
      <div>
        <Content>{content}</Content>
      </div>
    </Section>
  );
};

export default Card;
