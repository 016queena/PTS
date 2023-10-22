import React, { useState } from 'react';
import './uploadDailyTask.css';

const UploadDailyTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleTaskInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleDeadlineInputChange = (event) => {
    setDeadline(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: tasks.length + 1,
        date: new Date().toLocaleDateString(),
        task: newTask,
        deadline: deadline
      };
      setTasks([...tasks, task]);
      setNewTask('');
      setDeadline('');
    }
  };

  return (
    <div className="upload-daily-tasks">
      <h2>Upload Daily Tasks</h2>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={handleTaskInputChange}
        />
        <input
          type="date"
          placeholder="Deadline"
          value={deadline}
          onChange={handleDeadlineInputChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <table className="task-list">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Date</th>
            <th>Task</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.date}</td>
              <td>{task.task}</td>
              <td>{task.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UploadDailyTasks;
