import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";

import { cn } from "@/utils";

interface FormContainerProps extends ComponentPropsWithoutRef<"form"> {
  className?: string;
  children: ReactNode;
}

const FormContainer = forwardRef<HTMLFormElement, FormContainerProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <form className={cn("flex flex-col gap-4", className)} ref={ref} {...rest}>
      {children}
    </form>
  )
})

export { FormContainer };