interface TaskProps {
  task: {
    id: number;
    description: string;
    created: Date;
    status: string;
  };
}

function Task({ task }: TaskProps) {
  return (
    <li className={`${task.status}`}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{task.description}</span>
          <span className="created">etbergbe</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      {task.status === 'editing' && (
        <input type="text" className="edit" value={task.description} />
      )}
    </li>
  );
}
export default Task;
