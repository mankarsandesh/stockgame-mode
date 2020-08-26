import React from "react";
import TableTrendMap from "components/TrandMap/TableTrendMap";
import "./RoadMap.css";

const numbers = [1, 2, 3, 4];

export default function RoadMap() {
  const [gameRule, setGameRule] = React.useState("firstDigit");

  const handleOpen = (pageName) => {
    setGameRule(pageName);
    console.log(pageName, "pageName");
  };

  const getClass = (someInput) => {
    switch (someInput) {
      case "firstDigit": {
        return "button firstDigit";
      }
      case "lastDigit": {
        return "button lastDigit";
      }
      case "twoDigit": {
        return "button twoDigit";
      }
      case "bothDigit": {
        return "button bothDigit";
      }
    }
  };

  const allRuleName = ["firstDigit", "lastDigit", "twoDigit", "bothDigit"];

  return (
    <div className="roadMapWrapper">
      {allRuleName.map((ruleName) => (
        <span
          className={getClass(ruleName)}
          onClick={() => handleOpen(ruleName)}
        >
          {ruleName}
        </span>
      ))}

      <div className="roadMap__data">
        {numbers.map((number) => (
          <TableTrendMap key={number} gameRule={gameRule} />
        ))}
      </div>
    </div>
  );
}
