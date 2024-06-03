import { TaskService } from "@/services";

const useTasks = async () => {
  const data = TaskService.findAll();
  return data;
};

export { useTasks };
