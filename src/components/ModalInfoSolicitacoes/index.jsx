import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputDefault from "../InputDefault";
import Input from "../Input";
import Button from "../Button";
import ButtonAdd from "../ButtonAdd";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Section, Form, Div } from "./style";
import { useSolicitacoes } from "../../providers/Solicitacoes";
import { useAssociados } from "../../providers/Associados";

const ModalInfoSolicitacoes = ({
  setShowInfos,
  infos,
  handleClick,
}) => {
  const [status, setStatus] = useState("Ativo");
  const [nome, setNome] = useState('')
  const { associados} = useAssociados();
  const {solicitacoes} = useSolicitacoes();
  const { updateSolicitacoes } = useSolicitacoes();

  // const buscaCPF = (e) => {
  //   e.preventDefault()
  
  //   const nomeBusca = solicitacoes.filter((solicitacao) => solicitacao.name === e.target.value)
  //   // const nomeBusca = associados.filter((associado) => associado.cpf.includes(e.target.value))
  //   if(nomeBusca.length !== 0){setNome(nomeBusca[0].name)}
    

  // }


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
            value={date}
            disabled={true}
            label="Data da Solicitação"
            bordercolor={'var(--background-menus)'}
            backgrd={'var(--white)'}      
          />
          

          <InputDefault
            width="90%"
            value={infos.name}
            disabled={true}
            label="Associado"
            bordercolor={'var(--background-menus)'}
            backgrd={'var(--white)'}      
            
          />
      

          <InputDefault
            width="90%"
            value={infos.title}
            disabled={true}
            label="Titulo"
            bordercolor={'var(--background-menus)'}
            backgrd={'var(--white)'}
          />

          <InputDefault
            width="90%"
            value={infos.description}
            disabled={true}
            label="Solicitação"
            bordercolor={'var(--background-menus)'}
            backgrd={'var(--white)'}
          />
            <InputDefault
            width="90%"
            value={infos.tel}
            disabled={true}
            label="Telefone"
            bordercolor={'var(--background-menus)'}
            backgrd={'var(--white)'}
          />

          <Div>
            <InputDefault
              width="65%"
              value={infos.status}
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
