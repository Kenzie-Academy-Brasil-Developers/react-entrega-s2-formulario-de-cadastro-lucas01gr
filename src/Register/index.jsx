import { appendErrors, useForm } from "react-hook-form";
import { Container } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo não preenchido")
      .matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "Digite apenas letras"),
    email: yup
      .string()
      .required("Campo não preenchido")
      .email("email inválido"),
    password: yup
      .string()
      .required("Campo não preenchido")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial!"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não corresponde"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const history = useHistory();
  const signUp = (data) => history.push(`/success/${data.name}`);
  return (
    <div>
      <Container onSubmit={handleSubmit(signUp)}>
        <label>Nome</label>
        <input type="text" {...register("name")} />
        {errors.name?.message}

        <label>Email</label>
        <input type="text" {...register("email")} />
        {errors.email?.message}

        <label>Senha</label>
        <input type="password" {...register("password")} />
        {errors.password?.message}

        <label>Confirmar Senha</label>
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword?.message}

        <button type="submit">CADASTRAR</button>
      </Container>
    </div>
  );
};
