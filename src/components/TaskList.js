import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, handleComplete, handleDelete, handleModify }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            handleModify={handleModify} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

