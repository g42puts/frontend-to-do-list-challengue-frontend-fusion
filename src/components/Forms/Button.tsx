import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Loader } from "lucide-react";
import { cn } from "@/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  loading?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, loading, children, ...rest } = props;

    return (
      <button
        className={cn("p-2 text-white font-semibold rounded-md border", className)}
        {...rest}
        ref={ref}
      >
        {loading
          ? <Loader className="w-4 h-4 animate-spin" />
          : children
        }
      </button>
    )
  }
);

export { Button };