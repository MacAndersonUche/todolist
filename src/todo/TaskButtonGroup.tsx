interface Props {
  handleDeleteClick: () => void;
}
const TaskButtonGroup = ({ handleDeleteClick }: Props) => {
  return (
    <div className="btn-group">
      <button type="button" className="btn">
        Edit <span className="visually-hidden">Eat</span>
      </button>
      <button
        type="button"
        className="btn btn__danger"
        onClick={handleDeleteClick}
      >
        Delete <span className="visually-hidden">Eat</span>
      </button>
    </div>
  );
};

export default TaskButtonGroup;
