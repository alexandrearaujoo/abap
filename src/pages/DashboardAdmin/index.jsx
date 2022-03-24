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
      <p>do dia 05 até dia 10</p>
    </DivNoticias>,
    <DivNoticias>
    <h3>Titulo 2</h3>
    <p>Notícia 2</p>
  </DivNoticias>,
     <DivNoticias>
     <h3>Titulo 2</h3>
     <p>Notícia 3</p>
   </DivNoticias>]  
  return (
    <>
      <div>
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
    </div>
    </>
  );
};

export default DashBoardADM;
