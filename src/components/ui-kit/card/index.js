import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

const Card = ({ title, content, badge, toggleHandler }) => {
  Card.defaultProps = {
    title: "Card",
  };

  Card.propTypes = {
    title: PropTypes.string.isRequired,
    badge: PropTypes.number.isRequired,
  };

  return (
    <Section onClick={toggleHandler}>
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
