import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Loader } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { loading, children, ...rest } = props;

    return (
      <button
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