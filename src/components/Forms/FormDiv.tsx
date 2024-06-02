import { cn } from "@/utils";
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";

interface FormDivProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  children: ReactNode;
}

const FormDiv = forwardRef<HTMLDivElement, FormDivProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <div className={cn("", className)} ref={ref} {...rest}>
      {children}
    </div>
  )
})

export { FormDiv };