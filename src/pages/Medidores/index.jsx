import Sidebar from "../../components/Sidebar";
import MotionDiv from "../../components/MotionDiv";
import { Container } from "./style";
import ButtonAdd from "../../components/ButtonAdd";
import { AiOutlinePlus } from "react-icons/ai";
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

const CadastroMedidores = () => {
  const { medidores, infosMedidor, infoMedidor } = useMedidores();
  const [showForm, setShowForm] = useState(false);
  const [showInfos, setShowInfos] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleShowInfos = () => {
    setShowInfos(!showInfos);
  };

  const handleInfoMedidor = (id) => {
    infosMedidor(id);
  };

  return (
    <>
      <Header icon={<AiOutlineMenu />} />
      <Sidebar />

      <Container>
        <MotionDiv>
          <h2>Cadastrar Medidor</h2>
          {showForm && (
            <Blocker>
              <FormModalMedidor handleClick={handleClick} />
            </Blocker>
          )}
          <ButtonAdd
            icon={AiOutlinePlus}
            onClick={handleClick}
            background="#839EAC"
            heigth="20px"
            width="100px"
          >
            Adicionar
          </ButtonAdd>
          {showInfos && <ModalInfoMedidor setShowInfos={setShowInfos} showInfos={showInfos} infos={infoMedidor} handleClick={handleShowInfos}/>}
          <DivLista title1="Código" title2="Status" title3="Endereço">
            {medidores.map((item, index) => (
              <Lista
                key={index}
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
    </>
  );
};

export default CadastroMedidores;
