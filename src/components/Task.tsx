interface Taskls {
  description: string;
  created: Date;
}

const Task = (Props: Taskls) => {
  return (
    <li className="completed">
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{Props.description}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
};
export default Task;
