import { useState } from 'react';

interface TaskProps {
  task: {
    id: number;
    description: string;
    created: Date;
    status: string;
    isediting: boolean;
  };
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
  updateTaskDescription: (id: number, newDescription: string) => void;
}

function Task({
  task,
  onDelete,
  onToggleStatus,
  updateTaskDescription,
}: TaskProps) {
  const [isediting, setIsEditing] = useState(task.isediting);
  const [editDescription, setEditDescription] = useState(task.description);

  return (
    <li className={`${task.status}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.status === 'completed'}
          onChange={() => onToggleStatus(task.id)}
        />
        <label>
          <span className="description">{task.description}</span>
          <span className="created"></span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => {
            setEditDescription(task.description);
            setIsEditing(true);
          }}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={() => onDelete(task.id)}
        ></button>
      </div>
      {isediting && (
        <input
          type="text"
          className="edit"
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              updateTaskDescription(task.id, editDescription);
              setIsEditing(false);
            }
          }}
        />
      )}
    </li>
  );
}
export default Task;
