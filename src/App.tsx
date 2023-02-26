import "./App.css";
import FormButtonGroup from "./todo/FormButtonGroup";
import TaskSingle from "./todo/TaskSingle";
import { useStore } from "./todo/utility";

function App() {
  const {
    toDos,
    active,
    status,
    isActive,
    isCompleted,
    completed,
    setIsCompleted,
    setIsActive,
    filterActiveToDos,
    filterCompletedToDos,
  } = useStore();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // event.preventDefault();
    const btnName = event.currentTarget.name;
    if (btnName === "Active") {
      filterActiveToDos(toDos);
      setIsActive(true);
      setIsCompleted(false);
      return;
    }
    if (btnName === "Completed") {
      filterCompletedToDos(toDos);
      setIsCompleted(true);
      setIsActive(false);
      return;
    }
    if (btnName === "All") {
      setIsActive(false);
      setIsCompleted(false);
      return;
    }
  };
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <FormButtonGroup handleClick={handleClick} />
      {status === "All" && !isActive && !isCompleted && (
        <h2 id="list-heading">You have a total of {toDos.length} tasks</h2>
      )}
      {isActive && (
        <h2 id="list-heading">You have {active.length} active tasks</h2>
      )}
      {isCompleted && (
        <h2 id="list-heading">You have completed {completed.length} tasks</h2>
      )}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {status === "All" &&
          !isActive &&
          !isCompleted &&
          toDos.map((todo, index) => (
            <li className="todo stack-small" key={index}>
              <TaskSingle todo={todo.todo} inputId={index} />
            </li>
          ))}
        {isActive &&
          active.map((todo, index) => (
            <li className="todo stack-small" key={index}>
              <TaskSingle todo={todo.todo} inputId={index} />
            </li>
          ))}
        {isCompleted &&
          completed.map((todo, index) => (
            <li className="todo stack-small" key={index}>
              <TaskSingle todo={todo.todo} inputId={index} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
