import Sidebar from "../../components/Sidebar";
import MotionDiv from "../../components/MotionDiv";
import { Container } from "./style";
import DivLista from "../../components/DivLista";
import Main from '../../components/Main'
import Lista from "../../components/Listas";
import { useState } from "react";
import Header from "../../components/Header";
import { usePagamentos } from "../../providers/Pagamentos";
import {AiOutlineMenu} from 'react-icons/ai'
import ButtonAdd from '../../components/ButtonAdd'
import ModalInfoPagamentos from '../../components/ModalInfoPagamentos'
import { BsInfoSquare } from "react-icons/bs";
import Blocker from '../../components/Blocker'

const GerenciarPagamentos = () => {
  const [showInfosPagamentos, setInfosPagamentos] = useState(false);

  const handleClick = () => setInfosPagamentos(!showInfosPagamentos)

  const {pagamentos, getPagamento} = usePagamentos()

  const handleInfoPagamento = (id) => {
    getPagamento(id);
  };

  return (
    <>
      <Header icon={<AiOutlineMenu />} />
      <Sidebar />
      <Main colunm>
      <Container>
      
        <MotionDiv>
          <h2>Gerenciar Pagamentos</h2>
          {showInfosPagamentos && <Blocker><ModalInfoPagamentos setInfosPagamentos={setInfosPagamentos} handleClick={handleClick}/></Blocker>}
          <DivLista title1="Nome" title2="Valor" title3="Status" title4='Ações'>
            {pagamentos.map((item, index) => (
              <Lista
                key={index}
                info1={<span>{item.name}</span>}
                info2={<span>{item.valor}</span>}
                info3={<span>{item.status}</span>}
                info4={<ButtonAdd
                  color="#000"
                  icon={BsInfoSquare}
                  onClick={() => {
                    handleClick();
                    handleInfoPagamento(item._id);
                  }}
                ></ButtonAdd>}
              />
            ))}
          </DivLista>
        </MotionDiv>
        
      </Container>
      </Main>
    </>
  );
};

export default GerenciarPagamentos;
