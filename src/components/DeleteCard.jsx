import React from "react";
import Popup from "reactjs-popup";
import DeleteCardCss from "./DeleteCard.module.css";
import { useDispatch } from "react-redux";
import { deleteData } from "../store/addTask";

const DeleteCard = ({ card }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteData(card)); // Dispatching the deleteData action with the card data
  };

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
          <h5>{card}</h5>
          <div className={DeleteCardCss.ButtonContainer}>
            <button className="btn btn-primary" onClick={handleDelete}>
              YES
            </button>
            <button className="btn btn-primary">NO</button>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default DeleteCard;
