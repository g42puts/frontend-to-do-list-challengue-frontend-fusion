import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react"
import { X } from "lucide-react";

import { Button } from "@/components/Forms/Button";
import { cn } from "@/utils";

export interface ModelContainerProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  children: ReactNode;
}

const ModalContainer = forwardRef<HTMLDivElement, ModelContainerProps>(
  (props, ref) => {
    const { className, showModal, setShowModal, children, ...rest } = props;

    return (
      <div className="fixed z-50 bg-opacity-40 bg-black inset-0 duration-1000 text-black font-normal tracking-wide">
        <div
          className={cn(
            "fixed flex-col -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 pb-10 rounded-md bg-white max-w-[400px] w-full",
            className
          )}
          ref={ref}
          id="createModal"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="text-end" {...rest}>
            <Button loading={false} className="p-0 border-none" onClick={() => setShowModal(!showModal)}>
              <X className="text-red-600" size={36} />
            </Button>
          </div>
          {children}
        </div>
      </div>
    )
  }
)

export { ModalContainer };