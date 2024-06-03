import { forwardRef } from "react";

import { cn } from "@/utils";
import { DefaultContainerProps } from "./types";

const DefaultContainer = forwardRef<HTMLDivElement, DefaultContainerProps>(
  (props, ref) => {
    const { className, children, ...rest } = props;

    return (
      <div className={cn("max-w-[1140px] px-5 m-auto text-white", className)} ref={ref} {...rest} >
        {children}
      </div >
    )
  }
)

export { DefaultContainer };