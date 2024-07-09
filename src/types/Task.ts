export interface Task {
  title: string;
  completed: boolean;
  createdAt: Date;
  id: string;
  priority?: "High" | "Medium" | "Low";
}
