import React, { useMemo } from "react";
import { useTasks } from "../hooks/useTasks";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const { tasks, addTask, removeTask, toggleTask } = useTasks();

  const sortedTasks = useMemo(() => {
    return [...tasks].sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }, [tasks]);

  return (
    <div>
      <AddTask onAddTask={addTask} />
      {sortedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={toggleTask}
          onRemoveTask={removeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
