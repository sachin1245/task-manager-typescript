import { Task } from "../types/Task";

export const getTaskPriority = (task: Task): "High" | "Medium" | "Low" => {
  const lowPriorityKeywords = ["later", "sometime", "eventually"];
  const highPriorityKeywords = ["urgent", "important", "asap", "today"];

  if (task.completed) return "Low";
  if (highPriorityKeywords.some((keyword) => task.title.includes(keyword)))
    return "High";
  if (lowPriorityKeywords.some((keyword) => task.title.includes(keyword)))
    return "Low";

  return "Medium";
};

export const getSuggestedTaskOrder = (tasks: Task[]): Task[] => {
  return [...tasks].sort((a, b) => {
    const priorityOrder = { High: 0, Medium: 1, Low: 2 };
    const priorityA = getTaskPriority(a);
    const priorityB = getTaskPriority(b);

    return priorityOrder[priorityA] - priorityOrder[priorityB];
  });
};
