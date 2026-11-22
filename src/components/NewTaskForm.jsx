import { useState } from 'react';

function NewTask({ newTask }) {
  const [description, setDescription] = useState('');
  return (
    <header className="header">
      <h1>todos</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (description.trim() !== '') {
            newTask(description);
            setDescription('');
          }
        }}
      >
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          autoFocus
        />
      </form>
    </header>
  );
}

export default NewTask;
