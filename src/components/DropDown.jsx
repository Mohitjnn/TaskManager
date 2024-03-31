import React from "react";

const DropDown = () => {
  return (
    <>
      <div className="btn-group dropDowns">
        <button
          className="btn btn-secondary btn-sm dropdown-toggle dropDownButton"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            backgroundColor: "aliceblue",
            color: "gray",
            fontSize: 15,
            fontWeight: 500,
            fontFamily: "Poppins",
          }}
        >
          Small button
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
