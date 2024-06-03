import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FormContainer, TextField } from "@/components/Forms"
import { AuthService } from "@/services";
import { AuthContext } from "@/contexts/AuthProvider";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/Forms/Button";
import { LoginProps } from "@/services/authService/types";
import { DefaultContainer } from "@/components/DefaultContainer";

const SignIn = () => {
  const { getProfile } = useContext(AuthContext);

  const {
    errors,
    isSubmitting,
    getFieldProps,
    handleSubmit,
  } = useFormik<LoginProps>({
    initialValues: {
      username: '',
      password: '',
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Este campo é obrigatório"),
      password: Yup.string().required("Este campo é obrigatório")
    }),
    onSubmit: async (values) => {
      try {
        const response = await AuthService.signIn(values);
        localStorage.setItem("accessToken", response.accessToken);
        getProfile();
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <Layout>
      <DefaultContainer>
        <FormContainer className="h-[600px] flex flex-col items-center justify-center gap-10" onSubmit={handleSubmit}>
          <TextField type="text" placeholder="Username" label="Username" {...getFieldProps('username')} error={!!errors.username} helperText={errors.username} />
          <TextField type="password" placeholder="Password" label="Password" {...getFieldProps('password')} error={!!errors.password} helperText={errors.password} />
          <Button loading={isSubmitting} type="submit" className="w-20">Entrar</Button>
        </FormContainer>
      </DefaultContainer>
    </Layout>
  )
}

export { SignIn };