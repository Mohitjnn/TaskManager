import React from "react";

const DropDown = () => {
  return (
    <>
      <div class="btn-group dropDowns">
        <button
          class="btn btn-secondary btn-sm dropdown-toggle dropDownButton"
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
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
