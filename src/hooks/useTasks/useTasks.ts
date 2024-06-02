import { TaskService } from "@/services";

const useTasks = async () => {
  return await TaskService.findAll();
};

export { useTasks };
