import { useState } from 'react';

function Task({ task, onDelete, onToggleStatus, updateTaskDescription }) {
  const [editDescription, setEditDescription] = useState(task.description);
  const [isediting, setIsEditing] = useState(false);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateTaskDescription(task.id, editDescription);
    setIsEditing(false);
  };
  return (
    <li className={`${task.status} ${isediting ? 'editing' : ''}`}>
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
          onClick={() => setIsEditing(true)}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={() => onDelete(task.id)}
        ></button>
      </div>
      {isediting && (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            className="edit"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
        </form>
      )}
    </li>
  );
}
export default Task;
