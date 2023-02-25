import { useState } from "react";
import "./App.css";
import FormButtonGroup from "./todo/FormButtonGroup";
import { Mock_ToDo } from "./todo/MockToDo";
import { Task } from "./todo/Task";
import TaskSingle from "./todo/TaskSingle";

function App() {
  const [todos, setToDos] = useState<Task[]>(Mock_ToDo);
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
      <FormButtonGroup todos={todos} setToDos={setToDos} />
      <h2 id="list-heading">{todos.length} tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {todos.map((todo, index) => (
          <li className="todo stack-small" key={index}>
            <TaskSingle todo={todo.todo} inputId={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
