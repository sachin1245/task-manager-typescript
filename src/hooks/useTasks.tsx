import { useCallback } from "react";
import { useTaskContext } from "../context/TaskContext";
import { Task } from "../types/Task";

export const useTasks = () => {
  const { state, dispatch } = useTaskContext();

  const addTask = useCallback(
    (title: string) => {
      const newTask: Task = {
        id: Date.now().toString(),
        title: title,
        completed: false,
        createdAt: new Date(),
      };

      dispatch({ type: "ADD_TASK", payload: newTask });
    },
    [dispatch]
  );

  const toggleTask = useCallback(
    (id: string) => {
      dispatch({ type: "TOGGLE_TASK", payload: id });
    },
    [dispatch]
  );

  const removeTask = useCallback(
    (id: string) => {
      dispatch({ type: "REMOVE_TASK", payload: id });
    },
    [dispatch]
  );

  return {
    tasks: state.tasks,
    addTask,
    removeTask,
    toggleTask,
  };
};
