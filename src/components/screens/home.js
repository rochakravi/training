import React from "react";

const Home = (props) => {
  return (
    <>
      <table>
        <th>
          <td>Topic</td>
          <td>Due Date</td>
          <td>Status</td>
        </th>
        <tr>
          <td>React Testing</td>
          <td>16 Sep 2020</td>
          <td>Open</td>
        </tr>
        <tr>
          <td>use context</td>
          <td>17 Sep 2020</td>
          <td>Open</td>
        </tr>
      </table>
    </>
  );
};

export default Home;
