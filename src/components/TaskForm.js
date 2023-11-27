import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: new Date().getTime(),
        description: newTask,
        completed: false,
      };
      addTask(task);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="Nueva tarea"
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;