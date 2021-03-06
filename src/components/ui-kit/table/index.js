import React, { useState } from "react";
import styled from "styled-components";

const List = styled.li`
  padding: 10px 20px;
  list-style: none;
  background: #00d0ff36;
  margin-bottom: 5px;
`;
const Title = styled.h1`
  color: #140080;
  font-size: 22px;
`;
const Article = styled.article`
  font-size: 18px;
  color: blue;
`;
const Flag = styled.span`
  font-size: 10px;
  color: #ff00eb;
`;

const Table = (props) => {
  const [open, setOpen] = useState(false);

  const expand = () => {
    console.log("oepn dsfdsfds", { open });
    setOpen(!open);
    console.log("oepn new", { open });
  };

  return (
    <List onClick={expand} key={props.title}>
      <Title>{props.title}</Title>
      {props.contents.map((ii) => {
        return (
          <>
            <Article key={ii.heading}>
              {ii.heading}
              {ii.type && (
                <button style={{ position: "relative", left: "7%" }}>
                  <Flag>{ii.type}</Flag>
                </button>
              )}
            </Article>
          </>
        );
      })}
    </List>
  );
};

export default Table;
