import React, { useState } from "react";
import styles from "./App.module.css";
import { Task } from "./types/Task";
import TaskItem from "./components/TaskItem";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Learn Advanced React Hooks",
      completed: false,
      createdAt: new Date(),
    },
  ]);

  const handleToggleComplete = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={styles.appContainer}>
      <h1>AI-Powered Task Manager</h1>
      {tasks.map((task) => (
        <TaskItem task={task} onToggleComplete={handleToggleComplete} />
      ))}
    </div>
  );
};

export default App;
