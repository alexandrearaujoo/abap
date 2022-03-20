import Sidebar from "../../components/Sidebar";
import MotionDiv from "../../components/MotionDiv";
import { Container, List } from "./style";
import Lista from "../../components/Listas";
import Header from "../../components/Header";
import { useSolicitacoes } from "../../providers/Solicitacoes";

const Solicitacoes = () => {
  const { solicitacoes } = useSolicitacoes();

  return (
    <>
      <Header />
      <Sidebar />

      <Container>
        <MotionDiv>
          <h2>Solicitações</h2>
          {solicitacoes.map((itens) => (
            <Lista
              info1={<span>{itens.name}</span>}
              info2={<span>{itens.title}</span>}
              info3={itens.status === "Pendente" ? <div className="inativo"></div> : <div className="ativo"></div>}
              info4={<span>{itens.description}</span>}
            />
          ))}
        </MotionDiv>
      </Container>
    </>
  );
};

export default Solicitacoes;
