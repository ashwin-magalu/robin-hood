import React, { useState, useEffect } from "react";
import "./LineGraph.css";
import { Line } from "react-chartjs-2";

const options = {
  legend: {
    display: false,
  },
  hover: {
    intersect: false,
  },
  elements: {
    line: {
      tension: 0,
    },
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {},
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
        ticks: {
          display: true,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
        },
        ticks: {
          display: true,
        },
      },
    ],
  },
};

const LineGraph = () => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    let data = [];
    let value = 50;
    for (let i = 0; i < 365; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
      data.push({ x: date, y: value });
    }
    setGraphData(data);
    return () => {
      //
    };
  }, []);

  return (
    <div className="lineGraph">
      {graphData?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                type: "line",
                data: graphData,
                backgroundColor: "black",
                borderColor: "#5ac53b",
                borderWidth: 2,
                pointBorderColor: "rgba(0,0,0,0)",
                pointBackgroundColor: "rgba(0,0,0,0)",
                pointHoverBackgroundColor: "#5ac53b",
                pointHoverBorderColor: "#000000",
                pointHoverBorderWidth: 4,
                pointHoverRadius: 6,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
};

export default LineGraph;
