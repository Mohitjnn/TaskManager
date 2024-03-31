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
      </div>
    </Popup>
  );
};

export default DeleteCard;
