import { cn } from "@/utils";
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";

interface FormContainerProps extends ComponentPropsWithoutRef<"form"> {
  className?: string;
  children: ReactNode;
}

const FormContainer = forwardRef<HTMLFormElement, FormContainerProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <form className={cn("", className)} ref={ref} {...rest}>
      {children}
    </form>
  )
})

export { FormContainer };