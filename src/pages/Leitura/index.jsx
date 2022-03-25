import { AiOutlineMenu } from "react-icons/ai";
import { Section } from "./style";
import FormModalAutoLeitura from "../../components/FormModalAutoLeitura";
import Header from "../../components/Header";
import Main from "../../components/Main";
import MotionDiv from "../../components/MotionDiv";
import { Redirect } from "react-router-dom";

const Leitura = ({ auth }) => {
  if (!auth) {
    return <Redirect to="/login" />;
  }
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
