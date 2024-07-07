import React, { useState } from "react";
import styles from "./AddTask.module.css";

interface AddTaskProps {
  onAddTask: (title: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim());
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addTask}>
      <input
        type="text"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new Task"
        value={title}
      />
      <button type="submit" className={styles.button}>
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
