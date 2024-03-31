import React from "react";
import EditCardCss from "./EditCard.module.css";
import Popup from "reactjs-popup";

const EditCard = ({ formData, status }) => {
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
        <form className={EditCardCss.Form}>
          <div className={EditCardCss.Inputs}>
            <label htmlFor="Title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="Title"
              value={formData.Title}
              disabled // Disable the input field
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
              disabled // Disable the textarea
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
              disabled // Disable the input field
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
              disabled // Disable the input field
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
              value={formData.Priority}
            >
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P3">P2</option>
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
              value={status}
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Popup>
  );
};

export default EditCard;
