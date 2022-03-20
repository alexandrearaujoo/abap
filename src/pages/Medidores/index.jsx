import Sidebar from "../../components/Sidebar";
import MotionDiv from "../../components/MotionDiv";
import { Container} from "./style";
import ButtonAdd from "../../components/ButtonAdd";
import { AiOutlinePlus } from "react-icons/ai";
import DivLista from "../../components/DivLista";
import Lista from "../../components/Listas";
import FormModalMedidor from "../../components/FormModalMedidor";
import { useState } from "react";
import Header from "../../components/Header";
import Blocker from "../../components/Blocker";
import { useMedidores } from "../../providers/Medidores";

const CadastroMedidores = () => {

  const {medidores} = useMedidores()

  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Header />
      <Sidebar />

      <Container>
        <MotionDiv>
          <h2>Cadastrar Medidor</h2>
          {showForm && (
            <Blocker>
              <FormModalMedidor />
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
          <DivLista title1="Código" title2="Status">
            {medidores.map((item, index) => (
              <Lista
                key={index}
                info1={<span>{item.codigo}</span>}
                info2={<span>{item.endereco}</span>}
              />
            ))}
          </DivLista>
        </MotionDiv>
      </Container>
    </>
  );
};

export default CadastroMedidores;
