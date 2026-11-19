import { useState } from 'react';
import './App.css';
import Footer from './components/Footer.tsx';
import NewTask from './components/NewTaskForm.tsx';
import TaskList from './components/TaskList.tsx';

function App() {
  const [tasks] = useState([
    {
      id: 1,
      description: 'Completed task',
      created: new Date(),
      status: 'completed',
    },
    {
      id: 2,
      description: 'Active task',
      created: new Date(),
      status: 'active',
    },
    {
      id: 3,
      description: 'Editing task',
      created: new Date(),
      status: 'editing',
    },
  ]);
  return (
    <>
      <section className="todoapp">
        <NewTask />
        <section className="main">
          <TaskList tasks={tasks} />
          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;
