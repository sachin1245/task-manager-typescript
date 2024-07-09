import React, { useMemo } from "react";
import { useTasks } from "../hooks/useTasks";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";
import { getSuggestedTaskOrder } from "../services/aiService";

const TaskList: React.FC = () => {
  const { tasks, addTask, removeTask, toggleTask } = useTasks();

  console.log(tasks);

  const sortedTasks = useMemo(() => {
    return getSuggestedTaskOrder(tasks);
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
