import './App.css';
import Footer from './components/Footer.tsx';
import NewTask from './components/NewTaskForm.tsx';
import TaskList from './components/TaskList.tsx';

function App() {
  return (
    <>
      <section className="todoapp">
        <NewTask />
        <section className="main">
          <TaskList />
          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;
