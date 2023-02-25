import "./App.css";
import FormButtonGroup from "./todo/FormButtonGroup";
import TaskSingle from "./todo/TaskSingle";
import { useStore } from "./todo/utility";

function App() {
  const { toDos } = useStore();
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
      <FormButtonGroup />
      <h2 id="list-heading">{toDos.length} tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {toDos.map((todo, index) => (
          <li className="todo stack-small" key={index}>
            <TaskSingle todo={todo.todo} inputId={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
