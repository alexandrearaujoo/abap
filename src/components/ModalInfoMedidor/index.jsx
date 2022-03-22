import { useMedidores } from "../../providers/Medidores";
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
import { useAssociados } from "../../providers/Associados";

const ModalInfoMedidores = ({
  showInfos,
  setShowInfos,
  infos,
  handleClick,
}) => {
  const [status, setStatus] = useState("Ativo");
  const [nome, setNome] = useState('')
  const { associados, infosUser, infoUser } = useAssociados();
  const { updateMedidor } = useMedidores();

console.log(associados)
  const buscaCPF = (e) => {
    e.preventDefault()
  
    const nomeBusca = associados.filter((associado) => associado.cpf === e.target.value)
    // const nomeBusca = associados.filter((associado) => associado.cpf.includes(e.target.value))
    if(nomeBusca.length !== 0){setNome(nomeBusca[0].name)}
    

  }

  console.log(nome)

  const schema = yup.object().shape({
    cpf: yup.string().required("Cpf Obrigatório"),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(register.value)

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
          
            value={infos.numero}
            disabled={true}
            label="Número do medidor"
            bordercolor={'var(--background-menus)'}
            backgrd={'var(--white)'}

          
          />
          

          <Input
            label="CPF Associado"
            name="cpf"
            error={errors.cpf?.message}
            register={register}
            onChange={buscaCPF}
            
          />
      

          <InputDefault
            width="90%"
            value={nome}
            disabled={true}
            label="Nome do associado"
            bordercolor={'var(--background-menus)'}
            backgrd={'var(--white)'}
          />

          <InputDefault
            width="90%"
            value={infos.endereco}
            disabled={true}
            label="Endereço"
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

          <Button type="submit" margin="0px" padding="0px 5px">
            Salvar
          </Button>
        </Form>
      }
    </Section>
  );
};

export default ModalInfoMedidores;
