export interface ITask {
  _id: string;
  title: string;
  description: string;
  done: boolean;
  created_at: string;
  last_update: string;
}

export type IUpdateTask = Partial<
  Pick<ITask, "title" | "description" | "done" | "last_update">
>;
