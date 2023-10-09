import React, { useState } from 'react';
import axios from 'axios';

function AddTasks() {
  const [newTask, setNewTask] = useState({ title: '' });

  const handleInputChange = (e) => {
    setNewTask({ title: e.target.value });
  };

  const handleAddTask = () => {
    axios.post('/api/tasks', newTask).then((response) => {
      // Handle response, update UI, or perform other actions
      console.log('Task added:', response.data);
    });
  };

  return (
    <div>
      <h2>Add a New Task</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={newTask.title}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTasks;
