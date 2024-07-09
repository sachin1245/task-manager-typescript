import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/Task";
import { getTaskPriority } from "../services/aiService";
import { stat } from "fs";

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, "priority">>) => {
      const newTask = {
        ...action.payload,
        id: Date.now().toString(),
        priority: getTaskPriority(action.payload),
      };
      state.tasks.push(newTask);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        task.priority = getTaskPriority(task);
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = {
          ...action.payload,
          priority: getTaskPriority(action.payload),
        };
      }
    },
  },
});

export const { addTask, removeTask, toggleTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
