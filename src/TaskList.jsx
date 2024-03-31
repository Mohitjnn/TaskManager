import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Task List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Assignee</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.startDate.format("YYYY-MM-DD")}</td>
              <td>{task.endDate ? task.endDate.format("YYYY-MM-DD") : ""}</td>
              <td>{task.status}</td>
              <td>{task.assignee}</td>
              <td>{task.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
