import React from 'react';
import './App.css';
import Tasks from './components/Tasks';
import AddTasks from './components/AddTasks';

function App() {
  return (
    <div className="App">
      <Tasks />
      <AddTasks />
    </div>
  );
}

export default App;
