import Task from './Task';

interface TaskListProps {
  tasks: {
    id: number;
    description: string;
    created: Date;
    status: string;
    isediting: boolean;
  }[];
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
  updateTaskDescription: (id: number, newDescription: string) => void;
}

function TaskList({
  tasks,
  onDelete,
  onToggleStatus,
  updateTaskDescription,
}: TaskListProps) {
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
