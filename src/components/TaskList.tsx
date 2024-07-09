import React, { useMemo, useCallback } from "react";
import { addTask, toggleTask, removeTask } from "../store/tasksSlice";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";
import { getSuggestedTaskOrder } from "../services/aiService";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

const TaskList: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const sortedTasks = useMemo(() => {
    return getSuggestedTaskOrder(tasks);
  }, [tasks]);

  const handleAddTask = useCallback(
    (title: string) => {
      dispatch(
        addTask({
          title,
          completed: false,
          id: Date.now().toString(),
          createdAt: new Date(),
        })
      );
    },
    [dispatch]
  );

  const handleToggleTask = useCallback(
    (id: string) => {
      dispatch(toggleTask(id));
    },
    [dispatch]
  );

  const handleRemoveTask = useCallback(
    (id: string) => {
      dispatch(removeTask(id));
    },
    [dispatch]
  );

  return (
    <div>
      <AddTask onAddTask={handleAddTask} />
      {sortedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={handleToggleTask}
          onRemoveTask={() => dispatch(removeTask(task.id))}
        />
      ))}
    </div>
  );
};

export default TaskList;
