import { forwardRef, Suspense, useState } from "react"
import { Check, Pencil, X } from "lucide-react";

import { CardProps } from "./types";
import { cn } from "@/utils";
import { TaskService } from "@/services";
import { UpdateTaskModal } from "./UpdateTaskModal";
import { ITask } from "@/services/taskService/types";
import { useAuth } from "@/hooks";
import { ViewTaskModal } from "./ViewTaskModal";

const Card = forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const auth = useAuth();

    const { className, data, ...rest } = props;
    const [task, setTask] = useState<ITask>(data);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [done, setDone] = useState(task.done);

    const handleChangeDone = async () => {
      try {
        const response = await TaskService.markAsDone(task._id);
        console.log(response)
        if (response === 200) {
          setTask((prevValues) => {
            return { ...prevValues, done: !prevValues.done }
          })
          setDone((prevValue) => !prevValue);
        }
      } catch (err) {
        window.alert(`Erro ao mudar status`);
        console.error(`Erro ao mudar status: `, err)
      }
    }

    const onDelete = async () => {
      try {
        const response = await TaskService.delete(task._id);
        if (response === 200) {
          window.alert('Task Deletada com sucesso!')
        }
      } catch (err) {
        window.alert('Erro ao deletar task!')
      }
    }

    return (
      <>
        <div className={cn("relative flex flex-row border-[1px] rounded-md p-2 justify-between", className)} ref={ref} {...rest}>
          <div className="flex relative flex-col gap-4 w-full cursor-pointer" onClick={() => {
            if (auth) { setShowViewModal(!showViewModal) }
            else { window.alert('Faça login para continuar!') }
          }}>
            <span>{task.title} ⬇</span>
            <span className="overflow-hidden min-h-10 max-h-20">{task.description}</span>

          </div>
          <Suspense fallback={<span>Loading...</span>}>
            {showViewModal && <ViewTaskModal showModal={showViewModal} setShowModal={setShowViewModal} data={task} />}
          </Suspense>
          <div className="flex flex-col justify-between gap-1 items-center h-fit">
            <span onClick={() => {
              if (auth) { setShowCreateModal(!showCreateModal) }
              else { window.alert('Faça login para continuar!') }
            }}>
              <Pencil />
            </span>
            <span onClick={() => {
              if (auth) { onDelete() }
              else { window.alert('Faça login para continuar!') }
            }}></span>
            <span
              className="flex flex-row border rounded-md cursor-pointer bg-white"
              onClick={() => {
                if (auth) { handleChangeDone() }
                else { window.alert('Faça login para continuar!') }
              }}
            >
              {done ? <Check className="text-green-500" /> : <X className="text-red-500" />}
            </span>

          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2/6 bg-gradient-to-t from-slate-800 to-slate-800/25 pointer-events-none" />
          {/* <span>{task._id}</span> */}
        </div >
        <Suspense fallback={<span>Loading...</span>}>
          {showCreateModal && <UpdateTaskModal showModal={showCreateModal} setShowModal={setShowCreateModal} task={task} setData={setTask} />}
        </Suspense>
      </>
    )
  }
)

export { Card };