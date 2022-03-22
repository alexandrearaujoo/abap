import { StyledForm, StyledMain } from "./styles";
import Input from "../Input/index";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { useEffect } from "react";
import { usePagamentos } from "../../providers/Pagamentos";
import QrCode from "../QrCode";

const AutoLeitura = () => {
  const schema = yup.object().shape({
    medidor: yup
      .string().required('Campo Obrigatorio')
  });
   const {id} = JSON.parse(localStorage.getItem('ARAP:User:'))
   const {qrCode, getHistoricoAssociado, gerarQRcode} = usePagamentos()

   useEffect(() => {
    getHistoricoAssociado(id)
  },[])

  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    gerarQRcode(data, id);
  };

  return (
    // <StyledMain>
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Leitura</h1>
      <span>Insira o código do medidor</span>
      <Input
        label="Digite o consumo"
        name="medidor"
        error={errors.medidor?.message}
        register={register}
      />
      <Button>Concluir</Button>
      {qrCode && <QrCode img={qrCode}/>}
    </StyledForm>
    // </StyledMain>
  );
};

export default AutoLeitura;
