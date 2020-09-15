import React from "react";
import Table from "../ui-kit/table";
import * as Data from "../../services/data";
const Java = (props) => {
  return (
    <>
      {Data.data.java.map((item) => {
        return (
          <Table
            key={item.heading}
            title={item.heading}
            contents={item.articles}
          />
        );
      })}
    </>
  );
};

export default Java;
