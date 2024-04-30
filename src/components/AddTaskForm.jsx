import React, { useState, useRef } from "react";
import AddTaskFormCss from "./AddTaskForm.module.css";
import { useDispatch } from "react-redux";
import { addData } from "../store/addTask";

const AddTaskForm = () => {
  const dispatch = useDispatch();

  const [newTaskData, setNewTaskData] = useState({
    Title: "",
    Description: "",
    Team: "",
    Assignee: "",
    Priority: "P0",
  });

  // useRef for input values
  const titleRef = useRef();
  const descriptionRef = useRef();
  const teamRef = useRef();
  const assigneeRef = useRef();
  const priorityRef = useRef();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the current input values
    const newData = {
      Title: titleRef.current.value,
      Description: descriptionRef.current.value,
      Team: teamRef.current.value,
      Assignee: assigneeRef.current.value,
      Priority: priorityRef.current.value,
    };
    // Store the new data in state
    setNewTaskData(newData);

    dispatch(addData(newData));

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    teamRef.current.value = "";
    assigneeRef.current.value = "";
    priorityRef.current.value = "P0";
    // Set Priority back to default
  };

  return (
    <div className={`backGroundColor ${AddTaskFormCss.body}`}>
      <header className={AddTaskFormCss.heading}>
        <h5>Add Task</h5>
      </header>
      <form className={AddTaskFormCss.Form} onSubmit={handleSubmit}>
        <div className={AddTaskFormCss.Inputs}>
          <label htmlFor="Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="Title"
            ref={titleRef}
          />
        </div>
        <div className={AddTaskFormCss.Inputs}>
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="Description"
            ref={descriptionRef}
            rows="3"
          ></textarea>
        </div>
        <div className={AddTaskFormCss.Inputs}>
          <label htmlFor="Team" className="form-label">
            Team
          </label>
          <input type="text" className="form-control" id="Team" ref={teamRef} />
        </div>
        <div className={AddTaskFormCss.Inputs}>
          <label htmlFor="Assignee" className="form-label">
            Assignee
          </label>
          <input
            type="text"
            className="form-control"
            id="Assignee"
            ref={assigneeRef}
          />
        </div>
        <div className={AddTaskFormCss.Inputs}>
          <label htmlFor="Priority" className="form-label">
            Priority
          </label>
          <select
            className="form-select"
            id="Priority"
            ref={priorityRef}
            aria-label="Default select example"
          >
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
