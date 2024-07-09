import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Task } from "../types/Task";
import styles from "./TaskItem.module.css";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onRemoveTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = memo(
  ({ task, onToggleComplete, onRemoveTask }) => {
    console.log(`Task item: ${task.id}`);
    const handleToggle = () => {
      onToggleComplete(task.id);
    };

    const handleRemove = () => {
      onRemoveTask(task.id);
    };

    return (
      <div className={styles.taskItem}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
        />
        <span className={task.completed ? styles.completed : ""}>
          {task.title}
        </span>
        <span className={styles.priority}>{task.priority}</span>
        <span className={styles.date}>
          {task.createdAt.toLocaleDateString()}
        </span>
        <Link to={`/edit/${task.id}`} className={styles.editButton}>
          Edit
        </Link>
        <button onClick={handleRemove} className={styles.removeButton}>
          Remove
        </button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.task.id === nextProps.task.id &&
      prevProps.task.completed === nextProps.task.completed &&
      prevProps.task.priority === nextProps.task.priority
    );
  }
);

export default TaskItem;
