import React, { useState } from "react";
import styles from "./App.module.css";
import { TaskProvider } from "./context/TaskContext";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div className={styles.appContainer}>
        <h1>AI-Powered Task Manager</h1>
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
