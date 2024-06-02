import { api } from "@/api";
import { IUpdateTask } from "./types";

const TaskService = {
  findAll: async () => {
    const { data } = await api.get("/tasks");
    return data;
  },
  findOne: async (id: string) => {
    const { data } = await api.get(`/tasks/${id}`);
    return data;
  },
  delete: async (id: string) => {
    const { data } = await api.delete(`/tasks/${id}`);
    return data;
  },
  update: async (id: string, payload: IUpdateTask) => {
    const { data } = await api.put(`/tasks/${id}`, payload);
    return data;
  },
};

export { TaskService };
