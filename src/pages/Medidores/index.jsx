import Sidebar from "../../components/Sidebar";
import MotionDiv from "../../components/MotionDiv";
import { Container } from "./style";
import ButtonAdd from "../../components/ButtonAdd";
import { GiSpeedometer } from "react-icons/gi";
import DivLista from "../../components/DivLista";
import Lista from "../../components/Listas";
import FormModalMedidor from "../../components/FormModalMedidor";
import { useState } from "react";
import Header from "../../components/Header";
import Blocker from "../../components/Blocker";
import { useMedidores } from "../../providers/Medidores";
import { AiOutlineMenu } from "react-icons/ai";
import { BsInfoSquare } from "react-icons/bs";
import ModalInfoMedidor from "../../components/ModalInfoMedidor";
import toast from "react-hot-toast";
import Main from "../../components/Main";
import Busca from "../../components/Busca";

const CadastroMedidores = () => {
  const [showForm, setShowForm] = useState(false);
  const [showInfos, setShowInfos] = useState(false);
  const { medidores, infosMedidor, infoMedidor } = useMedidores();

  const [busca, setBusca] = useState(""); // Armazena dados da busca
  const [arrayBusca, setArrayBusca] = useState([]);
  const [status, setStatus] = useState("");

  let array = medidores;

  // Exibe o Formulario de cadastro associado
  const handleClick = () => {
    setShowForm(!showForm);
  };

  const onSubmitBsk = (e) => {
    e.preventDefault();
    const filter = medidores.filter((medidor) =>
      medidor.codigo.includes(busca.trim())
    );
    setArrayBusca(filter);
    setBusca("");
    filter.length < 1 && toast.error("Não encontrei nenhuma referência!");
  };

  const changeStatus = (e) => {
    setStatus(e.target.value);
    let status = e.target.value;
    status === "Status..." || status === "Todos"
      ? setArrayBusca(medidores)
      : setArrayBusca(medidores.filter((medidor) => medidor.status === status));
  };

  arrayBusca.length > 0
    ? (array = arrayBusca)
    : status
    ? (array = arrayBusca)
    : (array = medidores);

  const handleShowInfos = () => {
    setShowInfos(!showInfos);
  };

  const handleInfoMedidor = (id) => {
    infosMedidor(id);
  };

  console.log(medidores);
  return (
    <>
      <Header icon={<AiOutlineMenu />} />
      <Sidebar />
      <Main column>
        <Container>
          <MotionDiv>
            <h2>Cadastrar Medidor</h2>
            {showForm && (
              <Blocker>
                <FormModalMedidor handleClick={handleClick} />
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
              label="Medidor"
              icon={GiSpeedometer}
            />
            {showInfos && (
              <ModalInfoMedidor
                setShowInfos={setShowInfos}
                showInfos={showInfos}
                infos={infoMedidor}
                handleClick={handleShowInfos}
              />
            )}
            <DivLista
              title1="Código"
              title2="Status"
              title3="Endereço"
              title4="Ações"
            >
              {array.map((item) => (
                <Lista
                  key={item._id}
                  info1={<span>{item.codigo}</span>}
                  info2={
                    item.status === "Ativo" ? (
                      <div className="ativo"></div>
                    ) : (
                      <div className="inativo"></div>
                    )
                  }
                  info3={<span>{item.endereco}</span>}
                  info4={
                    <ButtonAdd
                      color="#000"
                      icon={BsInfoSquare}
                      onClick={() => {
                        handleShowInfos();
                        handleInfoMedidor(item._id);
                      }}
                    ></ButtonAdd>
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

export default CadastroMedidores;
