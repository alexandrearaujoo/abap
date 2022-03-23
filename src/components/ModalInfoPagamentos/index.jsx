import { useAssociados } from "../../providers/Associados";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import InputDefault from "../InputDefault";
import Button from "../Button";
import ButtonAdd from "../ButtonAdd";
import { usePagamentos } from "../../providers/Pagamentos";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Section, Form, Div } from "./style";

const ModalInfoUser = ({ handleClick }) => {
  const [status, setStatus] = useState("");
  const { infoPagamento } = usePagamentos();

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

  // const handleUpdate = (data) => {
  //   data.status = status;
  //   updateUser(data, infoPagamento._id);
  // };

  return (
    <Section>
      <Form>
        <ButtonAdd onClick={handleClick} icon={AiOutlineCloseCircle} />
        <h2>Informações do pagamento</h2>
        <InputDefault
          width="90%"
          value={infoPagamento.medidor}
          disabled={true}
          label="Consumo"
          bordercolor={'var(--background-menus)'}
          backgrd={'var(--white)'}     
        />
        <InputDefault
          width="90%"
          value={infoPagamento.createdAt}
          disabled={true}
          label="Data de pagamento"
          bordercolor={'var(--background-menus)'}
          backgrd={'var(--white)'}     
        />
        <Div>
          <InputDefault
            width="65%"
            value={infoPagamento.status}
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
        <Button type="submit" margin="0px" padding="0px 5px">
          Salvar
        </Button>
      </Form>
    </Section>
  );
};

export default ModalInfoUser;
