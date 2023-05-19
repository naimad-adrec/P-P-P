import React from "react";
import { render } from "react-dom";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

const progressData = [
  { name: "Food", percentage: 76, money: 180},
  { name: "Housing", percentage: 43, money: 712.50 },
  { name: "Transportation", percentage: 61, money: 136.5 },
  { name: "Cudi's Food", percentage: 0, money: 50},
  { name: "Personal", percentage: 27, money: 511 },
  { name: "Savings", percentage: 100, money: 0 }
];

const Overview = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Overview</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, minmax(1fr, 5px))",
          gap: "20px",
        }}
      >
        {progressData.map(({ name, percentage, money }) => (
          <div key={name}>
            <h2 style={{ marginBottom: "10px" }}>{name}</h2>
            <AnimatedProgressProvider
              valueStart={percentage}
              valueEnd={percentage}
              duration={2}
              easingFunction={easeQuadInOut}
              repeat={true}
            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbarWithChildren value={value}>
                    <div
                      style={{
                        fontSize: '60',
                        marginTop: "20%",
                        textAlign: "center",
                        height: "80%",
                      }}
                    >
                      <strong
                      style={{
                        paddingTop: '100px',
                        fontSize: 20,
                        color: '#17252A'
                      }}>{roundedValue}%</strong>
                        <div
                        style={{
                          fontSize: 20,
                          color: '#17252A'
                        }}>
                        <strong>Money Left: ${money}</strong>
                      </div>
                    </div>
                  </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider>
          </div>
        ))}
      </div>
    </div>
  );
};

render(<Overview />, document.getElementById("root"));

export default Overview;
