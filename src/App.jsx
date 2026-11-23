import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import NewTask from './components/NewTaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: Date.now(),
      description: 'Completed task',
      created: new Date(),
      status: 'completed',
    },
    {
      id: Date.now(),
      description: 'Active task',
      created: new Date(),
      status: 'active',
    },
    {
      id: Date.now(),
      description: 'Editing task',
      created: new Date(),
      status: 'editing',
    },
  ]);

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description: description,
      created: new Date(),
      status: 'active',
    };

    setTasks((prevtasks) => [...prevtasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks((prevtasks) => prevtasks.filter((task) => task.id !== id));
  };

  const toggleTaskStatus = (id) => {
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

  const updateTaskDescription = (id, newDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  return (
    <>
      <section className="todoapp">
        <NewTask newTask={addTask} />
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
