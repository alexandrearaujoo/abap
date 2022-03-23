import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Busca from "../../components/Busca";
import DivLista from "../../components/DivLista";
import Header from "../../components/Header";
import Lista from "../../components/Listas";
import Main from "../../components/Main";
import MotionDiv from "../../components/MotionDiv";
import { usePagamentos } from "../../providers/Pagamentos";
import {MdPersonAdd} from 'react-icons/md'
import { Container } from "./style";

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
        <Container>
        <h2>Historico de pagamentos</h2>
        <MotionDiv>
          <Busca icon={MdPersonAdd}/>
          <DivLista
            title1="Mês"
            title2="Consumo"
            title3="Valor"
            title4="Status"
          >
            {historicoUser.map((item) => (
              <Lista
                key={item._id}
                info1={item.createdAt.slice(0,10).split('-').reverse().join('/')}
                info2={`${item.medidor}M³`}
                info3={item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
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
