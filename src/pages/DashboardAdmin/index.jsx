import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { AiOutlineMenu } from "react-icons/ai";
import Main from "../../components/Main";
import { StyledSection, DivNoticias } from "./style";
import {Carousel} from '3d-react-carousal';


const DashBoardADM = () => {

  const adm = JSON.parse(localStorage.getItem('ARAP:ADM'))
  let slides = [
    <DivNoticias>
      <h3>Data de leitura</h3>
      <p>Do dia 05 até dia 10</p>
    </DivNoticias>,
    <DivNoticias>
    <h3>Limpeza periódica da caixa d'água</h3>
    <p>Dia 15, das 15h até 17h</p>
  </DivNoticias>,
     <DivNoticias>
     <h3>Valor em caixa da associação</h3>
     <p>R$: 15000,00</p>
   </DivNoticias>]  
  return (
    <>
      <Header icon={<AiOutlineMenu />} user="admin" />
      <Sidebar />
      <Main>
        <StyledSection>
        <h2>Bem-vindo, {adm.name}</h2>

          <article>
            <p>Membro desde: <span>{adm.createdAt.slice(0,10).split('-').reverse().join('/')}</span></p>
            <p>Estado: <span>{adm.estado}</span></p>
            <p>Cidade: <span>{adm.cidade}</span></p>
            <p>Bairro: <span>{adm.bairro}</span></p>
            <p>Endereço: <span>{adm.endereco}</span></p>
          </article>

        
        <h3>Notícias</h3>
        <Carousel slides={slides} autoplay={true} interval={4000} style={{width: '100%'}}/> 
        </StyledSection>
      </Main>
    </>
  );
};

export default DashBoardADM;
