import React from "react";
import AddTaskFormCss from "./AddTaskForm.module.css";
const AddTaskForm = () => {
  return (
    <div className={`backGroundColor ${AddTaskFormCss.body}`}>
      <header className={AddTaskFormCss.heading}>
        <h5>Add Task</h5>
      </header>
      <form className={AddTaskFormCss.Form}>
        <div className={AddTaskFormCss.Inputs}>
          <label for="Title" class="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="Title" />
        </div>
        <div className={AddTaskFormCss.Inputs}>
          <label for="exampleFormControlTextarea1" class="form-label">
            Description
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className={AddTaskFormCss.Inputs}>
          <label for="Team" class="form-label">
            Team
          </label>
          <input type="text" className="form-control" id="Team" />
        </div>
        <div className={AddTaskFormCss.Inputs}>
          <label for="Assignee" class="form-label">
            Assignee
          </label>
          <input type="text" className="form-control " id="Assignee" />
        </div>
        <div className={AddTaskFormCss.Inputs}>
          <label for="Priority" class="form-label">
            Priority
          </label>
          <select
            class="form-select"
            id="Priority"
            aria-label="Default select example"
          >
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P3">P2</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
