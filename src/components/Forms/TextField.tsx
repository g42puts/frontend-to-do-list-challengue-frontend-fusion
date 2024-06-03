import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLInputTypeAttribute, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

import { cn } from "@/utils";

interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {
  value: string;
  name: string,
  label: string,
  type: HTMLInputTypeAttribute | 'textarea',
  divClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  helperText?: string;
  error?: boolean;
}

const TextField = forwardRef<ElementRef<"input" | "textarea">, TextFieldProps>(
  (props, ref) => {
    const {
      value = "",
      name,
      label,
      type,
      divClassName,
      inputClassName,
      labelClassName,
      error,
      helperText,
      ...rest
    } = props;

    const values:
      React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
      | React.DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
      = {
      name: name,
      value: value,
      type: type == 'password' ? 'password' : undefined,
      className:
        cn(
          "p-2 block rounded-md outline-none border-2 border-black focus:border-blue-500 focus:ring-blue-500 text-black",
          error
            ? 'border-red-500 ring-red-500'
            : 'border-green-500 ring-green-500',
          inputClassName
        ),
      ...rest
    }

    return (
      <div className={cn("flex flex-col gap-2", divClassName)}>
        <label
          htmlFor={name}
          className={cn("text-sm", labelClassName)}
        >
          {label}
        </label>
        {type === 'textarea' ? (
          <textarea ref={ref as React.Ref<HTMLTextAreaElement>} {...values as React.TextareaHTMLAttributes<HTMLTextAreaElement>} />
        ) : (
          <input ref={ref as React.Ref<HTMLInputElement>} type={type} {...values as React.InputHTMLAttributes<HTMLInputElement>} />
        )}
        {helperText && (
          <div className="relative">
            <p className="absolute text-sm -mt-1">{helperText}</p>
          </div>
        )}
      </div>
    )
  }
)

export { TextField };