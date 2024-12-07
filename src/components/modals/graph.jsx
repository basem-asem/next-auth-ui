import React, { useState } from "react";

const months = [
  "jan", "feb", "mar", "apr", "may", "jun", "jul",
  "aug", "sep", "oct", "nov", "dec",
];

const data = [
  10000, 9000, 10000, 11000, 10000, 11000, 9000,
  10000, 11000, 10000, 9000, 11000,
];

const Graph = () => {
  const [hoveredMonth, setHoveredMonth] = useState(null);

  // Scale the data to fit the graph height (100px)
  const graphHeight = 100;
  const maxValue = Math.max(...data);
  const scaledData = data.map((value) => graphHeight - (value / maxValue) * graphHeight);

  // Function to create smooth Bezier path
  const createSmoothPath = (points) => {
    return points.reduce((path, y, index, arr) => {
      if (index === 0) {
        // Move to the first point
        return `M0 ${y}`;
      }
      const prevX = (index - 1) * (400 / data.length);
      const currX = index * (400 / data.length);

      const prevY = arr[index - 1];
      const cp1X = prevX + (currX - prevX) / 2;
      const cp1Y = prevY;
      const cp2X = cp1X;
      const cp2Y = y;

      return `${path} C${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${currX} ${y}`;
    }, "");
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 bg-white rounded-3xl">
      <h2 className="text-lg font-semibold mb-4">Fans</h2>
      <div className="relative h-40">
        {/* Graph Lines */}
        <svg
          viewBox="0 0 400 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Smooth Line Path */}
          <path
            d={createSmoothPath(scaledData)}
            stroke="#000"
            fill="none"
            strokeWidth="2"
          />

          {/* Circle for the hovered data point */}
          {hoveredMonth !== null && (
            <circle
              cx={(hoveredMonth + 1) * (400 / data.length) - (400 / data.length) / 2}
              cy={scaledData[hoveredMonth]}
              r="5"
              fill="yellow"
            />
          )}
        </svg>

        {/* Highlighted Value */}
        {hoveredMonth !== null && (
          <div
            className="absolute bg-[#DFFC52] text-black px-2 py-1 text-sm rounded"
            style={{
              left: `${(hoveredMonth + 1) * (100 / data.length)}%`,
              top: `${scaledData[hoveredMonth]}px`,
              transform: "translate(-50%, -150%)",
            }}
          >
            {data[hoveredMonth].toLocaleString()}
          </div>
        )}
      </div>

      {/* Month Selectors */}
      <div className="flex justify-between mt-4">
        {months.map((month, index) => (
          <button
            key={index}
            onMouseEnter={() => setHoveredMonth(index)}
            onMouseLeave={() => setHoveredMonth(null)}
            className={`px-2 py-1 border-gray-400 border rounded-full ${
              hoveredMonth === index ? "bg-black text-white" : "text-gray-700"
            }`}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Graph;
