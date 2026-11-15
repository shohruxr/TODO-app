import "./App.css";
import Footer from "./components/Footer.tsx";
import NewTask from "./components/NewTaskForm.tsx";
import Task from "./components/Task.tsx";

function App() {
  return (
    <>
      <section className="todoapp">
       <NewTask/>
        <section className="main">
          <Task/>
          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;
