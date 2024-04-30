import React from "react";
import DataCard from "./DataCard";

const MainCard = ({ MainCardData }) => {
  // Function to sort tasks by priority (P0 before P1, and P1 before P2)
  const sortByPriority = (a, b) => {
    if (a.Priority === b.Priority) {
      return 0;
    } else if (a.Priority === "P0") {
      return -1;
    } else if (b.Priority === "P0") {
      return 1;
    } else if (a.Priority === "P1") {
      return -1;
    } else {
      return 1;
    }
  };

  // Create a new array with sorted elements
  const sortedData = [...MainCardData.Data].sort(sortByPriority);

  return (
    <div
      className="card text-bg-light mb-3"
      style={{ maxWidth: "19%", height: "25rem" }}
    >
      <div
        className="card-header titles"
        style={{ backgroundColor: MainCardData.Color, color: "white" }}
      >
        {MainCardData.Title}
      </div>
      <div className="card-body cardContainer">
        {/* Render DataCard components for each task */}
        {sortedData.map((data) => (
          <DataCard data={data} key={data.Title} status={MainCardData.status} />
        ))}
      </div>
    </div>
  );
};

export default MainCard;
