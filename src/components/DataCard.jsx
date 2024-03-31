import React from "react";
import DataCardCss from "./DataCard.module.css";

const DataCard = ({ data }) => {
  return (
    <div class="card">
      <div class="card-body">
        <div className="flexRow" style={{ justifyContent: "space-between" }}>
          <h5 class="card-title">{data.Title}</h5>
          <span className={DataCardCss.blue}>{data.Priority}</span>
        </div>
        <p class="card-text">{data.Description}</p>
        <button class={`btn btn-primary`}>Go somewhere</button>
      </div>
    </div>
  );
};

export default DataCard;
