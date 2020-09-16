import React, { useState } from "react";
import "./trainee.styles.css";

const TraineeList = ({ item }) => {
  const [classes, setClasses] = useState(item.classes);
  const [worth, setWorth] = useState(item.worth);
  const [received, setReceived] = useState(item.received);
  const [balance, setBalance] = useState(item.balance);
  const add = () => {
    setClasses(classes + 1);
  };
  return (
    <tr>
      <td>
        <span className="name tName">{item.name}</span>
      </td>
      <td>
        <span className="name">{item.courseName}</span>
      </td>
      <td>
        <span className="name location">{item.location}</span>
      </td>

      <td>
        <span className="name">
          <button className="button add" onClick={add}>
            +
          </button>

          <button className="button">
            Attended <span className="cls">{classes} </span>Classes
          </button>
          <button className="button dec">-</button>
        </span>
      </td>

      <td>
        <span className="worth">{worth}</span>
      </td>
      <td>
        <span className="received">{received}</span>
      </td>

      <td>
        <span className="balance">{balance}</span>
      </td>
    </tr>
    // <div className="traineeList">

    //   <span className="name tName">{item.name}</span>
    //   <span className="name">{item.courseName}</span>
    //   <span className="name location">{item.location}</span>
    //   <span className="name">
    //     <button className="button add">+</button>
    //     <button className="button">
    //       Attended <span className="cls">{classes} </span>Classes{" "}
    //     </button>
    //     <button className="button dec">-</button>
    //   </span>
    //   <span className="name">
    //     Worth <span className="worth">{worth}</span>
    //   </span>
    //   <span className="name ">
    //     Received <span className="received">{received}</span>
    //   </span>
    //   <span className="name ">
    //     Balance <span className="balance">{balance}</span>
    //   </span>

    // </div>
  );
};

export default TraineeList;
