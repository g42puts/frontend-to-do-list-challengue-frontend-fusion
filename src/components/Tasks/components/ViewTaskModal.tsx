import { ModalContainer } from "@/components/Modal"
import { ITask } from "@/services/taskService/types"
import { dateToPtBR } from "@/utils/utils";

const ViewTaskModal = (
  { showModal, setShowModal, data }:
    { showModal: boolean, setShowModal: (arg: boolean) => void, data: ITask }
) => {

  return (
    <ModalContainer showModal={showModal} setShowModal={setShowModal} className="">
      <div className="flex flex-col justify-center p-2">
        <span className="absolute top-2 tracking-wide font-semibold underline">{data._id}</span>
        <div className="flex flex-col gap-2 justify-center">
          <span><b>Título: </b> {data.title}</span>
          <span><b>Descrição: </b>{data.description}</span>
          <span><b>Criado:</b> {dateToPtBR(data.created_at)}</span>
          <span><b>Última Atualização:</b> {dateToPtBR(data.last_update)}</span>
        </div>
      </div>
    </ModalContainer>
  )
}

export { ViewTaskModal };