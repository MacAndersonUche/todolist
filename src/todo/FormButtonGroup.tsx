import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { Task } from "./Task";
import { activeTasks, completedTasks } from "./utility";

const FormButtonGroup = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // // event.preventDefault();
    // const btnName = event.currentTarget.name;
    // if (btnName === "Active") {
    //   const filtered = activeTasks(todos);
    //   setToDos(filtered);
    //   console.log(todos);
    //   return;
    // }
    // if (btnName === "Completed") {
    //   const filtered = completedTasks(todos);
    //   setToDos(filtered);
    //   console.log(todos);
    //   return;
    // }
    // setToDos(todos);
    // console.log(event.currentTarget.name);
  };
  return (
    <div className="filters btn-group stack-exception">
      {["All", "Completed", "Active"].map((state) => (
        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed="true"
          onClick={handleClick}
          key={state}
          name={state}
        >
          <span className="visually-hidden">Show </span>
          <span>{state}</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      ))}
    </div>
  );
};

export default FormButtonGroup;
