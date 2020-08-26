import React from "react";
import TableTrendMap from "components/TrandMap/TableTrendMap";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    roadMapWrapper: {
      padding: "50px 40px",
      textAlign: "center",
    },
    firstDigit: {
      textAlign: "center",
      textTransform: "uppercase",
      border: "1px solid #e7bb27",
      padding: "6px 14px",
      color: " #e7bb27",
      fontWeight: "600",
      cursor: "pointer",
      backgroundColor: "#303b77",
      borderTopLeftRadius: "4px",
    },
    lastDigit: {
      textAlign: "center",
      textTransform: "uppercase",
      border: "1px solid #e7bb27",
      padding: "6px 14px",
      color: " #e7bb27",
      fontWeight: "600",
      cursor: "pointer",
      backgroundColor: "#653e21",
    },
    bothDigit: {
      textAlign: "center",
      textTransform: "uppercase",
      border: "1px solid #e7bb27",
      padding: "6px 14px",
      color: " #e7bb27",
      fontWeight: "600",
      cursor: "pointer",
      backgroundColor: "#2f5f2a",
    },
    twoDigit: {
      textAlign: "center",
      textTransform: "uppercase",
      border: "1px solid #e7bb27",
      padding: "6px 14px",
      color: " #e7bb27",
      fontWeight: "600",
      cursor: "pointer",
      backgroundColor: "#a72a2c",
      borderTopRightRadius: "4px",
    },
  })
);

const numbers = [1, 2, 3, 4];
export default function RoadMap() {
  const classes = useStyles();
  return (
    <div className={classes.roadMapWrapper}>
      <button className={classes.firstDigit}>First Digit </button>
      <button className={classes.lastDigit}>last Digit </button>
      <button className={classes.bothDigit}>Both Digit </button>
      <button className={classes.twoDigit}>TWO Digit </button>

      <div className="roadMap__data">
        {numbers.map((number) => (
          <TableTrendMap key={number} />
        ))}
      </div>
    </div>
  );
}
