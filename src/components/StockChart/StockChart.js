import React from "react";
import { Line } from "react-chartjs-2";

const state = {
  labels: ["2 Jan 2020","3 Jan 2020","4 Jan 2020","5 Jan 2020","6 Jan 2020","7 Jan 2020","8 Jan 2020","2 Jan 2020","3 Jan 2020","4 Jan 2020","5 Jan 2020","6 Jan 2020","7 Jan 2020","8 Jan 2020"  ],
  datasets: [
    {
      label: "",
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 65.25, 65.52, 81, 56,65, 59, 80, 81, 56,65, 65.25, 65.52, 81, 56,65, 59, 80, 81, 56],
    },
  ],
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{           
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
