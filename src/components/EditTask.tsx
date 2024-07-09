import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import tasksSlice, { editTask } from "../store/tasksSlice";
import styles from "./EditTask.module.css";

const EditTask: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const task = useAppSelector((state) =>
    state.tasks.tasks.find((t) => t.id === id)
  );

  const [title, setTitle] = useState(task?.title || "");

  useEffect(() => {
    if (!task) {
      navigate("/");
    } else {
      setTitle(task.title);
    }
  }, [task, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      dispatch(editTask({ ...task, title }));
      navigate("/");
    }
  };

  if (!task) return null;

  return (
    <form onSubmit={handleSubmit} className={styles.editForm}>
      <h2>Edit Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Save
      </button>
    </form>
  );
};

export default EditTask;
