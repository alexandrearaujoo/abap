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
import {MdPersonAdd} from 'react-icons/md'
import { useAssociados } from "../../providers/Associados";
import ModalInfoUser from "../../components/ModalInfoUser";
import toast from "react-hot-toast";
import Main from "../../components/Main";

const Associados = () => {
  const [showForm, setShowForm] = useState(false);
  const [showInfos, setShowInfos] = useState(false);
  const { associados, infosUser, infoUser } = useAssociados();

  const [busca, setBusca] = useState(""); // Armazena dados da busca
  const [arrayBusca, setArrayBusca] = useState([]);
  const [status, setStatus] = useState("");

  let array = associados;

  // Exibe o Formulario de cadastro associado
  const handleClick = () => {
    setShowForm(!showForm);
  };

  const onSubmitBsk = (e) => {
    e.preventDefault();
    const filter = associados.filter((associado) =>
      associado.name
        .toLocaleLowerCase()
        .includes(busca.toLocaleLowerCase().trim())
    );
    setArrayBusca(filter);
    setBusca("");
    filter.length < 1 && toast.error("Não encontrei nenhuma referência!");
  };

  const changeStatus = (e) => {
    setStatus(e.target.value);
    let status = e.target.value;
    status === "Status..." || status === "Todos"
      ? setArrayBusca(associados)
      : setArrayBusca(
          associados.filter((associado) => associado.status === status)
        );
  };

  arrayBusca.length > 0
    ? (array = arrayBusca)
    : status
    ? (array = arrayBusca)
    : (array = associados);

  const handleShowInfos = () => setShowInfos(!showInfos);

  const handleInfoUser = (id) => {
    infosUser(id);
  };

  return (
    <>
      <Header icon={<AiOutlineMenu />} />
      <Sidebar />
      <Main colunm>
        <Container>
          <MotionDiv>
            
            {showForm && (
              <Blocker>
                <FormModalAssociados handleClick={handleClick} />
              </Blocker>
            )}

            <Busca
              handleClick={handleClick} // Componente de busca
              setBusca={setBusca}
              busca={busca}
              setStatus={setStatus}
              status={status}
              changeStatus={changeStatus}
              onSubmit={onSubmitBsk}
              label="Associado"
              icon={MdPersonAdd}
            />

            {showInfos && (
              <ModalInfoUser infos={infoUser} handleClick={handleShowInfos} />
            )}
            <DivLista
              title1="Nome"
              title2="Status"
              title3="Débitos"
              title4="Ações"
            >
              {array.map((itens) => (
                <Lista
                  key={itens._id}
                  info1={<span>{itens.name}</span>}
                  info2={
                    itens.status === "Ativo" ? (
                      <div className="ativo"></div>
                    ) : (
                      <div className="inativo"></div>
                    )
                  }
                  info3={itens.status === "Ativo" ? (
                    <div className="ativo"></div>
                  ) : (
                    <div className="inativo"></div>
                  )}
                  info4={
                    <div>
                      <ButtonAdd
                        color="#000"
                        icon={BsInfoSquare}
                        onClick={() => {
                          handleShowInfos();
                          handleInfoUser(itens._id);
                        }}
                      ></ButtonAdd>
                    </div>
                  }
                />
              ))}
            </DivLista>
          </MotionDiv>
          </Container>
      </Main>
    </>
  );
};

export default Associados;
