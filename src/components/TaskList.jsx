import Task from './Task';

function TaskList({ tasks, onDelete, onToggleStatus, updateTaskDescription }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
          updateTaskDescription={updateTaskDescription}
        />
      ))}
    </ul>
  );
}
export default TaskList;
