import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "@/utils";

interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {
  value: string;
  name: string,
  label: string,
  divClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  helperText?: string;
  error?: boolean;
}

const TextField = forwardRef<ElementRef<"input">, TextFieldProps>(
  (props, ref) => {
    const {
      label,
      name,
      divClassName,
      inputClassName,
      labelClassName,
      error,
      value = "",
      helperText,
      ...rest
    } = props;

    return (
      <div className={cn("", divClassName)}>
        <label
          htmlFor={name}
          className={cn("", labelClassName)}
        >
          {label}
        </label>
        <input
          ref={ref}
          name={name}
          value={value}
          className={cn(error ? '' : '', inputClassName)}
          {...rest}
        />
        {helperText && (
          <p>{helperText}</p>
        )}
      </div>
    )
  }
)

export { TextField };