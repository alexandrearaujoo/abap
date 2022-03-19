import Sidebar from "../../components/Sidebar";
import MotionDiv from "../../components/MotionDiv";
import { Container } from "./style";
import DivLista from "../../components/DivLista";
import Lista from "../../components/Listas";
import { useState } from "react";
import Header from "../../components/Header";

const GerenciarPagamentos = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const array = [
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
    { nome: "Jean", valor: "R$ 18" },
  ];

  return (
    <>
      <Header />
      <Sidebar />

      <Container>
        <MotionDiv>
          <h2>Pagamentos realizados</h2>
          <DivLista title1="Nome" title2="Valor" title3="Status">
            {array.map((item, index) => (
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
