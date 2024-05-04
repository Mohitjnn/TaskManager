import React, { useRef } from "react";
import EditCardCss from "./EditCard.module.css";
import Popup from "reactjs-popup";
import { useDispatch } from "react-redux";
import { editData } from "../store/addTask";

const EditCard = ({ formData, status }) => {
  const priorityRef = useRef(formData.Priority);
  const statusRef = useRef(status);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedData = {
      ...formData,
      Priority: priorityRef.current.value,
      Status: statusRef.current.value,
    };

    console.log("Edited data:", editedData); // Log the edited data
    console.log("Priority value:", priorityRef.current.value); // Log the priority value
    console.log("Status value:", statusRef.current.value); // Log the status value

    dispatch(editData(editedData));
  };

  return (
    <Popup
      trigger={<button className="Btn">Edit</button>}
      modal
      nested
      className="center-popup"
    >
      <div className={`backGroundColor ${EditCardCss.body}`}>
        <header className={EditCardCss.heading}>
          <h5>Edit Task</h5>
        </header>
        <form className={EditCardCss.Form} onSubmit={handleSubmit}>
          <div className={EditCardCss.Inputs}>
            <label htmlFor="Title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="Title"
              value={formData.Title}
              disabled
            />
          </div>
          <div className={EditCardCss.Inputs}>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={formData.Description}
              disabled
            />
          </div>
          <div className={EditCardCss.Inputs}>
            <label htmlFor="Team" className="form-label">
              Team
            </label>
            <input
              type="text"
              className="form-control"
              id="Team"
              value={formData.Team}
              disabled
            />
          </div>
          <div className={EditCardCss.Inputs}>
            <label htmlFor="Assignee" className="form-label">
              Assignee
            </label>
            <input
              type="text"
              className="form-control"
              id="Assignee"
              value={formData.Assignee}
              disabled
            />
          </div>
          <div className={EditCardCss.Inputs}>
            <label htmlFor="Priority" className="form-label">
              Priority
            </label>
            <select
              className="form-select"
              id="Priority"
              aria-label="Default select example"
              defaultValue={formData.Priority} // Use defaultValue instead of value
              ref={priorityRef} // Assign the ref to access the selected value
            >
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>
          <div className={EditCardCss.Inputs}>
            <label htmlFor="Status" className="form-label">
              Status
            </label>
            <input
              type="text"
              className="form-control"
              id="Status"
              defaultValue={status} // Use defaultValue instead of value
              ref={statusRef} // Assign the ref to access the input value
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Popup>
  );
};

export default EditCard;
