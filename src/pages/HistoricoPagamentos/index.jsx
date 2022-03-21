import { AiOutlineMenu } from "react-icons/ai";
import Busca from "../../components/Busca";
import DivLista from "../../components/DivLista";
import Header from "../../components/Header";
import Lista from "../../components/Listas";
import Main from "../../components/Main";
import MotionDiv from "../../components/MotionDiv";

const arrFaturas = [
  { mes: "Fev", consumo: 60, valor: 20, status: "Ativo" },
  { mes: "Mar", consumo: 30, valor: 30, status: "Inativo" },
  { mes: "Abr", consumo: 50, valor: 30, status: "Ativo" },
  { mes: "Jun", consumo: 42, valor: 60, status: "Ativo" },
  { mes: "Jul", consumo: 24, valor: 70, status: "Inativo" },
];

const HistoricoPagamentos = () => {
  return (
    <>
      <Header icon={<AiOutlineMenu />} user="associado" />
      <Main>
        <h2> Eu sou a página de Faturas</h2>
        <MotionDiv>
          <Busca />
          <DivLista
            title1="Mês"
            title2="Consumo"
            title3="Valor"
            title4="Status"
          >
            {arrFaturas.map((item) => (
              <Lista
                key={item.mes}
                info1={item.mes}
                info2={`${item.consumo}M³`}
                info3={item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                info4={item.status}
              />
            ))}
          </DivLista>
        </MotionDiv>
      </Main>
    </>
  );
};

export default HistoricoPagamentos;
