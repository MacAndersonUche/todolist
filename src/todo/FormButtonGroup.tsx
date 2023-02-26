interface Props {
  handleClick: any;
}

const FormButtonGroup = ({ handleClick }: Props) => {
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
