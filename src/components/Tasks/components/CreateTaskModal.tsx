import { useFormik } from "formik";
import Select from "react-select";
import * as Yup from "yup";

import { FormContainer, TextField } from "@/components/Forms";
import { Button } from "@/components/Forms/Button";
import { ModalContainer } from "@/components/Modal";
import { TaskService } from "@/services";
import { CreateTask } from "@/services/taskService/types";

const CreateTaskModal = (
  { showModal, setShowModal }: { showModal: boolean, setShowModal: (arg: boolean) => void }
) => {
  const {
    errors,
    isSubmitting,
    getFieldProps,
    setFieldValue,
    handleSubmit,
  } = useFormik<CreateTask>({
    initialValues: {
      title: '',
      description: '',
      done: false
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Este campo é obrigatório"),
      description: Yup.string().required("Este campo é obrigatório"),
      done: Yup.boolean(),
    }),
    onSubmit: async (values) => {
      try {
        const response = await TaskService.create(values);
        if (response === 200) {
          window.alert('Task criada com sucesso')
        }
      } catch (err) {
        console.log(err);
      }
    }
  })

  const doneOptions = [
    { value: false, label: 'Não' },
    { value: true, label: 'Sim' }
  ]

  return (
    <ModalContainer showModal={showModal} setShowModal={setShowModal}>
      <div className="flex flex-col justify-center">
        <span className="text-xl tracking-wide font-semibold text-center mb-6">Adicionar mais tasks</span>
        <FormContainer className="w-[80%] m-auto" onSubmit={handleSubmit}>
          <TextField type="text" placeholder="Título" label="Título" {...getFieldProps('title')} error={!!errors.title} helperText={errors.title} />
          <TextField type="textarea" placeholder="Descrição" label="Descrição" {...getFieldProps('description')} error={!!errors.description} helperText={errors.description} />
          <div className="flex flex-col gap-2">
            <label htmlFor="select-done" className="text-sm">Feito?</label>
            <Select name="select-done" onChange={(value) => setFieldValue('done', value?.value)} options={doneOptions} />
          </div>
          {/* <TextField type="checkbox" placeholder="Concluído" label="Concluído" {...getFieldProps('done')} error={!!errors.done} helperText={errors.done} /> */}
          <Button loading={isSubmitting} type="submit" className="text-black" >Criar</Button>
        </FormContainer>
      </div>
    </ModalContainer>
  )
}


export { CreateTaskModal };