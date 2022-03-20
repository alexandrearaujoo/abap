import Sidebar from "../../components/Sidebar";
import MotionDiv from "../../components/MotionDiv";
import { Container } from "./style";
import DivLista from "../../components/DivLista";
import Lista from "../../components/Listas";
import { useState } from "react";
import Header from "../../components/Header";
import { usePagamentos } from "../../providers/Pagamentos";
import {AiOutlineMenu} from 'react-icons/ai'

const GerenciarPagamentos = () => {
  const [showForm, setShowForm] = useState(false);

  const {pagamentos} = usePagamentos()

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Header icon={<AiOutlineMenu />} />
      <Sidebar />

      <Container>
        <MotionDiv>
          <h2>Pagamentos realizados</h2>
          <DivLista title1="Nome" title2="Valor" title3="Status">
            {pagamentos.map((item, index) => (
              <Lista
                key={index}
                info1={<span>{item.nome}</span>}
                info2={<span>{item.valor}</span>}
                info3={<input type="checkbox" />}
              />
            ))}
          </DivLista>
        </MotionDiv>
      </Container>
    </>
  );
};

export default GerenciarPagamentos;
