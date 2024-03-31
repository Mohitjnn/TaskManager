import "./App.css";
import MainCard from "./components/MainCard";
import { MainCardData } from "./data";
import DropDown from "./components/DropDown";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  return (
    <>
      <header className="Header">
        <span>Task Board</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              opacity=".4"
              d="M12 22.012c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
              fill="#000000"
            ></path>
            <path
              d="M12 6.941c-2.07 0-3.75 1.68-3.75 3.75 0 2.03 1.59 3.68 3.7 3.74h.18a3.743 3.743 0 0 0 3.62-3.74c0-2.07-1.68-3.75-3.75-3.75ZM18.779 19.358a9.976 9.976 0 0 1-6.78 2.65c-2.62 0-5-1.01-6.78-2.65.24-.91.89-1.74 1.84-2.38 2.73-1.82 7.17-1.82 9.88 0 .96.64 1.6 1.47 1.84 2.38Z"
              fill="#000000"
            ></path>
          </svg>
        </span>
      </header>
      <section className="MainContent">
        <header className="ContentHeader">
          <div className="FiltersContainer">
            <span style={{ width: "fit-content" }}>Filter by:</span>
            <DropDown />
            <DropDown />
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Choose A Date"
              className="Date"
            />
          </div>
          <Popup
            trigger={
              <button type="button" className="btn btn-primary newTask">
                Add Task
              </button>
            }
            position="center center"
            modal
            nested
            className="center-popup"
          >
            <AddTaskForm />
          </Popup>
        </header>
        <div className="flexRow">
          <span>Sort by: </span>
          <DropDown />
        </div>
        <div className="MainBody">
          {MainCardData.map((card) => (
            <MainCard MainCardData={card} key={card.Title} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
