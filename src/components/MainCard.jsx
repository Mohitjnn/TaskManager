import React from "react";
import DataCard from "./DataCard";

const MainCard = ({ MainCardData }) => {
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
        {MainCardData.Data.map((data) => (
          <DataCard data={data} key={data.Title} />
        ))}
      </div>
    </div>
  );
};

export default MainCard;
