import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputDefault from "../InputDefault";
import Button from "../Button";
import ButtonAdd from "../ButtonAdd";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Section, Form, Div } from "./style";
import { useSolicitacoes } from "../../providers/Solicitacoes";

const ModalInfoSolicitacoes = ({
  setShowInfos,
  infos,
  handleClick,
}) => {
  const [status, setStatus] = useState("Ativo");
  const { updateSolicitacoes } = useSolicitacoes();

  const schema = yup.object().shape({
    status: yup.string(),
  });

  const {
    handleSubmit
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdate = (data) => {
    data.status = status;
    updateSolicitacoes(data, infos._id);
    setShowInfos(false);

  };

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(infos.createdAt).toLocaleDateString("pt-BR", options)
  
  return (
    <Section>
      {
        <Form onSubmit={handleSubmit(handleUpdate)}>
          <ButtonAdd onClick={handleClick} icon={AiOutlineCloseCircle} />
          <h2>Informações da Solicitação</h2>
          
          <InputDefault
            width="90%"
            defaultValue={date}
            disabled={true}
            label="Data da Solicitação"
            bordercolor={'var(--background-menus)'}
            backgrd={'var(--white)'}      
          />
          

          <InputDefault
            width="90%"
            defaultValue={infos.name}
            disabled={true}
            label="Associado"
            bordercolor={'var(--background-menus)'}
            backgrd={'var(--white)'}      
            
          />
      

          <InputDefault
            width="90%"
            defaultValue={infos.title}
            disabled={true}
            label="Titulo"
            bordercolor={'var(--background-menus)'}
            backgrd={'var(--white)'}
          />

          <InputDefault
            width="90%"
            defaultValue={infos.description}
            disabled={true}
            label="Solicitação"
            bordercolor={'var(--background-menus)'}
            backgrd={'var(--white)'}
          />
            <InputDefault
            width="90%"
            defaultValue={infos.tel}
            disabled={true}
            label="Telefone"
            bordercolor={'var(--background-menus)'}
            backgrd={'var(--white)'}
          />

          <Div>
            <InputDefault
              width="65%"
              defaultValue={infos.status}
              disabled={true}
              label="Status"
              bordercolor={'var(--background-menus)'}
              backgrd={'var(--white)'}
            />
            <select onChange={(e) => setStatus(e.currentTarget.value)}>
              <option value='Ativo'>Status</option>
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>
          </Div>

          <Button backgroundColor='#4A5292' type="submit" margin="0px" padding="0px 5px">
            Salvar
          </Button>
        </Form>
      }
    </Section>
  );
};

export default ModalInfoSolicitacoes;
