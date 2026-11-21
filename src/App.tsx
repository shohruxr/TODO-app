import { useState } from 'react';
import './App.css';
import Footer from './components/Footer.tsx';
import NewTask from './components/NewTaskForm.tsx';
import TaskList from './components/TaskList.tsx';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Completed task',
      created: new Date(),
      status: 'completed',
      isediting: false,
    },
    {
      id: 2,
      description: 'Active task',
      created: new Date(),
      status: 'active',
      isediting: false,
    },
    {
      id: 3,
      description: 'Editing task',
      created: new Date(),
      status: 'editing',
      isediting: true,
    },
  ]);

  const deleteTask = (id: number) => {
    setTasks((prevtasks) => prevtasks.filter((task) => task.id !== id));
  };

  const toggleTaskStatus = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          const newStatus =
            task.status === 'completed' ? 'active' : 'completed';
          return { ...task, status: newStatus };
        }
        return task;
      })
    );
  };

  const updateTaskDescription = (id: number, newDescription: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  return (
    <>
      <section className="todoapp">
        <NewTask />
        <section className="main">
          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            onToggleStatus={toggleTaskStatus}
            updateTaskDescription={updateTaskDescription}
          />
          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;
