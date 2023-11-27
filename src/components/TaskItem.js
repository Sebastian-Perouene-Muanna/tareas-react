import React, { useState } from 'react';

const TaskItem = ({ task, handleComplete, handleDelete, handleModify }) => {
  const [isEditing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const completeTask = () => {
    handleComplete(task.id);
  };

  const deleteTask = () => {
    handleDelete(task.id);
  };

  const toggleEdit = () => {
    setEditing(!isEditing);
  };

  const saveChanges = () => {
    handleModify(task.id, newDescription);
    setEditing(false);
  };

  return (
    <li>
      <div>
        {isEditing ? (
          <div>
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <button onClick={saveChanges}>Guardar cambios</button>
          </div>
        ) : (
          <div>
            <span
              style={{
                textDecoration: task.completed ? 'none' : 'none',
                marginRight: '5px',
                color: task.completed ? '#4caf50' : 'inherit',
              }}
            >
              {task.completed && '✔ '}
            </span>
            {task.description}
          </div>
        )}
      </div>
      <div>
        <button
          onClick={completeTask}
          className={task.completed ? 'complete' : ''}
        >
          {task.completed ? 'Descompletar' : 'Completar'}
        </button>
        <button onClick={deleteTask}>Eliminar</button>
        <button onClick={toggleEdit}>Modificar</button>
      </div>
    </li>
  );
};

export default TaskItem;
