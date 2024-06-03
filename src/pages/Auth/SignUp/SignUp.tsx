import { useFormik } from "formik";
import * as Yup from "yup";

import { FormContainer, TextField } from "@/components/Forms"
import { AuthService } from "@/services";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/Forms/Button";
import { CreateUser } from "@/services/authService/types";
import { DefaultContainer } from "@/components/DefaultContainer";

const SignUp = () => {
  const {
    errors,
    isSubmitting,
    getFieldProps,
    handleSubmit,
  } = useFormik<CreateUser>({
    initialValues: {
      email: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .min(10)
        .email("Insira um email válido!")
        .required("Este campo é obrigatório"),
      username: Yup.string()
        .min(6, "Mínimo de caracteres deve ser 8")
        .max(32, "Máximo de caracteres deve ser 32")
        .required("Este campo é obrigatório"),
      password: Yup.string()
        .required("Este campo é obrigatório"),
      firstName: Yup.string()
        .min(2)
        .required("Este campo é obrigatório"),
      lastName: Yup.string()
        .min(2)
        .required("Este campo é obrigatório"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await AuthService.signUp(values);
        localStorage.setItem("accessToken", response.accessToken);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <Layout>
      <DefaultContainer>
        <FormContainer className="h-[600px] flex flex-col items-center justify-center gap-6" onSubmit={handleSubmit}>
          <TextField type="text" placeholder="Username" label="Username" {...getFieldProps('username')} error={!!errors.username} helperText={errors.username} />
          <TextField type="text" placeholder="Email" label="Email" {...getFieldProps('email')} error={!!errors.email} helperText={errors.email} />
          <TextField type="text" placeholder="Primeiro Nome" label="Primeiro Nome" {...getFieldProps('firstName')} error={!!errors.firstName} helperText={errors.firstName} />
          <TextField type="text" placeholder="Sobrenome" label="Sobrenome" {...getFieldProps('lastName')} error={!!errors.lastName} helperText={errors.lastName} />
          <TextField type="password" placeholder="Password" label="Password" {...getFieldProps('password')} error={!!errors.password} helperText={errors.password} />
          <Button loading={isSubmitting} type="submit" className="w-32 hover:bg-white/10 mt-6">Cadastrar-se</Button>
        </FormContainer>
      </DefaultContainer>
    </Layout>
  )
}

export { SignUp };