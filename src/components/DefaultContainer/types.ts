import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface DefaultContainerProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  children: ReactNode;
}
