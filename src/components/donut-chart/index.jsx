import { colors } from "../../mocks";
import React from "react";
import "./style.scss";

export const DonutChart = (props) => {
  const { title = "195", text = "Muassasa sig'imi", data } = props;

  const calculateAngles = () => {
    const total = data.reduce((acc, value) => acc + value, 0);
    const scaledData = data.map((value) => (value / total) * 100);
    let angles = [];
    let cumulativeAngle = 0;

    for (let i = 0; i < scaledData.length; i++) {
      const angle = (360 * scaledData[i]) / 100;
      angles.push({
        start: cumulativeAngle,
        end: cumulativeAngle + angle,
        color: colors[i],
      });
      cumulativeAngle += angle;
    }

    return angles;
  };

  const angles = calculateAngles();

  return (
    <div className="donut shadowed p-1">
      <p className="card_title">{title}</p>
      <p className="card_text">{text}</p>
      <div className="donut-chart">
        {angles.map((angle, index) => (
          <div
            key={index}
            className="donut-segment"
            style={{
              transform: `rotate(${angle.start}deg)`,
              border: `15px solid ${angle.color}`,
              clip: "rect(0, 50px, 100px, 0)",
            }}
          />
        ))}
        <p className="percent">12%</p>
      </div>
    </div>
  );
};
