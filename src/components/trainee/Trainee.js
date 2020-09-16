import React, { useState } from "react";
import "./trainee.styles.css";
import TraineeList from "../trainee-list/trainee-list";

import * as Data from "../../services/trainee-data";

const Trainee = () => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Course</th>
        <th>Location</th>
        <th>No of Classes</th>
        <th>Worth</th>
        <th>Received</th>
        <th>Balance</th>
      </tr>
      {Data.TraineeData.map((item) => {
        return <TraineeList item={item} />;
      })}
    </table>
  );
};

export default Trainee;
