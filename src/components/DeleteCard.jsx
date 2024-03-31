import React from "react";
import Popup from "reactjs-popup";
import AddTaskForm from "./AddTaskForm";
import DeleteCardCss from "./DeleteCard.module.css";
const DeleteCard = () => {
  return (
    <Popup
      trigger={<button className="Btn">Delete</button>}
      modal
      nested
      className="center-popup"
    >
      <div className={`backGroundColor ${DeleteCardCss.Body}`}>
        <header className={DeleteCardCss.Header}>
          <h5>Delete</h5>
        </header>
        <span>Do You Wish To Delete The Task</span>
        <div className="flexRow" style={{ justifyContent: "space-between" }}>
          <h5>Task 1</h5>
          <div className={DeleteCardCss.ButtonContainer}>
            <button className="btn btn-primary">YES</button>
            <button className="btn btn-primary">NO</button>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default DeleteCard;
