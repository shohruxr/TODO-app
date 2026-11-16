// interface List{
//     children: React.ReactNode
// }

import Task from './Task';

function TaskList() {
  return (
    <ul className="todo-list">
      <Task description="Completed" created={new Date()} />
    </ul>
  );
}
export default TaskList;
