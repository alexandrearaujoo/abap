import { useAssociados } from "../../providers/Associados";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import InputDefault from "../InputDefault";
import Button from "../Button";
import ButtonAdd from "../ButtonAdd";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Section, Form, Div } from "./style";

const ModalInfoUser = ({ infos, handleClick, setShowInfos }) => {
  const [status, setStatus] = useState("");
  const [tipoUser, setTipoUser] = useState("");
  const { updateUser} = useAssociados();

  const schema = yup.object().shape({
    name: yup.string(),
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
    data.tipo_user = tipoUser
    updateUser(data, infos._id);
    setShowInfos(false)
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit(handleUpdate)}>
        <ButtonAdd onClick={handleClick} icon={AiOutlineCloseCircle} />
        <h2>Informações do usuario</h2>
        <InputDefault
          width="90%"
          value={infos._id}
          disabled={true}
          label="ID do usuario"
          bordercolor={"var(--background-menus)"}
          backgrd={"var(--white)"}
        />

        <InputDefault
          width="90%"
          value={infos.email}
          disabled={true}
          label="Email"
          bordercolor={"var(--background-menus)"}
          backgrd={"var(--white)"}
        />

        <InputDefault
          width="90%"
          value={infos.endereco}
          disabled={true}
          label="Endereço"
          bordercolor={"var(--background-menus)"}
          backgrd={"var(--white)"}
        />

        <InputDefault
          width="90%"
          value={infos.cpf}
          disabled={true}
          label="CPF"
          bordercolor={"var(--background-menus)"}
          backgrd={"var(--white)"}
        />

        <Div>
          <InputDefault
            width="65%"
            value={infos.status}
            disabled={true}
            label="Status"
            bordercolor={"var(--background-menus)"}
            backgrd={"var(--white)"}
          />

          <select onChange={(e) => setStatus(e.currentTarget.value)}>
            <option>
              Status...
            </option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
        </Div>
        <Div>
        <InputDefault
            width="65%"
            value={infos.tipo_user}
            disabled={true}
            label="Tipo de usuário"
            bordercolor={"var(--background-menus)"}
            backgrd={"var(--white)"}
          />
          <select onChange={(e) => setTipoUser(e.currentTarget.value)}>
            <option selected disabled>
              Tipo User...
            </option>
            <option value="Gestor">Gestor</option>
            <option value="Associado">Associado</option>
          </select>
          </Div>
        <Button backgroundColor='var(--color-primary)' type="submit" margin="0px" padding="0px 5px">
          Salvar
        </Button>
      </Form>
    </Section>
  );
};

export default ModalInfoUser;
