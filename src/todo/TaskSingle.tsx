import React from "react";
import TaskButtonGroup from "./TaskButtonGroup";
import { useStore } from "./utility";

interface TaskProps {
  todo: string;
  inputId: number | undefined;
  checked?: boolean;
}

const TaskSingle = ({ todo, inputId }: TaskProps) => {
  const { toDos, setToDos } = useStore();

  const handleDeleteClick = () => {
    const filtered = toDos.filter((note) => note.todo !== todo);
    setToDos(filtered);
  };
  return (
    <>
      <div className="c-cb">
        <input id={"todo-" + inputId} type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor={"todo-" + inputId}>
          {todo}
        </label>
      </div>
      <TaskButtonGroup handleDeleteClick={handleDeleteClick} />
    </>
  );
};

export default TaskSingle;
