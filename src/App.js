import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('La lista de tareas ha sido actualizada:', tasks);
  }, [tasks]);

  const handleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleModify = (taskId, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, description: newDescription } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="main-content">
        <div className="card">
          <h2>Lista de Tareas</h2>
          <div className="task-list-container">
            <TaskList
              tasks={tasks}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              handleModify={handleModify}
            />
          </div>
        </div>
        <div className="card">
          <h2>Agregar Tarea</h2>
          <div className="task-form">
            <TaskForm addTask={addTask} />
          </div>
        </div>
      </div>
      <footer>
        Sebastián Perouene Muanna - Argentina Programa 4.0 / 2023
      </footer>
    </div>
  );
};

export default App;
