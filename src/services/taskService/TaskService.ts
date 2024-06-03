import { api } from "@/api";
import { CreateTask, ITask, IUpdateTask } from "./types";
import { IServerResponse } from "@/types";

const TaskService = {
  findAll: async (): Promise<ITask[]> => {
    const { data } = await api.get<IServerResponse<ITask[]>>("/tasks");
    return data.data;
  },
  findOne: async (id: string): Promise<ITask> => {
    const { data } = await api.get<IServerResponse<ITask>>(`/tasks/${id}`);
    return data.data;
  },
  markAsDone: async (id: string): Promise<number> => {
    const { data } = await api.get<IServerResponse>(`/tasks/done/${id}`);
    return data.statusCode;
  },
  create: async (payload: CreateTask): Promise<number> => {
    const { data } = await api.post<IServerResponse>(`/tasks`, payload);
    return data.statusCode;
  },
  delete: async (id: string): Promise<number> => {
    const { data } = await api.delete<IServerResponse>(`/tasks/${id}`);
    return data.statusCode;
  },
  update: async (id: string, payload: IUpdateTask): Promise<number> => {
    const { data } = await api.put<IServerResponse>(`/tasks/${id}`, payload);
    return data.statusCode;
  },
};

export { TaskService };
