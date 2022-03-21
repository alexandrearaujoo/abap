import { AiOutlineMenu } from "react-icons/ai";
import DivLista from "../../components/DivLista";
import FormModalAutoLeitura from "../../components/FormModalAutoLeitura";
import Header from "../../components/Header";
import Main from "../../components/Main";
import MotionDiv from "../../components/MotionDiv";

const Leitura = () => {
  return (
    <>
      <Header icon={<AiOutlineMenu />} user="associado" />
      <Main flex>
        <MotionDiv>
          <FormModalAutoLeitura />
        </MotionDiv>
      </Main>
    </>
  );
};

export default Leitura;
