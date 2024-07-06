import React from "react";
import { Task } from "../types/Task";
import styles from "./TaskItem.module.css";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete }) => {
  const handleToggle = () => {
    onToggleComplete(task.id);
  };

  return (
    <div className={styles.taskItem}>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <span className={task.completed ? styles.completed : ""}>
        {task.title}
      </span>
      <span className={styles.date}>{task.createdAt.toLocaleDateString()}</span>
    </div>
  );
};

export default TaskItem;
