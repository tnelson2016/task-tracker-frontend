import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/tasks`);
      if (!response.ok) throw new Error("Failed to fetch tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks", error);
    }
  };

  // Load tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Add a new task
  const handleAddTask = async (newTask) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) throw new Error("Failed to add task");

      const createdTask = await response.json();
      setTasks((prevTasks) => [...prevTasks, createdTask]);
    } catch (error) {
      console.error("Add error:", error);
    }
    toast.success("Task added!");

  };



  // Toggle task completion
  const handleToggleTask = async (taskId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/tasks/${taskId}/toggle`, {
        method: "PUT",
      });
  
      if (!response.ok) throw new Error("Failed to toggle task");
  
      const updatedTask = await response.json();
  
      console.log("✅ Toggled Task:", updatedTask);
  
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        )
      );
    } catch (error) {
      console.error("Toggle error:", error);
    }
  };
  
  // Delete a task
  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete task");

      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  
  //Add “Clear Completed” Button
  const handleClearCompleted = async () => {
    try {
      const completedTasks = tasks.filter((task) => task.completed);
      for (const task of completedTasks) {
        await fetch(`${process.env.REACT_APP_API_URL}/api/tasks/${task.id}`, {
          method: "DELETE",
        });
      }
      setTasks((prev) => prev.filter((task) => !task.completed));
    } catch (error) {
      console.error("Failed to clear completed tasks", error);
    }
  };
  

  return (
    <div style={{
      maxWidth: "600px",
      margin: "2rem auto",
      padding: "2rem",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9"
    }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>📝 Task Tracker</h1>
      <p style={{ textAlign: "center", fontSize: "1rem", color: "#666" }}>
  {tasks.filter((task) => !task.completed).length} tasks remaining
</p>

      <TaskForm onAdd={handleAddTask} />
      <TaskList tasks={tasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} />
      <button
  onClick={handleClearCompleted}
  style={{
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#555",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  Clear Completed Tasks
</button>
<ToastContainer position="top-center" autoClose={2000} />

    </div>
  );
}

export default App;
