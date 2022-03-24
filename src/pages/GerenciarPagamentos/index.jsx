import Sidebar from "../../components/Sidebar";
import MotionDiv from "../../components/MotionDiv";
import { Container } from "./style";
import DivLista from "../../components/DivLista";
import Main from "../../components/Main";
import Lista from "../../components/Listas";
import { useState } from "react";
import Header from "../../components/Header";
import { usePagamentos } from "../../providers/Pagamentos";
import { AiOutlineMenu } from "react-icons/ai";
import ButtonAdd from "../../components/ButtonAdd";
import ModalInfoPagamentos from "../../components/ModalInfoPagamentos";
import { BsInfoSquare } from "react-icons/bs";
import Blocker from "../../components/Blocker";
import toast from "react-hot-toast";
import {MdPersonAdd} from 'react-icons/md'
import Busca from "../../components/Busca";

const GerenciarPagamentos = () => {
  const [showInfosPagamentos, setInfosPagamentos] = useState(false);
  const { pagamentos, getPagamento } = usePagamentos();
 
  const [busca, setBusca] = useState('');                 // Armazena dados digitados na busca
  const [arrayBusca, setArrayBusca] = useState([]);     //armazena buscas
  const [status, setStatus] = useState('');       //estado no select
  
  
  let array = pagamentos
  

  const onSubmitBsk = (e) => {
    e.preventDefault();
    const filter =pagamentos.filter((associado) =>
      associado.name
        .toLocaleLowerCase()
        .includes(busca.toLocaleLowerCase().trim())
    );
    setArrayBusca(filter);
    setBusca("");
    filter.length < 1 && toast.error("Não encontrei nenhuma referência!");
  };

  const changeStatus = (e) => {
    setStatus(e.target.value);
    let status = e.target.value;
    status === "Status..." || status === "Todos"
      ? setArrayBusca(pagamentos)
      : setArrayBusca(
        pagamentos.filter((associado) => associado.status === status)
        );
  };

  arrayBusca.length > 0
    ? (array = arrayBusca)
    : status
    ? (array = arrayBusca)
    : (array =pagamentos);

   



  const handleClick = () => setInfosPagamentos(!showInfosPagamentos);

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
            {showInfosPagamentos && (
              <Blocker>
                <ModalInfoPagamentos
                  setInfosPagamentos={setInfosPagamentos}
                  handleClick={handleClick}
                />
              </Blocker>
            )}
            
            <Busca
              handleClick={handleClick} // Componente de busca
              setBusca={setBusca}
              busca={busca}
              setStatus={setStatus}
              status={status}
              changeStatus={changeStatus}
              onSubmit={onSubmitBsk}
              label="Associado"
              // icon={MdPersonAdd}
              ger={1}
            />


            <DivLista
              title1="Nome"
              title2="Valor"
              title3="Status"
              title4="Ações"
            >
              {array.map((item, index) => (
                <Lista
                  key={index}
                  info1={<span>{item.name}</span>}
                  info2={<span>{item.valor}</span>}
                  info3={<span>{item.status}</span>}
                  info4={
                    <ButtonAdd
                      color="#000"
                      icon={BsInfoSquare}
                      onClick={() => {
                      handleClick();
                      handleInfoPagamento(item._id);

                      }}
                    ></ButtonAdd>
                  }
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
