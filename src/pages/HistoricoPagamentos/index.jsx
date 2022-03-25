import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Busca from "../../components/Busca";
import DivLista from "../../components/DivLista";
import Header from "../../components/Header";
import Lista from "../../components/Listas";
import Main from "../../components/Main";
import MotionDiv from "../../components/MotionDiv";
import { usePagamentos } from "../../providers/Pagamentos";
import { Container } from "./style";
import toast from "react-hot-toast";
import { Redirect } from "react-router-dom";

const HistoricoPagamentos = ({ auth }) => {
  const { id } = JSON.parse(localStorage.getItem("ARAP:User:")) || "";
  const { getHistoricoAssociado, historicoUser } = usePagamentos();
  const [busca, setBusca] = useState(""); // Armazena dados digitados na busca
  const [arrayBusca, setArrayBusca] = useState([]); //armazena buscas
  const [status, setStatus] = useState(""); //estado no select

  let array = historicoUser;

  const onSubmitBsk = (e) => {
    e.preventDefault();
    const filter = historicoUser.filter(
      (associado) => associado.createdAt.slice(0, 4) === busca
    );
    setArrayBusca(filter);
    setBusca("");
    filter.length < 1 && toast.error("Não encontrei nenhuma referência!");
  };
  const changeStatus = (e) => {
    setStatus(e.target.value);
    let status = e.target.value;
    status === "Status..." || status === "Todos"
      ? setArrayBusca(historicoUser)
      : setArrayBusca(
          historicoUser.filter((associado) => associado.status === status)
        );
  };

  arrayBusca.length > 0
    ? (array = arrayBusca)
    : status
    ? (array = arrayBusca)
    : (array = historicoUser);

  useEffect(() => {
    getHistoricoAssociado(id);
  }, []);

  if (!auth) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Header icon={<AiOutlineMenu />} user="associado" />
      <Main>
        <Container>
          <h2>Historico de pagamentos</h2>
          <MotionDiv>
            <Busca
              //  handleClick={handleClick} // Componente de busca
              setBusca={setBusca}
              busca={busca}
              setStatus={setStatus}
              status={status}
              changeStatus={changeStatus}
              onSubmit={onSubmitBsk}
              label="Ano"
              // icon={MdPersonAdd}
              ger={1}
              // icon={MdPersonAdd}
            />
            <DivLista
              title1="Mêsmes"
              title2="Consumo"
              title3="Valor"
              title4="Status"
            >
              {array.map((item) => (
                <Lista
                  key={item._id}
                  info1={item.createdAt
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("/")}
                  info2={`${item.medidor}M³`}
                  info3={item.valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                  info4={item.status}
                />
              ))}
            </DivLista>
          </MotionDiv>
        </Container>
      </Main>
    </>
  );
};
export default HistoricoPagamentos;
