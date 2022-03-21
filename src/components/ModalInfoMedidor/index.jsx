import { useMedidores } from "../../providers/Medidores";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import InputDefault from "../InputDefault";
import Button from "../Button";
import ButtonAdd from "../ButtonAdd";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Section, Form, Div } from "./style";

const ModalInfoMedidores = ({
  showInfos,
  setShowInfos,
  infos,
  handleClick,
}) => {
  const [status, setStatus] = useState("");
  const { updateMedidor } = useMedidores();
    
  const schema = yup.object().shape({
    idAssociado: yup.string(),
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
    updateMedidor(data, infos._id);
    setShowInfos(!showInfos);
  };

  return (
    <Section>
      {
        <Form onSubmit={handleSubmit(handleUpdate)}>
          <ButtonAdd onClick={handleClick} icon={AiOutlineCloseCircle} />
          <h2>Informações do medidor</h2>
          <InputDefault
            width="90%"
            value={infos._id}
            disabled={true}
            label="ID do medidor"
          />

          <InputDefault
            width="90%"
            label="ID do associado"
          />

          <InputDefault
            width="90%"
            value={infos.name}
            disabled={true}
            label="Nome do associado"
          />

          <InputDefault
            width="90%"
            value={infos.endereco}
            disabled={true}
            label="Endereço"
          />

          <Div>
            <InputDefault
              width="65%"
              value={infos.status}
              disabled={true}
              label="Status"
            />
            <select onChange={(e) => setStatus(e.currentTarget.value)}>
              <option selected disabled>
                Status...
              </option>
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>
          </Div>

          <Button type="submit" margin="0px" padding="0px 5px">
            Salvar
          </Button>
        </Form>
      }
    </Section>
  );
};

export default ModalInfoMedidores;
