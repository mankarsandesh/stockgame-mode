import React from "react";
import "./TableTrend.css";

function createTable() {
  let table = [];
  // Outer loop to create parent
  for (let i = 0; i < 6; i++) {
    let children = [];
    //Inner loop to create children
    for (let j = 0; j < 18; j++) {
      children.push(
        <td className={`${j > 5 ? "bigDigit" : "firstDigit"}`} key={j}>
          B
        </td>
      );
    }
    //Create the parent and add the children
    table.push(
      <tbody>
        <tr className="section" key={children}>
          {children}
        </tr>
      </tbody>
    );
  }
  return table;
}

class TableTrendMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.gameRule,
    };
  }
  render() {
    return (
      <div className="tableTrend__wrapper">
        <div className="tableTrend__firstDigit">
          <table>{createTable()}</table>
        </div>
      </div>
    );
  }
}

export default TableTrendMap;
