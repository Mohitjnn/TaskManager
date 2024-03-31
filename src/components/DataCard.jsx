import React from "react";
import DataCardCss from "./DataCard.module.css";

const DataCard = ({ data, status }) => {
  return (
    <div
      class={`card ${DataCardCss.Body} `}
      style={{ backgroundColor: "#f3f1f2" }}
    >
      <div class="card-body">
        <div className="flexRow" style={{ justifyContent: "space-between" }}>
          <h5 class="card-title">{data.Title}</h5>
          <span className={DataCardCss.blue}>{data.Priority}</span>
        </div>
        <p class={DataCardCss.desc}>{data.Description}</p>
        <div
          className="flexRow"
          style={{ justifyContent: "space-between", alignItems: "start" }}
        >
          <p className={DataCardCss.Assignee}>@{data.Assignee}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
            className={DataCardCss.blue}
            transform="rotate(90)"
          >
            <path
              d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM19 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
              stroke="#d9e3f0"
              strokeWidth="1.5"
            ></path>
          </svg>
        </div>
        <button class={`btn btn-primary`}>{status}</button>
      </div>
    </div>
  );
};

export default DataCard;
