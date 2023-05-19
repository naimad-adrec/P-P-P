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
  { name: "Food", percentage: 76, icon: "grocery_fixed.png" },
  { name: "Housing", percentage: 43, icon: "house_fixed.png" },
  { name: "Transportation", percentage: 61, icon: "car_fixed.png" },
  { name: "Pet", percentage: 89, icon: "benji_fixed.png" },
  { name: "Personal", percentage: 27, icon: "fun_fixed.png" },
  { name: "Savings", percentage: 100, icon: "dining_fixed.png" }
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
          gap: "20px"
        }}
      >
        {progressData.map(({ name, percentage, icon }) => (
          <div key={name}>
            <h2 style={{ marginBottom: "10px" }}>{name}</h2>
            <AnimatedProgressProvider
              valueStart={100}
              valueEnd={percentage}
              duration={2}
              easingFunction={easeQuadInOut}
              repeat={true}
            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbarWithChildren value={value}>
                    <img
                      src={icon}
                      alt={name}
                      style={{
                        width: "45%",
                        marginTop: "0%",
                        position: "absolute",
                        left: "27%",
                        top: "25%"
                      }}
                    />
                    <div
                      style={{
                        fontSize: 20,
                        marginTop: "60%",
                        textAlign: "center"
                      }}
                    >
                      <strong>{roundedValue}%</strong>
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
