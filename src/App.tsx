import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { TaskProvider } from "./context/TaskContext";

const TaskList = lazy(() => import("./components/TaskList.backup"));
const EditTask = lazy(() => import("./components/EditTask"));

const App: React.FC = () => {
  return (
    <Router>
      <TaskProvider>
        <div className={styles.appContainer}>
          <h1>AI-Powered Task Manager</h1>
          <Suspense fallback={<>...loading</>}>
            <Routes>
              <Route path="/" element={<TaskList />}></Route>
              <Route path="/edit/:id" element={<EditTask />}></Route>
            </Routes>
          </Suspense>
        </div>
      </TaskProvider>
    </Router>
  );
};

export default App;
