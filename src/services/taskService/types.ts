export interface ITask {
  _id: string;
  title: string;
  description: string;
  done: boolean;
  created_at: string;
  last_update: string;
}

export interface CreateTask
  extends Omit<ITask, "_id" | "created_at" | "last_update"> {}

export type IUpdateTask = Partial<
  Pick<ITask, "title" | "description" | "done">
>;
