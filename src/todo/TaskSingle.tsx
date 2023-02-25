import React from "react";
import TaskButtonGroup from "./TaskButtonGroup";

interface TaskProps {
  todo: string;
  inputId: number | undefined;
  checked?: boolean;
}

const TaskSingle = ({ todo, inputId }: TaskProps) => {
  return (
    <>
      <div className="c-cb">
        <input id={"todo-" + inputId} type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor={"todo-" + inputId}>
          {todo}
        </label>
      </div>
      <TaskButtonGroup />
    </>
  );
};

export default TaskSingle;
