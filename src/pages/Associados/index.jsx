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
import Input from "../../components/Input";
import Busca from "../../components/Busca";
import { AiOutlineMenu } from "react-icons/ai";

const array = [
  { nome: "hamart shusssssssssss" },
  { nome: "david" },
  { nome: "jean" },
  { nome: "jean" },
  { nome: "jean" },
  { nome: "jean" },
  { nome: "jean" },
  { nome: "jean" },
  { nome: "jean" },
  { nome: "jean" },
  { nome: "jean" },
  { nome: "jean" },
  { nome: "jean" },
  { nome: "jean" },
];

const Associados = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

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
            {array.map((itens) => (
              <Lista
                info1={<span>{itens.nome}</span>}
                info2={<div></div>}
                info3={"Devedor"}
                info4={<ButtonAdd icon={BsInfoSquare}></ButtonAdd>}
              />
            ))}
          </DivLista>
        </MotionDiv>
      </Container>
    </>
  );
};

export default Associados;
