import { StyledForm, StyledMain } from "./styles";
import Input from "../Input/index";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../Button";

const AutoLeitura = () => {
  const schema = yup.object().shape({
    nome_completo: yup.string().required("Nome obrigatório"),
    numero_registro: yup
      .string()
      .required("Nº registro obrigatório!")
      .matches(/[0-9]+/, "Insira apenas números")
      .min(6, "Insira no mínimo 6 digitos")
      .max(8, "Insira no máximo 8 digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data.numero_registro);
  };

  return (
    // <StyledMain>
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Leitura</h1>
      <span>Insira o código do medidor</span>
      <Input
        label="Nome do Associado"
        name="nome_completo"
        error={errors.nome_completo?.message}
        register={register}
      />
      <Input
        label="Nº do Registro"
        name="numero_registro"
        error={errors.numero_registro?.message}
        register={register}
      />
      <Button>Concluir</Button>
    </StyledForm>
    // </StyledMain>
  );
};

export default AutoLeitura;
