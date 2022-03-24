import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputDefault from "../InputDefault";
import Button from "../Button";
import ButtonAdd from "../ButtonAdd";
import { usePagamentos } from "../../providers/Pagamentos";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Section, Form, Div } from "./style";

const ModalInfoPagamento = ({handleClick, setInfosPagamentos}) => {
  const [status, setStatus] = useState("");
  const { infoPagamento, updatePagamento } = usePagamentos();


  const schema = yup.object().shape({
    name: yup.string(),
    tipo_user: yup.string(),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdate = (data) => {
    data.status = status;
    updatePagamento(data, infoPagamento._id);
    setInfosPagamentos(false)
  };

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(infoPagamento.createdAt).toLocaleDateString("pt-BR", options)

  return (
    <Section>
      <Form onSubmit={handleSubmit(handleUpdate)}>
      <ButtonAdd onClick={handleClick} icon={AiOutlineCloseCircle} />
      <h2>Informações do pagamento</h2>
        <InputDefault width='90%'value={infoPagamento.medidor} disabled={true} label='Consumo'/>
        <InputDefault width='90%' value={date} disabled={true} label='Data de pagamento'/>
        <Div>
          <InputDefault
            width="65%"
            defaultValue={infoPagamento.status}
            disabled={true}
            label="Status"
            bordercolor={'var(--background-menus)'}
            backgrd={'var(--white)'}     
          />
          <select onChange={(e) => setStatus(e.currentTarget.value)}>
            <option>Status...</option>
            <option value="Pago">Pago</option>
            <option value="Pendente">Pendente</option>
          </select>
        </Div>
        <Button backgroundColor='#4A5292'margin="0px" padding="0px 5px">Salvar</Button>
      </Form>
    </Section>
  );
};

export default ModalInfoPagamento;
