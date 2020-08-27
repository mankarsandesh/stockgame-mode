import React from "react";
import { Bar } from "react-chartjs-2";

const state = {
  labels: [
    "US Dollar Index",
    "BTC/USD1",
    "BTC/USD5",
    "SH000001",
    "SZ399001",
    "SZ399415",
    "SH000300",
  ],

  datasets: [
    {
      label: "Win",
      fillColor: "red",
      backgroundColor: "#F75B54",
      data: [10, 20, 20, 31, 81, 91, 101],
    },
    {
      label: "Loss",
      fillColor: "red",
      backgroundColor: "#F9A5A3",
      data: [41, 31, 81, 91, 90, 51, 61],
    },
  ],
};

export default class StockAnalysisChart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
