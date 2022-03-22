import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Busca from "../../components/Busca";
import DivLista from "../../components/DivLista";
import Header from "../../components/Header";
import Lista from "../../components/Listas";
import Main from "../../components/Main";
import MotionDiv from "../../components/MotionDiv";
import { usePagamentos } from "../../providers/Pagamentos";

const HistoricoPagamentos = () => {

  const {id} = JSON.parse(localStorage.getItem('ARAP:User:'))
  const {getHistoricoAssociado, historicoUser} = usePagamentos()
  
  useEffect(() => {
    getHistoricoAssociado(id)
  },[])

  return (
    <>
      <Header icon={<AiOutlineMenu />} user="associado" />
      <Main>
        <h2>Eu sou sua página de faturas</h2>
        <MotionDiv>
          <Busca />
          <DivLista
            title1="Mês"
            title2="Consumo"
            title3="Valor"
            title4="Status"
          >
            {historicoUser.map((item) => (
              <Lista
                key={item._id}
                info1={item.createdAt}
                info2={`${item.medidor}M³`}
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
