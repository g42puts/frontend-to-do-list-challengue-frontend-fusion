import { ITask } from "@/services/taskService/types";
import { ComponentPropsWithoutRef } from "react";

export interface CardProps extends ComponentPropsWithoutRef<"div"> {
  data: ITask;
  className?: string;
}