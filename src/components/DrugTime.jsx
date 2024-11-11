import React from "react";

function DrugTime({ drugTimes }) {
  // Use map to directly return list items
  return (
    <ul>
      {drugTimes.map((time, index) => (
        <li key={index}>
          <p className="text-gray-900 whitespace-no-wrap">{time}</p>
        </li>
      ))}
    </ul>
  );
}

export default DrugTime;
