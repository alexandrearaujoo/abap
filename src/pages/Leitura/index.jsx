import { AiOutlineMenu } from "react-icons/ai";
import Blocker from "../../components/Blocker";
import DivLista from "../../components/DivLista";
import {Section} from './style'
import FormModalAutoLeitura from "../../components/FormModalAutoLeitura";
import Header from "../../components/Header";
import Main from "../../components/Main";
import MotionDiv from "../../components/MotionDiv";

const Leitura = () => {
  return (
    <>
      <Header icon={<AiOutlineMenu />} user="associado" />
      <Main flex>
        <Section>
        <MotionDiv>
          <FormModalAutoLeitura />
        </MotionDiv>
        </Section>

      </Main>
    </>
  );
};

export default Leitura;
