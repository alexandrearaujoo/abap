import Sidebar from "../../components/Sidebar";
import MotionDiv from "../../components/MotionDiv";
import { Container } from "./style";
import DivLista from "../../components/DivLista";
import Lista from "../../components/Listas";
import FormModalAssociados from "../../components/FormModalAssociados";
import Blocker from "../../components/Blocker";
import { useState } from "react";
import Header from "../../components/Header";
import { BsInfoSquare } from "react-icons/bs";
import ButtonAdd from "../../components/ButtonAdd";
import Busca from "../../components/Busca";
import { AiOutlineMenu } from "react-icons/ai";
import {useAssociados} from '../../providers/Associados'
import ModalInfoUser from "../../components/ModalInfoUser";

const Associados = () => {
  const [showForm, setShowForm] = useState(false);
  const [showInfos, setShowInfos] = useState(false)

  const {associados, infosUser, infoUser} = useAssociados()

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleShowInfos = () => setShowInfos(!showInfos)

  const handleInfoUser = (id) => {
    infosUser(id)
  }

  return (
    <>
      <Header icon={<AiOutlineMenu />} />
      <Sidebar />
      <Container>
        <MotionDiv>
          {/* <h2>Cadastrar Associados</h2> */}
          {showForm && <Blocker><FormModalAssociados handleClick={handleClick}/></Blocker>}
          <Busca handleClick={handleClick} />
          <DivLista
            title1="Nome"
            title2="Status"
            title3="Débitos"
            title4="Ações"
          >
            {associados.map((itens) => (
              <Lista key={itens._id}
                info1={<span>{itens.name}</span>}
                info2={itens.status === "Ativo" ? <div className="ativo"></div> : <div className="inativo"></div>}
                info3={"Devedor"}
                info4={<ButtonAdd icon={BsInfoSquare} onClick={() => {
                  handleShowInfos()
                  handleInfoUser(itens._id)
                }}></ButtonAdd>}
              />
            ))}

            {showInfos && <ModalInfoUser infos={infoUser}/>}
          </DivLista>
        </MotionDiv>
      </Container>
    </>
  );
};

export default Associados;
