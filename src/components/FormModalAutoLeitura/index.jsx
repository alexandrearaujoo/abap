import { StyledForm, Blocker} from "./styles";
import Input from "../Input/index";
import InputDefault from "../InputDefault";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import Button from "../Button";
import { useEffect, useState } from "react";
import { usePagamentos } from "../../providers/Pagamentos";
import QrCode from "../QrCode";

const AutoLeitura = () => {
  const schema = yup.object().shape({
    medidor: yup.string().required("Campo Obrigatorio"),
  });
  const { id } = JSON.parse(localStorage.getItem("ARAP:User:"));
  const { qrCode, getHistoricoAssociado, gerarQRcode, historicoUser } =
    usePagamentos();

  const [valorAPagar, setValorAPagar] = useState(0);

  useEffect(() => {
    getHistoricoAssociado(id);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const m3 =
      Number(data.medidor) - historicoUser[historicoUser.length - 1].medidor;
    const auxM3 = m3 <= 10 ? 18 : 18 + (m3 - 10) * 2;
    data.valor = auxM3;
    setValorAPagar(auxM3);
    gerarQRcode(data, id);
  };

  return (
    // <StyledMain>
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {valorAPagar !== 0 && <Blocker className="Blocker"/>}
      <h1>Leitura</h1>
      <span>Insira o código do medidor</span>
      <Input
        label="Digite o consumo"
        name="medidor"
        error={errors.medidor?.message}
        register={register}
      />
      <InputDefault
        width="90.8%"
        value={valorAPagar.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
        disabled={true}
        label="Total a pagar"
        bordercolor={"var(--background-menus)"}
        backgrd={"var(--white)"}
      />
      <Button backgroundColor="#4A5292">Concluir</Button>
      {qrCode && <QrCode img={qrCode} />}
    </StyledForm>
    // </StyledMain>
  );
};

export default AutoLeitura;
