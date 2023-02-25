import { Mock_ToDo } from "./MockToDo";
import { useStore } from "./utility";

const TaskButtonGroup = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn">
        Edit <span className="visually-hidden">Eat</span>
      </button>
      <button type="button" className="btn btn__danger">
        Delete <span className="visually-hidden">Eat</span>
      </button>
    </div>
  );
};

export default TaskButtonGroup;
