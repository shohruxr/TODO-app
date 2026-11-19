import Task from './Task';

interface TaskListProps {
  tasks: {
    id: number;
    description: string;
    created: Date;
    status: string;
  }[];
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}
export default TaskList;
